import React from "react";
import Age from "./Age";

function Welcome(prop) {
  return (
    <div>
      <p>
        Welcome <h1>{prop.name}</h1>
      </p>
      <>
    {(!prop.age ) && (<Age age="5"></Age>)}
    {(prop.age)&& (<h1><Age age="5"></Age></h1>)}
    </>
    </div>
  );
}

export default Welcome;

