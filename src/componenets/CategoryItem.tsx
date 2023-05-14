import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors, screenValue} from '../utils/utils';
import {Category} from './models';
import { useNavigation } from '@react-navigation/native';

type categoryItemProps = {
  item: Category;
};

const CategoryItem = ({item}: categoryItemProps) => {

const navigation=useNavigation()

  return (
    <TouchableOpacity

    onPress={()=>navigation.navigate('CategoryFilterScreen',{category:item})}
      style={{
        marginTop: 10,
        width: screenValue.width * 0.25,
        height: screenValue.width * 0.24,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Image
        style={{
          width: screenValue.width * 0.18,
          height: screenValue.width * 0.18,
          borderRadius: 8,
        }}
        source={{uri: `${item.src}`}}
      />
      <Text style={{fontSize: 12, color: colors.black, fontWeight: '500'}}>
       {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
