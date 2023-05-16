import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/utils'

type detailBoxType={

price:number
name:string
quantity:string

}

const DetailBox = ({price,name,quantity}:detailBoxType) => {
  return (
    <View style={{width:'100%',
    alignItems:'center',
    backgroundColor:colors.white
    }}>
      <Text
      style={{
        fontWeight:'bold',
        color:colors.purple,
        marginTop:12,
        fontSize:20
      }}
      
      
      > <Text>₺</Text>  {price}</Text>
      <Text
      
      style={{
        fontWeight:'700',
        fontSize:20,
        marginTop:12
      }}
      
      
      >{name}</Text>
      <Text
      
      style={{
        paddingBottom:12,
        fontWeight:'600',
        marginTop:8,
        color:colors.gray3
      }}
      
      >{quantity}</Text>
    </View>
  )
}

export default DetailBox

const styles = StyleSheet.create({})