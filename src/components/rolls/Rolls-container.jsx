import React from 'react';
import RollOne from './roll-1/Roll-1.jsx';
import RollTwo from './roll-2/Roll-2.jsx';
import RollThree from './roll-3/Roll-3.jsx'
import './rolls-container.css';

function RollsContainer() {
    return (  
        <div id='rolls-container'>
            <h2 id='rolls-header'>rolls:</h2>
            <RollOne isOpen={false} />
            <RollTwo isOpen={false} />
            <RollThree isOpen={false} />
        </div>
    );
}

export default RollsContainer;