import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Helmet from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <Helmet bodyAttributes={{style: 'background-color : rgb(231, 231, 231)'}}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
