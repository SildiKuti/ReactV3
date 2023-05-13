import './App.css';
import Welcome from './components/welcome';
import Age from './components/Age'
import Counter from './components/counter'
import ClickCounter from './components/ClickCounter';



function App() {
  
  return (
    
    <div>
 
<Welcome name = "John" />
<Counter/>
<ClickCounter/>


</div>  
  );
}

export default App;
