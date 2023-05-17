import { useState } from "react";

export default function CustomCounter(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const EventHandler = (e) => {
    setUsername(e.username);
  };

  const EventHandler1 = (e) => {
    setPassword(e.password);
  };

  return (
    <div>
      <>
        <input type="text" value={username} onChange={EventHandler}>
          
        </input>
        <input type="password" value={password} onChange={EventHandler1}>
          
        </input>
      </>
    </div>
  );
}
