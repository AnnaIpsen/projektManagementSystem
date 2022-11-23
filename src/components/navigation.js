import React from 'react';

class Navigation extends React.Component{
    render() {
        return (
            <nav style={{height: '80vh', width: '15vw', padding: '5rem', backgroundColor: '#82A7A6'} }>
                <div style={{height: '10rem', width: '10rem', border: 'solid black 1px',}}></div>
                <ul>
                    <li>project</li>
                    <li>project</li>
                    <li>project</li>
                </ul>
            </nav>
        )
    }
}

export default Navigation