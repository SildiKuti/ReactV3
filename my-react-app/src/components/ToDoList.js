import React, { useState } from "react";

export function ToDoList({ todos }) {
  const [items, setItems] = useState(["Props", "Forms", "List"]);
  const [inputVal, setInputVal] = useState("");

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  const addToList = () => {
    setItems([...items, inputVal]);
    setInputVal("");
  };

  const deleteItem=(i)=>{
    setItems(items.filter((items, index) => index !== i))
};
  


return(
    <>
    <ul>
      {items.map((item, index) => (
        <div>
          <li key={index}>{item}</li>
          <button onClick={deleteItem}>Delete</button>
        </div>
  ))}
    </ul>
    <input type="text" id="input" value={inputVal} onChange={handleInput} />
    <button onClick={addToList}>Add</button>
    </>
  )
  }
export default ToDoList;