import React, {useState, useEffect} from 'react';
import { TouchableOpacity, FlatList, View, Text, Button, Image } from 'react-native';
import styled from 'styled-components/native';
import data from '../../assets/data.js';
import {addToCartData} from '../../assets/cartData.js';
import Detail from '../Detail/Detail';
import { useAsyncStorage } from '@react-native-community/async-storage';
import ItemList from '../Item/ItemList';
import ReloadItemList from '../Item/ReloadItemList';
import CartItemList from '../Item/CartItemList';

function Cart({ navigation }){

  const { getItem, setItem } = useAsyncStorage("cart");
  const [items, setItems] = useState([])

  useEffect(() => {getData();},[])

  const saveData = async newValue => {
    try {
      await setItem(JSON.stringify(newValue));
    } catch (err){
      console.log(err)
    }
  };

  const getData = async () => {
    try {
      const items = await getItem();
        console.log("Items in the cart", JSON.stringify(items,null,2))
        if (items != null){
          setItems(JSON.parse(items))
        }
      }catch (e){

      }
  };

  return (
    <ListingsWrapper>
      <CartItemList items = {items||[]} />
    </ListingsWrapper>
  )
};

const ListingsWrapper = styled(View)`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`




export default Cart;
