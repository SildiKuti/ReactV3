import './App.css';
import Welcome from './components/welcome';
import Age from './components/Age'
import Counter from './components/counter'
import ClickCounter from './components/ClickCounter';
import { IntercativeComponent } from './components/InteractiveComponent';




function App() {
  
  return (
    
    <div>
 
<Welcome name = "John" />
<Counter/>
<ClickCounter/>
<IntercativeComponent/>


</div>  
  );
}

export default App;
