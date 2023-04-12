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
                        You've taken the first step already by visiting this application!
                        <br></br>
                        <br></br>
                        In order to fully unlock everything that this application has to
                        offer you, simply click on the hamburger icon in the nav bar and sign up for a new account.
                        <br></br>
                        <br></br>
                        Don't worry, it's free!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='accordion-header'>Is this a dating app?</Accordion.Header>
                    <Accordion.Body>
                        This is not a typical 'dating app'. We don't pair you with other people or allow you to view other people's profiles that they have created.
                        <br></br>
                        <br></br>
                        Instead, we aim to encourage you in your newly found relationship or even a relationship that you have been in for a long time. We offer fun things like random conversation starters to use between you and your partner. Feel free to make a game out of it!
                        <br></br>
                        <br></br>
                        We also offer things like restaraunt and entertainment suggestions that are based off your location.
                        <br></br>
                        <br></br>
                        You can also create a 'partner profile' where you are given the opportunity to take a quiz on your partner's behalf (or you can have them take the quiz). Based off these answers, we will create a custom generated list of gift ideas for you to be able to use for any given occasion.
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