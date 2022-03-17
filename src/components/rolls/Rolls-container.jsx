import React from 'react';
import RollOne from './roll-1/roll-1';
import RollTwo from './roll-2/Roll-2';
import RollThree from './roll-3/Roll-3'
import './rolls-container.css';



function RollsContainer() {

    return (  
        <div id='rolls-container'>
            <h2 id='rolls-header'>rolls:</h2>
            <RollOne />
            <RollTwo />
            <RollThree />
        </div>
    );
}

export default RollsContainer;