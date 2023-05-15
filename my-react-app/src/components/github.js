import React, { useEffect, useState } from 'react';

export default function GitHub(username) {
  const [user, setUserData] = useState(null);

  useEffect(() => {
    fetch(`http://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => setUserData(data))
    .catch((error) => console.log(error));
    }, [username]);
    if (!user){
      return <p>Loading...</p>;
    }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}