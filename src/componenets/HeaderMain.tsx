import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, screenValue} from '../utils/utils';
import Icon from 'react-native-vector-icons/Entypo';

const HeaderMain = () => {
  return (
    <View style={styles.headerMain}>
    <View style={styles.headerOne}>
      <Image
        style={styles.image}
        source={{uri: 'https://cdn.getir.com/misc/emoji/house.png'}}
      />
      <View style={styles.headerOneView}>
        <Text style={{fontWeight: '600', fontSize: 16}}>Home</Text>

        <Text
          style={{
            fontWeight: '500',
            fontSize: 11,
            color: colors.gray,
            marginLeft: 6,
            marginRight: 3,
          }}>
          Dedepaşa Blv. Yenişehir Mahallesi...
        </Text>
        <Icon name="chevron-right" size={22} color={colors.purple} />
      </View>

      <View style={styles.headerTwo}>
        <Text
          style={{fontSize: 10, fontWeight: 'bold', color: colors.purple}}>
          TVS
        </Text>
        <Text
          style={{fontSize: 20, fontWeight: 'bold', color: colors.purple}}>
          13<Text style={{fontSize: 14}}>dk</Text>
        </Text>
      </View>
    </View>

    <View></View>
  </View>
  )
}
const styles = StyleSheet.create({
    headerMain: {
      backgroundColor: colors.yellow,
      height: screenValue.height * 0.08,
    },
    headerOne: {
      width: '85%',
      height: screenValue.height * 0.08,
      backgroundColor: colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: '2%',
      paddingRight: '2%',
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
    },
    image: {
      width: 30,
      height: 30,
    },
  
    headerOneView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 8,
      borderLeftWidth: 3,
      borderLeftColor: colors.gray2,
      paddingLeft: 3,
    },
    headerTwo: {
      //backgroundColor:'red',
      width: '19%',
      paddingHorizontal: 5,
  
      height: screenValue.height * 0.08,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default HeaderMain

