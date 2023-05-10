import React from "react";


function Welcome(prop) {
    return(
        <div>
        <p>Welcome <h1>{prop.name}</h1></p>
        <p>Your age is{prop.age}</p>
        
        </div>
    )
    
}

export default Welcome;

//IT CONVERTS PROP.NAME TO H1