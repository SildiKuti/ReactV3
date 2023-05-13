import './App.css';
import Welcome from './components/welcome';
import Age from './components/Age'
import Counter from './components/counter'
import ClickCounter from './components/ClickCounter';
import ClickTracker from './components/ClickTracker';



function App() {
  
  return (
    
    <div>
 
<Welcome name = "John" />
<Counter/>
<ClickCounter/>
<ClickTracker/>


</div>  
  );
}

export default App;
