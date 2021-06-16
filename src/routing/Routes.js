import React, { useRef } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import WebCheckIn from './../rnwebcheckin/WebCheckIn.js';
import WebViewExample from './../rnwebcheckin/webview.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "WebCheckIn" component = {WebCheckIn} title = "Web Check-in" />
         <Scene key = "WebViewExample" component = {WebViewExample} title = "WebViewExample"/>
      </Scene>
   </Router>
)
export default Routes
