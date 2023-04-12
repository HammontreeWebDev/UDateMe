import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

// BootStrap:
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// CSS:
import './assets/css/login.css';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    /// HANDLE CHANGE ///
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    /// FORM SUBMISSION ///
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (error) {
            console.log(error);
        }

        setFormState({
            email: '',
            password: '',
        });
    };
    return (
        <>
            <Form onSubmit={handleFormSubmit} className='default-font custom-form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='custom-label'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className='custom-placeholder'
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='custom-label'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"
                        value={formState.password}
                        onChange={handleChange}
                        className='custom-placeholder'
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            {error && (
                <div>{error.message}</div>
            )}
        </>
    )
}

export default Login;