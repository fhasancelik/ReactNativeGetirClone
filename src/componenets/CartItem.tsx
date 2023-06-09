import { StyleSheet, Text, View ,Image, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import { Product } from './models'
import { colors, screenValue } from '../utils/utils'

import {connect} from 'react-redux';
import * as actions from '../redux/actions/cartactions'
type CartItemProps={
product:Product,
quantity:number

}

const CartItem = ({product,quantity,removeCart}:CartItemProps) => {

const {name,image,miktar,fiyat}=product

  return (
    <View  
    
    style={{
        height:screenValue.height*0.13,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:screenValue.width*0.04,
        backgroundColor:colors.white,
        borderBottomColor:'lightgrey',
        borderBottomWidth:0.4

    }}
    
    
    
    >
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        
      }}>
<Image style={{
    width:screenValue.height*0.09,height:screenValue.height*0.09,
    borderWidth:0.4,
    borderColor:'lightgray',
    borderRadius:6,
    
}} source={{uri:image}}/>

<View style={{
    marginLeft:8
}}>
    <Text style={{
        fontSize:13,
        fontWeight:'600'
        ,maxWidth:screenValue.width*0.48
        

    }}>{name}</Text>
    <Text
    
    style={{
        fontSize:12,
        fontWeight:'600',
        marginTop:4,
        color:colors.gray    }}
    >{miktar}</Text>
    <Text
    
    
    style={{
        color:colors.purple,
        fontWeight:'bold',
        marginTop:6
    }}
    >₺{fiyat}</Text>
</View>
      </View>

      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        height:screenValue.height*0.04,
        borderColor:'lightgrey',
        alignItems:'center',
        width:screenValue.width*0.2,
        borderWidth:0.5,
        borderRadius:10
,
shadowOpacity:0.3,
shadowColor:'gray'

      }}>

<TouchableOpacity 





onPress={()=>removeCart(product)}





style={{
  flex:1,
  alignItems:'center'
}}>
  <Text>-</Text>
</TouchableOpacity>
<View style={{
  flex:1,
  alignItems:'center',
  backgroundColor:colors.purple3,
  height:'100%',
  justifyContent:'center'
}}>
  <Text 
  
  style={{
    fontWeight:'bold',
    fontSize:12
    ,
    color:colors.white
  }}
  >{quantity}</Text>
</View>

<TouchableOpacity style={{
  flex:1,
  alignItems:'center'
}}>
  <Text>+</Text>
</TouchableOpacity>


      </View>
    </View>
  )
}


const mapStateToProps = (state) => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  
  };
};


const mapDispatchToProps = (dispatch) => {
    
  return {
   removeCart:(product)=>
   dispatch(actions.removeFromCart(product))
  };
};

export default connect(mapStateToProps,mapDispatchToProps )(CartItem);