import { useState } from "react";

function Counter(props) {
  
const [counter,setCount] = useState(0)

function click(params) {

  setCount(counter+1)
  
}


return(
  <div>
  <h1>{counter}</h1>
  <button onClick={click}>click</button>
  </div>
)

}

export default Counter;