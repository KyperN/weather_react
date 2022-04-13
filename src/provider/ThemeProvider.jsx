import { ThemeContext } from '../context/ThemeContext';
import { useState } from 'react';
export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState('lite');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
