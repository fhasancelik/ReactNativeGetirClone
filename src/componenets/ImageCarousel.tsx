import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors, screenValue} from '../utils/utils';

const ImageCarousel = ({images}: {images: string[]}) => {
  console.log(images);

  const [activeIndex,setActiveIndex]=useState(0)
  
  
    const onViewRef= useRef((viewableItems)=>{

if(viewableItems.viewableItems.length>0){


    setActiveIndex(viewableItems.viewableItems[0].index||0)
}

  })


  const viewConfigRef=useRef({viewAreaCoveragePercentThreshold:50})

  return (
 
    <View
    
    style={{
        alignItems:'center',
        width:'100%',
        backgroundColor:colors.white,
        paddingTop:25,
        height:screenValue.height*0.25
        
    }}
    
    >
           <FlatList
      data={images}
      horizontal
      showsHorizontalScrollIndicator={false}
      viewabilityConfig={viewConfigRef.current}
      onViewableItemsChanged={onViewRef.current}

      pagingEnabled
     
      style={{
        width: screenValue.width * 0.5,
        height: screenValue.height * 0.21,
      }}

snapToInterval={screenValue.width * 0.5}
snapToAlignment='center'
decelerationRate={'fast'}
      renderItem={({item}) => {
        return (
          <Image
            style={{
              width: screenValue.width * 0.5,
              height: screenValue.height * 0.21,
              resizeMode:'stretch'




            }}
            source={{uri: item}}
          />
        );
      }}
    />


<View>
    <View style={{
        flexDirection:'row',
        alignItems:'center',
        width:30,
        height:12,
    
        justifyContent:'space-around'
    }}>
        {images.map((image,index)=>{
            return(

<View  key={index} style={{

height:8,
width:8,
borderRadius:16,
backgroundColor:activeIndex==index?colors.purple:colors.gray4

}}/>

            )
        })}
    </View>
</View>

    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({});
