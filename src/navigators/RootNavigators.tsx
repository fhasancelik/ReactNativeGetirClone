import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../utils/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeNavigator from './HomeNavigator';
const RootNavigators = () => {
  const Tab = createBottomTabNavigator();

  const CustomTabBarButton = ({children}) => {
    return (
      <TouchableOpacity style={{
        width:50,
        height:50,
        backgroundColor:colors.purple2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
      marginTop:-10,
      borderWidth:2,
      borderColor:colors.gray3
      }}>
        <Icon name="list" color={colors.yellow} size={32} />
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'User') {
            iconName = focused ? 'person' : 'person';
          } else if (route.name === 'Gift') {
            iconName = focused ? 'gift' : 'gift';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarStyle: {},
        tabBarActiveTintColor: colors.purple2,
        tabBarInactiveTintColor: colors.gray3,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,

        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Search" component={HomeNavigator} />
      <Tab.Screen
        name="List"
        component={HomeNavigator}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen name="User" component={HomeNavigator} />
      <Tab.Screen name="Gift" component={HomeNavigator} />
    </Tab.Navigator>
  );
};

export default RootNavigators;

const styles = StyleSheet.create({});
