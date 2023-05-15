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
        <p>The current language is: {language}</p>
      </div>
    );
  };
  
  export default DisplayLanguage