import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";

function Buy({ route, navigation }) {

  const { product } = route.params;   // receive product data

  const handleBuy = () => {
    Alert.alert("Success", "Product purchased successfully 🎉");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <Image source={{ uri: product.image }} style={styles.img} />

      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>₹ {product.price}</Text>

      <TouchableOpacity style={styles.buyBtn} onPress={handleBuy}>
        <Text style={styles.btnText}>Buy Now</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.backBtn} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.btnText}>⬅ Back</Text>
      </TouchableOpacity>

    </View>
  );
}

export default Buy;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:"#fff",
    justifyContent:"center"
  },
  img:{
    width:220,
    height:220,
    alignSelf:"center",
    resizeMode:"contain"
  },
  title:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:20,
    textAlign:"center"
  },
  price:{
    fontSize:18,
    color:"green",
    textAlign:"center",
    marginVertical:10
  },
  buyBtn:{
    backgroundColor:"green",
    padding:15,
    borderRadius:10,
    marginTop:30
  },
  backBtn:{
    backgroundColor:"grey",
    padding:15,
    borderRadius:10,
    marginTop:15
  },
  btnText:{
    color:"#fff",
    fontSize:16,
    textAlign:"center",
    fontWeight:"bold"
  }
});
