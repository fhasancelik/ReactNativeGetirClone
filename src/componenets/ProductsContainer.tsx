import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductItem from './ProductItem';
import categoriesGetir from '../../assets/categoriesGetir';
import { colors } from '../utils/utils';
import productsGetir from '../../assets/productsGetir';

const ProductsContainer = () => {
  return (
    <View>
      <View
      
      style={{
        flexDirection:'row',
        backgroundColor:colors.white,
        gap:12

      }}
      
      
      >
      {productsGetir.slice(0,2).map((item)=>{

        return(
            <ProductItem key={item.id}
            item={item}/>
        )
      })}
      </View>
<Text
style={{
  fontWeight:'bold',
  padding:14
  ,
  color:colors.gray
}}

>Çubuk</Text>


<View style={{
  flexDirection:'row',
  flexWrap:'wrap',
  gap:9,
  paddingVertical:10,
  flex:1,
  backgroundColor:colors.white,
  alignItems:'center'
}}>


{productsGetir.slice(2).map((item)=>{

return(
    <ProductItem key={item.id}
    item={item}/>
)
})}
</View>


    </View>
  );
};

export default ProductsContainer;

const styles = StyleSheet.create({});
