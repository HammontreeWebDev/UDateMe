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
        <section id='conversation-component'>
        <p>
            This is the Conversation Starters Component!
            <button onClick={fetchConversationStarter}>Convo Starter</button>
        </p>
        <p id='generated-response'></p>
        </section>
    )
};

export default ConversationStarters;