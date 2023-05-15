import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import {colors} from '../utils/utils';
import {useNavigation,getFocusedRouteNameFromRoute} from '@react-navigation/core';
import ProductDetail from '../screens/ProductDetailScreen';
import Ionicon from 'react-native-vector-icons/Ionicons';



const MyStack = ({navigation,route}) => {
  const Stack = createNativeStackNavigator();

 const tabHiddenRoutes=['ProductDetail']

 React.useLayoutEffect(() => {
  const routeName = getFocusedRouteNameFromRoute(route);
//  console.log("Route Name is ", routeName);
  if (tabHiddenRoutes.includes(routeName)) {
   // console.log("Kapat ", routeName);
    navigation.setOptions({ tabBarStyle: { display: "none" } });
  } else {
   // console.log("Aç ", routeName);
    navigation.setOptions({ tabBarStyle: { display: "flex" } });
  }
}, [navigation, route]);



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
          headerTitle: () => (
            <Text
              style={{fontWeight: 'bold', fontSize: 16, color: colors.white}}>
              Products
            </Text>
          ),
        }}
      />

      <Stack.Screen
      
      options={{
        headerBackVisible: false,
        headerLeft: () => (
          <Ionicon
            name="close"
            size={30}
            color={colors.white}
            onPress={() => navigation.goBack()}
          />
        ),

        headerStyle: {backgroundColor: colors.purple},
        headerTitle: () => (
          <Text
            style={{fontWeight: 'bold', fontSize: 16, color: colors.white}}>
            Product Detail
          </Text>
        ),


        headerRight:()=>(
          <TouchableOpacity>
            <Ionicon name='heart' size={24} color={colors.purple4}/>
          </TouchableOpacity>
        )
      }}
      
      
      
      
  name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default function HomeNavigator({navigation,route}){
  return <MyStack navigation={navigation} route={route}/>
}


