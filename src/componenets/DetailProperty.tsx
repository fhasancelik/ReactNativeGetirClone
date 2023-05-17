import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utils/utils'
import Icon from 'react-native-vector-icons/Ionicons'

const DetailProperty = () => {
const[details,setDetails]=useState<string[]>([



    "Sütlü Kıtır Çikolata",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler"

])


const TextComponent=({detail,index}:{detail:string,index:number})=>{
    return(
        <View
        style={{
            paddingVertical:12,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            borderBottomWidth:index===details.length -1 ? 0 : 0.4,
            borderBottomColor:'lightgray'
        }}
        
        >
            <Text
            
            
            style={{
                fontSize:index===0?10:13,
                fontWeight:index===0?'400':'500',
                color:index===0?'black':colors.black3
            }}
            >
{detail}
            </Text>

            {index !=0 ? <Icon name='chevron-down' size={25} color={'#9f9f9f'}/>:null}
        </View>
    )
}




  return (
    <View
    
    style={{
        backgroundColor:colors.white,
        paddingHorizontal:16,
        paddingVertical:8
    }}
    
    >
  {

details.map((item,index)=>{
    return(
        <TextComponent key={index} index={index} detail={item}/>
    )
})

  }
    </View>
  )
}

export default DetailProperty

const styles = StyleSheet.create({})