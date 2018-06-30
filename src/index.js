import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import './inline.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <div className="Container"> <Header/> <App /> </div>, document.getElementById('root'));
registerServiceWorker();
