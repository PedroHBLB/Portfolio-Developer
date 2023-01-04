import React from 'react';

import light from './styles/themes/light';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import Home from './screens/Home';

const App = () => {
  return (
    <ThemeProvider theme={light}>
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
    </ThemeProvider>
  );
}

export default App;
