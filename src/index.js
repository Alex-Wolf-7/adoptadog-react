import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Router.js';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const store = configureStore();

ReactDOM.render((
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>

  ), document.getElementById('root'));

registerServiceWorker();
