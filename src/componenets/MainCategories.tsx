import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CategoryItem from './CategoryItem';
import categoriesGetir from '../../assets/categoriesGetir';
import { Category } from './models';

const MainCategories = () => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <View>
      <View style={styles.listContainer}>
    {


categories.map((item)=>{
    return(
        <CategoryItem key={item.id} item={item} />
    )
})


    }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'flex-start'
  },
});

export default MainCategories;
