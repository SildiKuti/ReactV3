import React from "react";
import Welcome from "./welcome";

function Age(prop) {
  return <>{(prop.age > 18 && prop.age < 65) && (<p>Your age is:{prop.age}</p>)}</>
}

export default Age;
