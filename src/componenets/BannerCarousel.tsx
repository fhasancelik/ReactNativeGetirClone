import { StyleSheet, Text, View,FlatList, Image } from 'react-native'
import React,{useState,useEffect,useRef} from 'react'
import { screenValue } from '../utils/utils'

const BannerCarousel = () => {
const [banners,setBanners]=useState<String[]>([
    "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
    "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg",
    "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg",
    "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg"
])


// const imageList = [
//     { id: 1, url: "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg" },
//     { id: 2, url: "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg" },
//     { id: 3, url:   "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg" },
//     { id: 4, url:    "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg" },
//     // Diğer resimler...
//   ];
  
 
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const flatListRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const renderItem = ({ item, index }) => {
//     if (index === currentIndex || index === (currentIndex + 1) % imageList.length) {
//       return (
//         <View>
//           <Image source={{ uri: item.url }}  style={{width:screenValue.width,height:screenValue.height*0.25,resizeMode:'stretch'}}/>
//         </View>
//       );
//     }
//     return null;
//   };

//   useEffect(() => {
//     if (flatListRef.current) {
//       flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
//     }
//   }, [currentIndex]);



//  <FlatList
// ref={flatListRef}
// data={imageList}
// renderItem={renderItem}
// keyExtractor={(item) => item.id.toString()}
// horizontal
// pagingEnabled
// showsHorizontalScrollIndicator={false}
// /> 

  return (
    <FlatList
    
    horizontal
    pagingEnabled
showsHorizontalScrollIndicator={false}
    data={banners}
    renderItem={({item})=>{
        return(
            <Image source={{uri:`${item}`}}
            style={{width:screenValue.width,height:screenValue.height*0.25,resizeMode:'stretch'}}
            />
        )
    }}
    />

  


  )
}

export default BannerCarousel

const styles = StyleSheet.create({})