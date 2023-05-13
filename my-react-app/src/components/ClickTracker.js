import React, { useState } from "react";

function ClickTracker(props) {


    const [click,setClick] = useState(null)
    function ClickIt(event) {
        const buttonId = event.target.id;
    setClick(buttonId);
  }


  return (
    <div>
        <h1>Last Button Pressed: {click}</h1>
      <button id="button1"onClick={ClickIt}>First</button>
      <button id="button2" onClick={ClickIt}>Second</button>
      <button id="button3" onClick={ClickIt}>Third</button>
    </div>
  );
  }


// Create a ClickTracker component that renders three buttons.
// Implement a single event handler for all three buttons, and track of which button was pressed last.
//  Show the last button that was pressed in an h1 tag within the ClickTracker component.
// Tip: you can use the event object to access the target property of the event.

export default ClickTracker;