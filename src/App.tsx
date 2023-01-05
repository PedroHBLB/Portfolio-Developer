import React from 'react';

import light from './styles/themes/light';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import Home from './screens/Home';
import About from './screens/About';
import Courses from './screens/Courses';
import Contact from './screens/Contact';

const App = () => {
  return (
    <ThemeProvider theme={light}>
    <div className="App">
      <GlobalStyle />
      <Home />
      <About />
      <Courses />
      <Contact />
    </div>
    </ThemeProvider>
  );
}

export default App;
