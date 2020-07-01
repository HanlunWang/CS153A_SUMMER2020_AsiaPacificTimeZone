import React, {useState, useEffect} from 'react';
import { FlatList, RefreshControl } from 'react-native';
import styled from 'styled-components/native';
import { useAsyncStorage } from '@react-native-community/async-storage';

import ItemCard from '../Item/ItemCard';


export default function ReloadItemList ({items}){
  const [products, setProducts] = useState(items)
  const [isLoading, setIsLoading] = useState(false)

  const loadData = (refreshing)=>{
    setIsLoading(refreshing)
  }

  useEffect(() => {getData();},[])

  const { getItem, setItem } = useAsyncStorage("store");

  const getData = async () => {
    try {
      const products = await getItem();
        if (products != null){
          setProducts(JSON.parse(products))
        }
      }catch (e){

      }
  };

  return (
    <Listings
      data = {products}
      keyExtractor = {(item, index) => "item" + index }
      renderItem= {({ item }) => <ItemCard item = {item} />}
      refreshControl = {
        <RefreshControl
          title = "Loading"
          refreshing = {isLoading}
          onRefresh = {()=>{
            getData()
          }}
        />
      }
    />
  )
}




const Listings = styled(FlatList)`
width: 100%;
padding: 5%;
`;
