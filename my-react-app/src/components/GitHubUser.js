import React, { useState } from 'react'
import GitHub from './github';

export default function GitHubUser() {
  const [usernames, setUsernames] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddUser = () => {
    setUsernames([...usernames, inputValue]);
    setInputValue("");
  };
  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      {usernames.map((username) => (
        <GitHub username={username} key={username} />
      ))}
    </div>
  )
}