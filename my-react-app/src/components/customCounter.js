import { useState } from "react"

export default function CustomCounter(props) {
    const [counter, setCounter] = useState(0)


    function clickI(params) {

        setCounter(counter => counter+1)
        
    }

    function clickD(params) {

        setCounter(counter=> counter-1)
    }
    
    function reset(params) {
        setCounter(counter => counter = 0)
        
    }

    return(<div>

<button onClick={clickI}>increment</button>
<button onClick={clickD}>decrement</button>
<button onClick={reset}>reset</button>
        <h1>{counter}</h1>
    </div>)
}  