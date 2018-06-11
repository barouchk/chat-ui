
//This is then entry point for your app. Do as you wish.

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { Loader, Dimmer } from 'semantic-ui-react'

import { store, persistor } from './redux/store';

import "./index.scss";
import App from "./components";
import { connect } from './socket/Events';

connect();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={
      <Dimmer active>
        <Loader />
      </Dimmer>
    } persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , document.getElementById("root"));
