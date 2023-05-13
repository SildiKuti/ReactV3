import React, { useEffect, useState } from "react";

function ClickCounter(props) {

    const [count,setcount] = useState(0)
    
    function clicktoinc() {
        setcount(count+1)
     
    }
    return(
        <div>
        <button onClick={clicktoinc} >Click</button>
        <h1>{count}</h1>
        </div>
    )
}

export default ClickCounter;