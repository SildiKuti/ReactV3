import React, { useState } from 'react'

export default function InteractiveComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleRememberChange = (event) => {
        setRemember(event.target.checked);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
       

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                   
                    <input type="text" value={username} placeholder=' Username' onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    
                    <input type="password" value={password} placeholder='Password' onChange={handlePasswordChange} />
                </label>
                <br />
                <label>
                    Remember:
                    <input type="checkbox" checked={remember} onChange={handleRememberChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}