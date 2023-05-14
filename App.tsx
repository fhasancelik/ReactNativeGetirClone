import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import {colors} from './src/utils/utils'


import HomeScreen from './src/screens/Home'



function App(): JSX.Element {
  


  return (
    <SafeAreaView style={styles.container}>
     <HomeScreen/>
    </SafeAreaView>
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
