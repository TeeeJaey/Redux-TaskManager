import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainComponent from './Components/Main.component';
import 'bootstrap/dist/css/bootstrap.css';
import store from './Store/Store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  
  document.getElementById('root')
);