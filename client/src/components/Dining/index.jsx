import React from 'react';
import './assets/css/dining.css';

const Dining = () => {

    return (
        <section id='dining-component' className='default-font'>
            <h1 className='component-title'>Dining</h1>
            <div className='dining-container'>
                <aside className='options-container'>
                    <h3>Options</h3>
                    <form id='options-form'>
                        <label htmlFor='budget'>Price/Budget:</label>
                        <input name='budget' placeholder='$100'/>
                        <label htmlFor='distance'>Within:</label>
                        <input name='distance' placeholder='25 miles'/>
                        <label htmlFor='city'>City:</label>
                        <input name='city' placeholder='Orlando' />
                        <label htmlFor='state'>State:</label>
                        <input name='state' placeholder='FL' />

                    </form>
                </aside>
                <div className='information-container'>
                    <div className='information-card'>
                        <p>I am Thor!</p>
                    </div>
                    <div className='reviews-card'>
                        <p>And I am Batman!</p>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default Dining;