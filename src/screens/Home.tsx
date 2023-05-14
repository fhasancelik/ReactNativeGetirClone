import {StyleSheet, Text, View, Image,ScrollView} from 'react-native';
import React from 'react';
import {colors, screenValue} from '../utils/utils';
import Icon from 'react-native-vector-icons/Entypo';
import HeaderMain from '../componenets/HeaderMain';
import BannerCarousel from '../componenets/BannerCarousel';
import CategoryItem from '../componenets/CategoryItem';
import MainCategories from '../componenets/MainCategories';

const Home = () => {
  return (
<ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:colors.white2}}>
<HeaderMain/>
<BannerCarousel/>
<MainCategories/>
</ScrollView>
  );
};


export default Home;
