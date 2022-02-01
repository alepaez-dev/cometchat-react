import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as CONSTANTS from "./constants/constants";
import { CometChat } from "@cometchat-pro/chat"

const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(CONSTANTS.APP_REGION).build();
CometChat.init(CONSTANTS.APP_ID, appSetting).then(
  () => {
    console.log("Initialization completed succesffully by Ale Paez");
  // You can now call login function.
  
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }, error => {
    console.log("Initialization failed with an error, AP", error);
    // Check the reason for error and take appropiate action.
  }
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
