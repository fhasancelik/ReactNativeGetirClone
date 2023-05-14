import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import {colors} from '../utils/utils';
import { useNavigation } from '@react-navigation/core';

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();
const navigation=useNavigation()
  return (
    <Stack.Navigator>
      <Stack.Screen

      
        name="HomeScreen"
        component={HomeScreen}
        options={{
       
          headerStyle: {backgroundColor: colors.purple},
          headerTitle: () => (
            <Image
              style={{
                width: 70,
                height: 30,
              }}
              source={require('../../assets/getirlogo.png')}
            />
          ),
        }}
      />
         <Stack.Screen
        name="CategoryFilterScreen"
        component={CategoryFilterScreen}
        options={{
            headerBackVisible: false,
            headerLeft: () => (
                <Icon
                  name="chevron-left"
                  size={30}
                  color={colors.white}
                  onPress={() => navigation.goBack()}
                />
              ),

            
          headerStyle: {backgroundColor: colors.purple},
          headerTitle:()=>(
            <Text style={{fontWeight:'bold',fontSize:16,color:colors.white}}>Products</Text>
          )
      
          
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
