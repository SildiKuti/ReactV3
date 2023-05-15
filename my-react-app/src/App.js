import "./App.css";
import DisplayLanguage from "./components/DisplayLanguage";
import InteractiveComponent from "./components/InteractiveComponent";
import LanguageContext1 from "./components/LanguageContext";
import ToDoList from "./components/ToDoList";
import Counter from "./components/counter";
import LanguageProvider from "./components/LanguageContext";


function App() {
  return <div>
    <LanguageProvider>
      <DisplayLanguage />
    </LanguageProvider>

   
  </div>;
}

export default App;
