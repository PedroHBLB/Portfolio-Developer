import React, { useState, useEffect } from 'react';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import Home from './screens/Home';
import About from './screens/About';
import Courses from './screens/Courses';
import Contact from './screens/Contact';

const App = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle />
      <Home toggleTheme={toggleTheme}/>
      <About />
      <Courses />
      <Contact />
    </div>
    </ThemeProvider>
  );
}

export default App;
