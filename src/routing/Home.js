import React from 'react'
import { TouchableOpacity,Button,View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {WebCheckIn} from './../rnwebcheckin/WebCheckIn.js';
import { WebViewExample } from './../rnwebcheckin/webview.js';

const Home = () => {
      const onPressBut = (props) => {
         console.log(props)
         Actions.WebCheckIn()
      }
   return (
      <View>
      <Button title="Web Check-In" onPress={onPressBut}/>
    </View>
   )
   
}
export default Home; 

