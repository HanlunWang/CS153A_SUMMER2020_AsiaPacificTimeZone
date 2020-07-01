import React, {useState} from 'react';
import { FlatList, RefreshControl } from 'react-native';
import styled from 'styled-components/native';

import ItemCard from '../Item/ItemCard';


export default function ItemList ({items}){

    return (
      <Listings
        data = {items}
        keyExtractor = {(item, index) => "item" + index }
        renderItem= {({ item }) => <ItemCard item = {item} />}
      />
    )
}




const Listings = styled(FlatList)`
width: 100%;
padding: 5%;
`;
