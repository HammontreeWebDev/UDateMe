import React, { useState } from 'react';
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
            <p>
                Hello World!
                <br></br>
                This is the landing page!
            </p>
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