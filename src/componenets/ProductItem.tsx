import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { colors, screenValue } from '../utils/utils'
import Icon from 'react-native-vector-icons/Entypo'
import { Product } from './models'
import { useNavigation } from '@react-navigation/core'

import {connect} from 'react-redux';
import * as actions from '../redux/actions/cartactions'

export type productItemType={
    item:Product
    addItemToCart:(a:Product)=>void
}


const ProductItem = ({item,addItemToCart}:productItemType) => {

const navigation=useNavigation()

   // console.log(item)
  return (
<TouchableOpacity
onPress={()=>navigation.navigate('ProductDetail',{product:item})}
style={{
    width:screenValue.width*0.265,
    height:screenValue.height*0.28,
    marginLeft:12,
    marginTop:12,
    marginBottom:10,
    

}}
>
    <Image 
    
    style={{


width:screenValue.width*0.3,
height:screenValue.width*0.28,
borderRadius:12,
borderWidth:0.3,
borderColor:colors.gray3

    }}
    
    source={{uri:item.image}}/>



<View style={{
    marginTop:12,
    flexDirection:'row'
}}>
    <Text style={{
        fontSize:12,color:colors.black2,
        textDecorationLine:'line-through'
    }}>
<Text>₺</Text>{item.fiyat}
    </Text>



    <Text style={{color:colors.purple,
    
    fontWeight:'bold',
    fontSize:13,
    marginLeft:4
    }}>
        <Text>₺</Text>

        {item.fiyatIndirimli}
    </Text>

</View>
<Text style={{
    fontWeight:'600',
    fontSize:11,
    marginTop:5
}}>{item.name}</Text>

<Text style={{
    color:colors.black2,
    fontSize:12,
    fontWeight:'600',
    marginTop:4

}}>{item.miktar}</Text>

<TouchableOpacity

onPress={()=>addItemToCart(item)}


style={{
    width:30,
    height:30,
    borderRadius:6,
    backgroundColor:colors.white,
    borderColor:'lightgrey',
    position:'absolute',
    borderWidth:0.3,
    top:-10,
    right:-17,
    alignItems:'center',
    justifyContent:'center',
  
    shadowRadius:3.8,
    shadowOpacity:0.05

}}

>



    <Icon name='plus' size={22} color={colors.purple}/>

</TouchableOpacity>

</TouchableOpacity>
  )
}
const mapDispatchProps = (dispatch) => {
    
    return {
     addItemToCart:(product:Product)=>
     dispatch(actions.addToCart({quantity:1,product}))
    };
  };
  
  export default connect(null,mapDispatchProps)(ProductItem);