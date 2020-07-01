import React, {useState, useEffect} from 'react';
import { TouchableOpacity, FlatList, View, Text, Button, Image } from 'react-native';
import styled from 'styled-components/native';
import data from '../../assets/data.js';
import {addToCartData} from '../../assets/cartData.js';
import Detail from '../Detail/Detail';
import { useAsyncStorage } from '@react-native-community/async-storage';
import ItemList from '../Item/ItemList';


function Home({ navigation }){

  const { getItem, setItem } = useAsyncStorage("store");
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
        if (items != null){
          setItems(JSON.parse(items))
        }
      }catch (e){

      }
  };

  return (
    <ItemList items = {items || []} />
    
  )
};

const ListingsWrapper = styled(View)`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`




export default Home;
