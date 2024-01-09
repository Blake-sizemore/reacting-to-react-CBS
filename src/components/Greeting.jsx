import React from 'react';

const Greeting = prop => {
    return (
            <h2 className="border col-4 m-2">{prop.phrase}{prop.name}</h2>
    )
}

export default Greeting