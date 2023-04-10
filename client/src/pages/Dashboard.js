import React, { useState } from 'react';

// components:
import DashboardNavBar from '../components/DashboardNavBar';

// Dashboard Page

const Dashboard = () => {

    return(
        <>
        <DashboardNavBar />
        <p>
            Yo, what's up!

            <br></br>

            This is the Dashboard page.
            You shouldn't see me unless you are logged in!
            
        </p>
        </>
    )
};

export default Dashboard;