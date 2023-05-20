import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { productItemType } from '../componenets/ProductItem'
import ImageCarousel from '../componenets/ImageCarousel'
import { colors } from '../utils/utils'
import { Product } from '../componenets/models'
import DetailBox from '../componenets/DetailBox'
import DetailProperty from '../componenets/DetailProperty'
import CardButton from '../componenets/CardButton'
import {connect} from 'react-redux';
import * as actions from '../redux/actions/cartactions'

const ProductDetail = ({route}) => {
const[product,setProduct]=useState<Product>(route.params.product)
    //console.log(product)

if(!product){
  return(
    <ActivityIndicator color={colors.purple}/>
  )
}

  return (
<View style={{flex:1}}>
<ScrollView>
      <View>
      <ImageCarousel images={product.images}/>
      <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar}  />
    
    <Text
    style={{

      paddingHorizontal:10,paddingVertical:12,fontWeight:'600',color:colors.black3
    }}
    
    >Details</Text>


    <DetailProperty/>
 
  



   
    
    </View>
  </ScrollView>
  <CardButton product={product}/>
</View>
  )
}

const mapDispatchToProps = (dispatch) => {
    
  return {
   addItemToCart:(product:Product)=>
   dispatch(actions.addToCart({quantity:1,product}))
  };
};

export default connect(null,mapDispatchToProps)(ProductDetail);