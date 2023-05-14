import './App.css';
import Welcome from './components/welcome';
import Age from './components/Age'
import Counter from './components/counter'
import ClickCounter from './components/ClickCounter';
import { InteractiveComponent } from './components/InteractiveComponent';
import { Uncontrolled } from './components/Uncontrolled';




function App() {
  
  return (
    
    <div>
 
<Welcome name = "John" />
<Counter/>
<ClickCounter/>
<InteractiveComponent/>
<Uncontrolled/>


</div>  
  );
}

export default App;
