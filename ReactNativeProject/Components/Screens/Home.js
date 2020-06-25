import React from 'react';
import {Image,StyleSheet,Text,View,TouchableOpacity,ScrollView} from 'react-native';
import {AntDesign,Feather} from '@expo/vector-icons';
import ShoppingStore from "./photos/ShoppingStore.jpg";
import RenderClothes from "./RenderClothes";

export default class Store extends React.Component {

    addCart=(ItemKey,ItemName,ItemPrice,ItemQuantity)=>{
             let cart=this.state.cart;

                for(var i=0;i<cart.length;i++){
                    if(cart[i].ItemKey===ItemKey){
                    cart.splice(i, 1);}
                }
             if(ItemQuantity!==0){
              cart.push({
                  ItemKey:ItemKey,
                  ItemName:ItemName,
                  ItemPrice:ItemPrice,
                  ItemQuantity:ItemQuantity
              })
            }
            this.setState({cart:cart});
    }
    constructor(props){
        super(props);
         this.state={
             items:[
                 {ItemKey:0,ItemName:"HairDryer", ItemPrice:90, ItemPhoto:require('./photos/HairDryer.jpg'),},
                 {ItemKey:1,ItemName:"airpodsPro", ItemPrice:60, ItemPhoto:require('./photos/airpodsPro.jpg'),},
                 {ItemKey:2,ItemName:"book", ItemPrice:30, ItemPhoto:require('./photos/book.jpg'),},
                 {ItemKey:3,ItemName:"chair", ItemPrice:10, ItemPhoto:require('./photos/chair.jpg'),},
                 {ItemKey:4,ItemName:"desk", ItemPrice:20, ItemPhoto:require('./photos/desk.jpg'),},
                 {ItemKey:5,ItemName:"microwave", ItemPrice:550, ItemPhoto:require('./photos/microwave.jpg'),},
                 {ItemKey:6,ItemName:"pen", ItemPrice:330, ItemPhoto:require('./photos/pen.jpg')},
                 ],
         cart:[]

                }
            }

  render() {
    return (
     <View style={styles.container}>


            <View style={{backgroundColor:"white",width:"100%",height:60,flexDirection:"row",marginTop:"6.5%"}}>
           <Feather name="menu" size={30}  color="#404040" style={{paddingTop:12,paddingLeft:"7%"}} />
          <View style={{borderBottomWidth:0.8,height:33,width:"33%",borderTopWidth:0.8,padding:0,marginTop:12,marginLeft:"16%"}}>
           <Text style={{fontSize:20,color:"#2E86C1",textAlign:"center"}}>Team 3's Store</Text>
          </View>
          <AntDesign name="filter" size={30} color="black" size={30} style={{paddingTop:12,paddingLeft:"20%"}}  />
        </View>


            <View style={{width:"100%",height:90,backgroundColor: "#2E86C1"}}>
        <Image source={ShoppingStore} resizeMode="cover" style={{width:"100%",height:90}}>
        </Image>
        </View>


        <View style={{backgroundColor:"#2E86C1",height:30,alignItems:"flex-start",justifyContent:"center"}}>
 <Text style={{color:"white",fontWeight:"blue",marginRight:6,marginLeft:6}}>No. Of Items Added: {this.state.cart.length}</Text>
        </View>


      <ScrollView style={{height:"70%",marginBottom:10}}>
        {this.state.items.map((items)=>{
            return (<RenderClothes key={items.ItemKey} ItemKey={items.ItemKey}  ItemName={items.ItemName} ItemPrice={items.ItemPrice} ItemPhoto={items.ItemPhoto} ItemSale={items.ItemSale} addCart={this.addCart}/>)
        })}
      </ScrollView>


      <TouchableOpacity style={{backgroundColor:"#2E86C1",width:"70%",height:30,borderRadius:7,paddingTop:5,marginLeft:"16%"}}  onPress={()=>this.props.navigation.navigate('CreateCart',{cart:this.state.cart}) }  >
          <Text style={{textAlign:"center",color:"white",fontWeight:"blue"}}>Go to Shopping Cart</Text>
      </TouchableOpacity>

     </View>
    )
  }
}

const styles = StyleSheet.create({

  container:{
   flex: 1,
   justifyContent: 'flex-start',
  }
});
