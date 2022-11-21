import React, { useState, createContext } from 'react';
// create context
const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [theme, setTheme] = useState('day');
  //method to toggle theme
  const toggleTheme = () => {
    console.log('hello', 'hello');
    setTheme((prev) => (prev === 'day' ? 'night' : 'day'));
  };

  return (
    // the Provider gives access to the context to its children
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
