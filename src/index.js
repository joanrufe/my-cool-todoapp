import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { AppProvider } from './provider'

ReactDOM.render(<AppProvider />, document.getElementById('root'));
registerServiceWorker();
