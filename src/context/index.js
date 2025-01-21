import React, { createContext, useState } from "react";

// Tạo một Context
export const AppContext = createContext();

// Tạo Provider
 const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [dataLanguage, setDataLanguage] = useState([]);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  
  const changeDataLanguage = (lang) => {
    setDataLanguage(lang);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        theme,
        dataLanguage,
        toggleTheme,
        changeLanguage,
        changeDataLanguage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider