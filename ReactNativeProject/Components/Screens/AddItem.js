import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, TextInput, AsyncStorage, ScrollView, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {addNewItem} from '../../assets/data.js';
import { useAsyncStorage } from '@react-native-community/async-storage';




//this function is able to make the user add a picture
function AddPicture({addImage}) {
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });

  };

  if (selectedImage !== null) {
    addImage(selectedImage.localUri)
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
      </View>
    );
  }

  return (
    <View>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}



//this is the item form to handle with item object
function ItemForm({addItem}){
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const addImage =(image) =>{
    setImage(image)
  }

  const handleForm = ()=> {
    const item = {itemName: itemName, price: price, img: {src: image, alt:"picture"}}
    addItem(item)

  }

  return (
    <TouchableOpacity
        activeOpacity={1.0}
        style={styles.container}>
          <View
              style={styles.inputBox}>
              <TextInput
                  onChangeText={text => setItemName(text)}
                  style={styles.input}
                  autoCapitalize='none'
                  underlineColorAndroid={'transparent'}
                  placeholderTextColor={'#ccc'}
                  placeholder={'ItemName'}
              />
          </View>
          <View
              style={styles.inputBox}>
              <TextInput
                  onChangeText={text => setPrice(text)}
                  style={styles.input}
                  autoCapitalize='none'
                  underlineColorAndroid={'transparent'}
                  placeholderTextColor={'#ccc'}
                  placeholder={'Price'}
                  keyboardType='numeric'
              />
          </View>
          <AddPicture addImage = {addImage}/>
          <TouchableOpacity
              onPress={handleForm}
              style={styles.button}>
              <Text
                  style={styles.btText}>Submit</Text>
          </TouchableOpacity>
    </TouchableOpacity>
  )
}



export default function AddItem(){

  const { getItem, setItem, clear } = useAsyncStorage("store");
  const [items, setItems] = useState([])

  const addItem = (item) => {
    setItems(items.concat(item))
    saveData(items)
    console.log("items=" + JSON.stringify(items,null,2))
    console.log("item=" + JSON.stringify(item,null,2))
  };

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
        console.log(e)
      }
  };

  const deleteData = async () =>{
    try {
      await AsyncStorage.clear()
    } catch(e){

    }

    console.log('Clear.')
  }

  return (
    <TouchableOpacity
        activeOpacity={1.0}
        style={styles.container}>
      <ItemForm addItem={addItem} />
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  input: {
      width: 200,
      height: 40,
      fontSize: 20,
      color: '#fff',
  },
  inputBox: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 280,
      height: 50,
      borderRadius: 8,
      backgroundColor: '#737373',
      marginBottom: 8,
  },
  button: {
      height: 50,
      width: 280,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: '#737373',
      marginTop: 20,
  },
  btText: {
      color: '#fff',
      fontSize: 20,
  }
});
