import React from 'react';
import { Button, Image, StyleSheet, Text, View, TextInput, Alert, ScrollView} from 'react-native';

const Detail = ({ navigation, route }) => {
  const {item} = route.params
  let state = 0;

  return (
  <ScrollView>
    <View style={styles.container}>

      <Text style = {styles.itemName}>
        {item.name}
        <Text style = {styles.price}> {item.price}</Text>
      </Text>
      <Text style = {{marginLeft: 15}}> {item.desc} </Text>

      <Text style = {{marginLeft: 15}}> Category: {item.category} </Text>
    </View>
  </ScrollView>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemName: {
    width: 300,
    height: 50,
    marginVertical: 8,
    textAlign:'center',
    padding: 10,
    borderWidth: 1,
    color: "black",
    fontWeight: 'bold',
    borderColor: "#FFFFFF",
    fontSize: 16,
    flexDirection: 'row',
  },
  price:{
    color:"#0000FF",
    textAlign:'center',
    flexDirection: 'row',
  },
  sub:{
    width:100,
    borderRadius: 15,
    margin:15,
  }
})

export default Detail;
