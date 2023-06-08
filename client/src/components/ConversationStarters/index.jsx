import React from 'react';
import questionList from '../../utils/conversation';
import './assets/css/conversation.css';

const ConversationStarters = () => {

    // function to choose random question from Question List
    function fetchConversationStarter() {
        const generatedResponseEl = document.querySelector('#generated-response');
        const randomQuestion = Math.floor(Math.random() * questionList.length);
        const chosenQuestion = questionList[randomQuestion];
        generatedResponseEl.textContent = chosenQuestion;
    }


    return (
        <section id='conversation-component' className='default-font'>
            <h1 className='component-title'>Conversation Starters</h1>
            <div className='section-content'>
                <button id='convo-button' onClick={fetchConversationStarter}>Generate</button>
                <p id='generated-response'>Click the "Generate" button to get started!</p>
            </div>
        </section>
    )
};

export default ConversationStarters;