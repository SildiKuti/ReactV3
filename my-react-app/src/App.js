import "./App.css";
import DisplayLanguage from "./components/DisplayLanguage";
import InteractiveComponent from "./components/InteractiveComponent";
import LanguageContext1 from "./components/LanguageContext";
import ToDoList from "./components/ToDoList";
import Counter from "./components/counter";
import LanguageProvider from "./components/LanguageContext";
import GitHub from "./components/github";
import CustomCounter from "./components/customCounter";
import GitHubUser from "./components/GitHubUser";


function App() {
  return <div>
    <GitHub/>
    <GitHubUser/>
    <CustomCounter/>

   
  </div>;
}

export default App;
