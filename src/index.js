import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Router.js';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <App store={store} />
  </Provider>

  ), document.getElementById('root'));

registerServiceWorker();
