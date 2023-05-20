import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, screenValue } from '../utils/utils'
import {connect} from 'react-redux';
import * as actions from '../redux/actions/cartactions'
import { productItemType } from './ProductItem';
import { Product } from './models';

const CardButton = ({addItemToCart,product}:{addItemToCart:productItemType,product:Product}) => {
  return (
    <TouchableOpacity
    
     onPress={()=>addItemToCart(product)}
    
    style={{
width:'100%',
        marginTop:5,
        height:screenValue.height * 0.1,
        backgroundColor:colors.white,
        justifyContent:'center'
    }}>
 <View style={{
    width:'88%',
    height:screenValue.height * 0.06,
    backgroundColor:colors.purple3,marginHorizontal:'6%',borderRadius:8,
    justifyContent:'center',
    alignItems:'center'
 }}>
    <Text
    style={{
        color:colors.white,
        fontWeight:'bold',
        fontSize:16
    }}
    
    >Add To Basket</Text>
 </View>
    </TouchableOpacity>
  )
}

const mapDispatchToProps = (dispatch) => {
    
   return {
    addItemToCart:(product:Product)=>
    dispatch(actions.addToCart({quantity:1,product}))
   };
 };
 
 export default connect(null,mapDispatchToProps)(CardButton);