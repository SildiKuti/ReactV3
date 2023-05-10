import React from "react";
import Welcome from "./welcome";

function Age(prop) {
  return <>{(prop.age < 18) && (<p>Your age is:{prop.age}</p>)}</>
}

export default Age;
