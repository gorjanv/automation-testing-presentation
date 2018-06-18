import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';

injectGlobal`
  html {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

render(<App />, document.getElementById('app-container'));