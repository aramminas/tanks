import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ProviderRedux} from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <ProviderRedux store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ProviderRedux>,
  document.getElementById('root')
);

reportWebVitals();