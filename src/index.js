import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // official react-redux binding
import { store } from './app/store'; // fetching store data
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    {/* Store data is provided to the app entirely */}
    {/* Provider uses context api -- will supply the data to any comp */}
    <Provider store={store}>

      <App />
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
