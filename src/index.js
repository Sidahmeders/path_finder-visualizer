import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ContextProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider><App /></ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
