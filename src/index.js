import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './client/registerServiceWorker';
import { AppProvider } from './client/provider'

ReactDOM.render(<AppProvider />, document.getElementById('root'));
registerServiceWorker();
