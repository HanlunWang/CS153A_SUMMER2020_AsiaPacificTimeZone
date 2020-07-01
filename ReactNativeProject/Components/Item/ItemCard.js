import React, {useState, useEffect} from 'react';
import { TouchableOpacity, View, Text, Button, Image } from 'react-native';
import styled from 'styled-components/native';

export default function ItemCard ({item}) {
  return (
    <ListingItemWrapper>
      <Thumbnail source = {{ uri: item.img?.src}}/>
      <View style={{ flex: 1 }}>
        <Title>{item.itemName}</Title>
        <Price>${item.price}</Price>
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
