import React, { useState } from 'react';
import "./assets/css/landing.css";

// components:
import LandingNavBar from '../components/LandingNavBar';

// Landing Page

const Landing = () => {

    return (
        <>
        <LandingNavBar />
        <p>
            Hello World!
            <br></br>
            This is the landing page!
        </p>
        </>
    );
}

export default Landing;