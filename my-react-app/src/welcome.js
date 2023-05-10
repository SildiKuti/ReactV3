import React from "react";
import Age from "./Age";

function Welcome(prop) {
  return (
    <div>
      <p>
        Welcome <h1>{prop.name}</h1>
      </p>
  <Age age="5"></Age>
    </div>
  );
}

export default Welcome;

