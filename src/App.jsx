import React, { useState, useEffect } from 'react';
import Greeting from './components/Greeting'

const App = () => {
    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(false)
        }, 3000);
    }, [loaded])

    if (loaded === false) {
        return (
            <>
                <h1>"Website loading ..."</h1>
                <button className='btn btn-primary' onClick={e => setLoaded(true)}>Show</button>
            </>
        )
    }

    return (
        <>
            <header className="bg-dark text-primary p-2">Header</header>
            <main className="bg-dark text-white p-2">
                <span>
                    <Greeting phrase="Howdy, " name="Blake" />
                    <Greeting phrase="Aloha, " name="John" />
                    <Greeting phrase="Sup, " name="Susan" />
                </span>
                <input className="m-2" value={username} onChange={e => setUsername(e.target.value)} />
                <p>You are logging in as: {username}</p>
            </main>
            <footer className="bg-dark text-primary">Footer</footer>
        </>
    )
}

export default App