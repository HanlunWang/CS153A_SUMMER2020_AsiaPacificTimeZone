import React, {useState} from 'react';
import { FlatList, RefreshControl } from 'react-native';
import styled from 'styled-components/native';

import CartItemCard from '../Item/CartItemCard';


export default function ItemList ({items}){

    return (
      <Listings
        data = {items}
        keyExtractor = {(item, index) => "item" + index }
        renderItem= {({ item }) => <CartItemCard item = {item} />}
      />
    )
}




const Listings = styled(FlatList)`
width: 100%;
padding: 5%;
`;
