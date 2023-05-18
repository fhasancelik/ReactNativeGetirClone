import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import {colors, screenValue} from '../utils/utils';
import {useNavigation,getFocusedRouteNameFromRoute} from '@react-navigation/core';
import ProductDetail from '../screens/ProductDetailScreen';
import Ionicon from 'react-native-vector-icons/Ionicons';
import CartScreen from '../screens/CartScreen';



const MyStack = ({navigation,route}) => {
  const Stack = createNativeStackNavigator();

 const tabHiddenRoutes=['ProductDetail','CartScreen']

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
          headerRight:()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('CartScreen')} style={{
              width:screenValue.width*0.22,
              height:33,
              backgroundColor:colors.white,
              marginRight:screenValue.width* -0.02,
              borderRadius:8,
              flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between'
              
            }}>

              <Image style={{

                width:24,
                height:24,
                marginLeft:6
            
              }} source={require('../../assets/cart.png')} />


<View
style={{
  flex:1,
  backgroundColor:colors.gray5,
  borderTopRightRadius:8,
  borderBottomRightRadius:8,
  height:'100%',
  alignItems:'center',
  justifyContent:'center'
}}
>
  <Text
  style={{
    marginRight:6,
    color:colors.purple4,
    fontWeight:'bold',
    fontSize:12
  }}
  ><Text>₺</Text>24,00</Text>
</View>
            </TouchableOpacity>
          ),
          headerStyle: {backgroundColor: colors.purple,},
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
          <TouchableOpacity onPress={()=>console.log('sel')}>
            <Ionicon name='heart' size={24} color={colors.purple4}/>
          </TouchableOpacity>
        )
      }}
      
      
      
      
  name="ProductDetail" component={ProductDetail} />

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
            Cart
          </Text>
        ),


        headerRight:()=>(
          <TouchableOpacity onPress={()=>console.log('sel')}>
            <Ionicon name='trash-outline' size={24} color={colors.white}/>
          </TouchableOpacity>
        )
      }}
      
      
      
      
  name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default function HomeNavigator({navigation,route}){
  return <MyStack navigation={navigation} route={route}/>
}


