import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {colors, screenValue} from '../utils/utils';
import categoriesGetir from '../../assets/categoriesGetir';
import {Category} from './models';

const TypeFilterin = () => {
  const [type, setType] = useState([
    'Birlikte İyi Gider',
    'Çubuk',
    'Kutu',
    'Külah',
    'Çoklu',
    'Bar',
  ]);
  const [category, setCategory] = useState<String>('Birlikte İyi Gider');

  const TypeBox = ({item, active}: {item: string; active: string}) => {
    return (
      <TouchableOpacity

onPress={()=>setCategory(item)}

        style={[
          {
            paddingHorizontal: 10,
            marginRight: 12,
            justifyContent: 'center',
            borderRadius: 6,
            height: screenValue.height * 0.045,
          },
          item == active ? {backgroundColor: colors.purple2} : {borderColor:colors.gray4,borderWidth:1.3},
        ]}>
        <Text
          style={[{
            fontSize: 12,
            color: colors.purple3,
            fontWeight: '600',
          },item == active ? {color: colors.white} : null]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={type}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        width: '100%',
        height: screenValue.height * 0.07,
        backgroundColor: colors.white,
        paddingVertical:screenValue.height*0.014,
        paddingHorizontal:12

      }}
      renderItem={({item}) => {
        return (
     
            <TypeBox active={category} item={item} />
     
        );
      }}
    />
  );
};

export default TypeFilterin;

const styles = StyleSheet.create({});
