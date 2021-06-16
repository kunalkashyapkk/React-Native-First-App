import React, { Component } from 'react';
import { AppRegistry,StyleSheet,StatusBar,Image,FlatList,Text,TouchableOpacity,Linking, View} from 'react-native';
import Imagewebcheckin from './../images/images.js';
import { Actions } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
import flight_data from './webcheckinjson.js';


class WebCheckIn extends Component {
  constructor(){
    super();
    this.state = {
      flightData : flight_data,
    }
  }

  static navigationOptions =
  {
     title: 'Web Check-in',
     headerStyle: {
     backgroundColor: '#FF0000'
   },
   headerTintColor: '#fff',
  };


render() {
  return (
   
    <View style={styles.MainContainer}>
      <StatusBar backgroundColor="red" barStyle="light-content" />
        <Imagewebcheckin/>
        <View style = {styles.line}>
        <View>
           <Image style = {styles.checkin} source={require('C:/Users/v-kunal.kashyap/Desktop/SampleApp/src/images/ic_launcher_white.png')} />
          </View>
               <View style = {styles.checkins}>
               <Text style = {styles.firstlines}>Check-In & get your boarding pass instantly!</Text>
               <Text style = {styles.lines}>Check-in online & save time!</Text>
               <Text style = {styles.lines}>Select your airline to complete web check-in & print</Text>
               <Text style = {styles.lines}>your boarding pass now.</Text>
               </View>
               </View>
         <FlatList
            data={ this.state.flightData.response.preferences.webCheckIn }
            renderItem={({item ,index}) =>
            <TouchableOpacity 
            onPress={() => Actions.WebViewExample(item.webcheckinUrl) } style={styles.GridViewBlockStyle}>        
               <View style = {styles.ico}>
               <Image style={{width: '100%', borderRadius: 20, height: '100%'}} source={{ uri: 'https://www.yatra.com/ccwebapp/content/images/airlinelogo/'+item.airlineCode +'.webp'}}/>
               </View>              
               <Text style={styles.GridViewInsideTextItemStyle} > {item.airlineName} </Text>
               </TouchableOpacity> 
            }
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
   
           />

    </View>

              
      )};
       }
export default WebCheckIn; StackNavigator

const styles = StyleSheet.create({

  MainContainer :{
  backgroundColor: 'white',
  justifyContent: 'center',
  flex:1,
  paddingBottom: 12,
  paddingTop: (Platform.OS) === 'ios' ? 20 : 0
  },
  
  GridViewBlockStyle: {
  
    flex:1,
    height: 80,
    margin: 5,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 2,
    backgroundColor: '#EEEEEE'
  
  },
  
  GridViewInsideTextItemStyle: {
     textAlignVertical:'center',
     color: '#787878',
     width: 105,
     height: 60,
     position: 'absolute',
     top: 10,
     left: 70
   },

   line: {
     marginLeft: 10,
     marginRight: 10,
     padding: 2,
     position: "absolute",
     top: 7,
     height: 85,
     borderRadius: 4,
     width: '95%',
     backgroundColor: '#2ba39f',
   },
   checkin: {
     height: 40,
     width: 40,
     margin: 10,
   },
   checkins: {
      position: 'absolute',
      top: 2,
      width: '100%',
      paddingLeft: 55,
   },
   firstlines: {
      paddingTop:4,
      paddingBottom:2,
      fontSize: 14,
      width: '100%',
      color: '#fff',
   },    
   lines: {
     color: '#fff',
     lineHeight: 15,
     fontSize: 11,
     width: '100%',
   },
  
   ico: {
     borderWidth: 1,
     backgroundColor: 'white',
     width: 45,
     borderRadius: 30,
     height: 45,
     marginTop: 17,
     marginLeft: 15,
     borderColor: 'white',
  },
  }); 
