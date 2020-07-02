import React, {useState, useEffect} from 'react';
import { TouchableOpacity, FlatList, View, Text, Button, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import data from '../../assets/data.js';
import {addToCartData} from '../../assets/cartData.js';
import Detail from '../Detail/Detail';
import { useAsyncStorage } from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

import ItemList from '../Item/ItemList';
import ReloadItemList from '../Item/ReloadItemList';

function Home({ navigation }){

  const { getItem, setItem, removeItem } = useAsyncStorage("store");
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

  const deleteData = async () =>{
    try {
      await removeItem("store")
    } catch(e){

    }
  }

  return (
    <ListingsWrapper>
      <ItemList items = {items || []} />
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        position='right'
        verticalOrientation='up'
        renderIcon = {() => (<View style={styles.actionButtonView}><AntDesign name="ellipsis1" style= {styles.actionButtonIcon} />
        </View> )}>
        <ActionButton.Item buttonColor='#9b59b6' title="Clear the data" onPress={deleteData}>
          <AntDesign name="delete" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#9b59b6' title="Refresh the page" onPress={getData}>
          <AntDesign name="reload1" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        position = 'left'
        onPress={() => navigation.navigate('AddItem')}
        renderIcon={() => (<View style={styles.actionButtonView}><AntDesign name="form" style={styles.actionButtonIcon} />

        </View>)}
      />
    </ListingsWrapper>
  )
};

const ListingsWrapper = styled(View)`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  actionButtonView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  actionButtonText: {
    fontSize: 14,
    color: 'white',
  }
});



export default Home;
