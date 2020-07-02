import React, {useState, useEffect} from 'react';
import { TouchableOpacity, View, Text, Button, Image } from 'react-native';
import styled from 'styled-components/native';
import { useAsyncStorage } from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';

export default function ItemCard ({item}) {

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
        if (items != null){
          setItems(JSON.parse(items))
        }
      }catch (e){

      }
  };

  const addToCart = () =>{
    setItems(items.concat(item))
    saveData(items)
    console.log("Cart Items = ", JSON.stringify(items,null,2))
    console.log("Item shown = ", JSON.stringify(item,null,2))
  }

  return (
    <ListingItemWrapper>
      <Thumbnail source = {{ uri: item.img?.src}}/>
      <View style={{ flex: 1 }}>
        <Title>{item.itemName}</Title>
        <Price>${item.price}</Price>
        <Icon raised name = "shopping-basket-add" type="fontisto" onPress = {addToCart} />
      </View>
    </ListingItemWrapper>
  )
}


const ListingItemWrapper = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
padding: 2%;
background-color: #eee;
border-radius: 5px;
margin-bottom: 5%;
`;

const Thumbnail = styled(Image)`
border-radius: 5px;
margin-right: 4%;
height: 100px;
width: 100px;
`;

const Title = styled(Text)`
flex-wrap: wrap;
width: 90%;
font-size: 20px;
`;

const Price = styled(Text)`
font-weight: bold;
font-size: 20px;
color: blue;
`;
