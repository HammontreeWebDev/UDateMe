import React from 'react';
import questionList from '../../utils/conversation';

const ConversationStarters = () => {

    // function to choose random question from Question List
    function fetchConversationStarter() {
        const generatedResponseEl = document.querySelector('#generated-response');
        const randomQuestion = Math.floor(Math.random() * questionList.length);
        const chosenQuestion = questionList[randomQuestion];
        generatedResponseEl.textContent = chosenQuestion;
    }
    

    return (
        <>
        <p>
            This is the Conversation Starters Component!
            <button onClick={fetchConversationStarter}>Convo Starter</button>
        </p>
        <p id='generated-response'></p>
        </>
    )
};

export default ConversationStarters;