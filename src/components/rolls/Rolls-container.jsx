import React from 'react';
import RollOne from './roll-1/roll-1.jsx';
import './rolls-container.css';

function RollsContainer() {
    return (
        <div id='rolls-container'>
            <RollOne isOpen={false} />
        </div>
    );
}

export default RollsContainer;