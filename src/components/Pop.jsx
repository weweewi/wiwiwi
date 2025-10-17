import React from 'react';
import './Pop.css'; // Assuming you have a CSS file for styling

const Pop = ({ position }) => {
    return (
        <div className="pop" style={{ position: 'absolute', ...position }}>
            <span className="wiwiwi">wiwiwi</span>
        </div>
    );
};

export default Pop;