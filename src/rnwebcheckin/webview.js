import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WebView from 'react-native-webview';


class WebViewExample extends Component {
      

   constructor(props){
      super(props);
      this.state = {
      }
    }
    

   static navigationOptions =
   {
    title: 'Web Check-In',
     headerStyle: {
     backgroundColor: '#FF0000'
   },
   headerTintColor: '#fff',
  };



   render(){
   return (
    <WebView 
         ref="webview"
       source={{uri: this.props.data}}
       >
         </WebView>
   )
}
}
export default WebViewExample;

const styles = StyleSheet.create({
   container: {
      height: 350,
   }
})