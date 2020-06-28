import React from 'react';
import { TouchableOpacity, FlatList, View, Text, Button, Image } from 'react-native';
import styled from 'styled-components/native';
import data from '../../assets/data.js';
import {addToCartData} from '../../assets/cartData.js';
import Detail from '../Detail/Detail';

function Home({ navigation }){
  return (
    <ListingsWrapper>
      {<Listings
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ListingItemWrapper onPress={() => navigation.navigate('Detail', { item })}>
            <Thumbnail source={item.img.src} />
            <View style={{ flex: 1 }}>
              <Title>{item.name}</Title>
              <Price>{item.price}</Price>
              <Button
                onPress={() => addToCartData(item)}
                title="Add to Cart"
                color="#002B84"
              />
            </View>
          </ListingItemWrapper>
        )}
      />}
    </ListingsWrapper>
  )
};

const ListingsWrapper = styled(View)`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`

const Listings = styled(FlatList)`
width: 100%;
padding: 5%;
`;

const ListingItemWrapper = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
padding: 2%;
background-color: #eee;
border-radius: 5px;
margin-bottom: 5%;
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

const Thumbnail = styled(Image)`
border-radius: 5px;
margin-right: 4%;
height: 100px;
width: 100px;
`;

export default Home;
