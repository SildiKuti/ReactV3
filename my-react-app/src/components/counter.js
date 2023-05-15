import { useEffect, useState } from "react";

function Counter(props) {
  
const [counter,setCount] = useState(0)

function click(prop) {

  setCount(counter+1)
  
}
  
  useEffect(()=>{console.log(`the counter is now ${counter}`)},[counter])
    
  


return(
  <div>
  <h1>{counter}</h1>
  <button onClick={click}>click</button>
  </div>
)
}



export default Counter;