import React from "react";
import Age from "./Age";

function Welcome(prop) {
  const age = 18;
  return (
    <div>
      <p>
        Welcome <h1>{prop.name}</h1>
      </p>
      <>
    {(prop.age > 18 && prop.age < 65 && prop.name === "John") && (<Age age={age}></Age>)}
   
    </>
    </div>
  );
}

export default Welcome;

