import React, { useState } from "react";

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

// BootStrap:
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUp = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    /// UPDATES STATE BASED ON INPUT ///
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    /// HANDLE SUBMISSION OF FORM ///
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            Auth.login(data.addUser.token, data.addUser.user._id);
        } catch (error) {
            console.log('Something went wrong');
            console.log(error);
        };
    };

    return (
        <>
            <Form onSubmit={handleFormSubmit}>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" type="text" placeholder="Enter username"
                        value={formState.username}
                        onChange={handleChange} />
                    <Form.Text className="text-muted">
                        This is the name we will use to greet you.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        Please create a password longer than 8 characters.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {error && (
                <div>
                    {error.message}
                </div>
            )}
        </>
    )
}

export default SignUp;