import React from 'react';
import {Text,View} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class FacebookScreen extends React.Component{
  render(){
    return(
      <View>
        <SafeAreaProvider>
        <Header
          backgroundColor={'#652ad3'}
          centerComponent={{
            text: 'Buzz App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        </SafeAreaProvider>
        <View style={{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        }}>
        <Text>Facebook</Text>
      </View>
      
      </View>
      
    )
  }
}