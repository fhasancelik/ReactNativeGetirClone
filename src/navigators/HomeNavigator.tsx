import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import { colors } from '../utils/utils'

const HomeNavigator = () => {


const Stack=createNativeStackNavigator()

  return (
  <Stack.Navigator>
    <Stack.Screen name='HomeScreen' component={HomeScreen}
    
    options={{
        headerStyle:{backgroundColor:colors.purple},
        headerTitle:()=>(
    <Image        
    style={{
        width:70,
        height:30
    }}
   

            source={require('../../assets/getirlogo.png')}
   
    
    />
        )
    }}
    
    />
  </Stack.Navigator>
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})