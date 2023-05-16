import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { productItemType } from '../componenets/ProductItem'
import ImageCarousel from '../componenets/ImageCarousel'
import { colors } from '../utils/utils'
import { Product } from '../componenets/models'
import DetailBox from '../componenets/DetailBox'

const ProductDetail = (props) => {
const[product,setProduct]=useState<Product>(props.route.params.product)
    //console.log(product)

if(!product){
  return(
    <ActivityIndicator color={colors.purple}/>
  )
}

  return (
    <View>
      <ImageCarousel images={product.images}/>
      <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar}  />
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})