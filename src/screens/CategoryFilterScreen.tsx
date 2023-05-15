import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState} from 'react'
import CategoryFiltering from '../componenets/CategoryFiltering'
import { Category } from '../componenets/models'
import TypeFilterin from '../componenets/TypeFiltering'
import ProductItem from '../componenets/ProductItem'
import ProductsContainer from '../componenets/ProductsContainer'

const CategoryFilterScreen = (props) => {

const[category,setCategory]=useState<Category>(props.route.params)

//console.log(category.category)

  return (
 
<ScrollView>
  <CategoryFiltering category={category.category}/>
  <TypeFilterin/>
 <ProductsContainer/>

</ScrollView>



  )
}

export default CategoryFilterScreen

const styles = StyleSheet.create({})