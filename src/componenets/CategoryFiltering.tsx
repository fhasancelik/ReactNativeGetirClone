import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import categoriesGetir from '../../assets/categoriesGetir'
import { Category } from './models'
import { colors, screenValue } from '../utils/utils'
const CategoryFiltering = ({category}:{category:Category}) => {

const [categories,setCategories]=useState<Category[]>(categoriesGetir)



const CategoryBox=({item,active}:{item:Category,active:Category})=>{

    
    return(
<TouchableOpacity style={[{
    paddingHorizontal:9,
    justifyContent:'center'},

    item.name==active.name&&{borderBottomWidth:2.5,borderBottomColor:colors.yellow2}
]}>
    <Text
    style={{
        fontSize:16,
        fontWeight:'600',
        color:colors.white
    }}
    >{item.name}</Text>
</TouchableOpacity>
    )

}

  return (
 <FlatList
 
 data={categories}
 horizontal={true}
 showsHorizontalScrollIndicator={false}
 style={{
    width:'100%'
    ,
    height:screenValue.height*0.065,
    backgroundColor:colors.purple3
 }}
 
renderItem={({item})=>{
    return(
        <CategoryBox item={item} active={category}/>
    )
}}

 />
  )
}

export default CategoryFiltering

const styles = StyleSheet.create({})