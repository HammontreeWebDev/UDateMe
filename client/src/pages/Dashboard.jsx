import React, { useState } from 'react';
import Auth from '../utils/auth';

// components:
import DashboardNavBar from '../components/DashboardNavBar';
import ConversationStarters from '../components/ConversationStarters';
import Dining from '../components/Dining';
import Entertainment from '../components/Entertainment';

// Dashboard Page

const Dashboard = () => {

    const setAll = (isFalse) => {
        setShowMainContent(isFalse);
        setShowConversation(isFalse);
        setShowDining(isFalse);
        setShowEntertainment(isFalse);
    }

    const [showMainContent, setShowMainContent] = useState(true);
    const [showConversation, setShowConversation] = useState(false);
    const [showDining, setShowDining] = useState(false);
    const [showEntertainment, setShowEntertainment] = useState(false);

    const homeClick = () => {
        setAll(false);
        setShowMainContent(true);
    }

    const conversationClick = () => {
        setAll(false);
        setShowConversation(true);
    }

    const diningClick = () => {
        setAll(false);
        setShowDining(true);
    }

    const entertainmentClick = () => {
        setAll(false);
        setShowEntertainment(true);
    }

    const logoutClick = () => {
        // TODO: Should add some sort of prompt to confirm that the user wants to logout... sweetalerts or search for something newer / similar.. or possibly do a custom one?
        Auth.logout();
    }

    const MainContent = () => {
        return(
            <p>
            Yo, what's up!

            <br></br>

            This is the Dashboard page.
            You shouldn't see me unless you are logged in!
            
        </p>
        )
    }

    return(
        <>
        <header>
        <DashboardNavBar homeClick={homeClick} conversationClick={conversationClick} diningClick={diningClick} entertainmentClick={entertainmentClick} logoutClick={logoutClick} />
        </header>
        <main className='dashboard-main'>
            <section>
            {showMainContent ? <MainContent /> : null}
            {showConversation ? <ConversationStarters /> : null}
            {showDining ? <Dining /> : null}
            {showEntertainment ? <Entertainment /> : null}
            </section>
        </main>
        </>
    )
};

export default Dashboard;