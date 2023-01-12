import React from "react";

function Welcome() {
    const first = {
        padding: '10px',
        borderRadius:'10px',
        backgroundColor: 'black',
        color: 'white',
        boxShadow: 'none',
        cursor: 'pointer'
    }

    const mystyle = {
        display: 'flex',
        padding: '20px',
        gap: '10px'
    }

    const second = {
        padding: '10px',
        borderRadius:'10px',
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        cursor: 'pointer'
    }
    return (
        <div style={mystyle}>
            <button style={first}>Recently uploaded</button>
            <button style={second}>Popular</button>
        </div>
    );
}

export default Welcome