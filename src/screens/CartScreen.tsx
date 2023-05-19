import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import productsGetir from '../../assets/productsGetir';
import CartItem from '../componenets/CartItem';
import {colors, screenValue} from '../utils/utils';
import ProductItem from '../componenets/ProductItem';
import {connect} from 'react-redux';
import { Product } from '../componenets/models';

const CartScreen = ({cartItems}:{cartItems:{product:Product,quantity:number[]}}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView>
        <FlatList
          data={cartItems}
          renderItem={({item}) => <CartItem product={item.product} />}
        />

        <Text
          style={{
            fontWeight: 'bold',
            padding: 14,
            color: colors.gray,
          }}>
          Önerilenler
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            backgroundColor: colors.white,
          }}
          data={productsGetir}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginLeft: 9,
                }}>
                <ProductItem key={item.id} item={item} />
              </View>
            );
          }}
        />
      </ScrollView>

      <View
        style={{
          height: screenValue.height * 0.08,
          backgroundColor: colors.white,

          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: '4%',
        }}>
        <TouchableOpacity
          style={{
            flex: 3,
            backgroundColor: colors.purple,
            height: screenValue.height * 0.06,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -10,

            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: colors.white,
              fontWeight: 'bold',
            }}>
            Contiunie
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            height: screenValue.height * 0.06,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -10,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}>
          <Text>₺24,00</Text>
        </View>
      </View>
    </View>
  );
};

const mapStateProps = (state) => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateProps, null)(CartScreen);
