import React, { useState } from 'react';

// Bootstrap:
import Accordion from 'react-bootstrap/Accordion';

// CSS:
import "./assets/css/landing.css";

// components:
import LandingNavBar from '../components/LandingNavBar';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

// Landing Page

const Landing = () => {

    const setAll = (isFalse) => {
        setShowMainContent(isFalse);
        setShowLogin(isFalse);
        setShowSignup(isFalse);
    }

    const [showMainContent, setShowMainContent] = useState(true);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const loginClick = () => {
        setAll(false);
        setShowLogin(true);
    }

    const signupClick = () => {
        setAll(false);
        setShowSignup(true);
    }

    const homeClick = () => {
        setAll(false);
        setShowMainContent(true);
    }

    const MainContent = () => {
        return (
            <>
            <h1 className='landing-header'>
                Welcome to UDateMe!
            </h1>
            <Accordion defaultActiveKey="0" className='custom-accordion'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='accordion-header'>Getting Started</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='accordion-header'>Is this a dating app?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </>
        )
    };

    return (
        <>
            <header>
                <LandingNavBar loginClick={loginClick} signUpClick={signupClick} homeClick={homeClick} />
            </header>
            <main>
                <section className='landing'>
                    {showMainContent ? <MainContent /> : null}
                    {showLogin ? <Login /> : null}
                    {showSignup ? <SignUp /> : null}
                </section>
            </main>
        </>
    );
}

export default Landing;