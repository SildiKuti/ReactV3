import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const DisplayLanguage = () => {
    const { language, setLanguage } = useContext(LanguageContext);
  
    const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
    };
  
    return (
      <div>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
        </select>
        <h1>Selected Language: {language}</h1>
      </div>
    );
  };
  
  
  export default DisplayLanguage