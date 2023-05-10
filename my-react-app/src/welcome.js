import React from "react";


function Welcome(prop) {
    return(
        <div>
        <p>Welcome {prop.name}</p>
        <p>Your age is{prop.age}</p>
        
        </div>
    )
    
}

export default Welcome;

//it just prints welcome 