import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import {colors} from './src/utils/utils'


import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';

import RootNavigators from './src/navigators/RootNavigators';
function App(): JSX.Element {
  


  return (
<NavigationContainer>
  <RootNavigators/>
</NavigationContainer>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white,
    
    marginTop:'15%'
  }
})

export default App;
