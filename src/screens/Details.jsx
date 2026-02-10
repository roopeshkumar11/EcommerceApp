import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";

function Details({ route, navigation }) {

  const { product } = route.params;   // receive data

  return (
    <View style={styles.container}>

      <Image source={{ uri: product.image }} style={styles.img} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>₹ {product.price}</Text>
      <Text>{product.description}</Text>
      <View style={styles.btncontainer}>
        <TouchableOpacity

          onPress={() => navigation.goBack()}
        // button color
        ><Text style={styles.btntext}>Back</Text></TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("Buy",{product:product})}><Text style={styles.btntext}>Buy</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.btntext}>Add to Card</Text></TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  img: {
    width: 200,
    height: 200,
    alignSelf: "center",
    resizeMode: "contain"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  price: {
    fontSize: 16,
    color: "green",
    marginVertical: 10
  },

  btncontainer: {

    flexDirection: "row",
    marginTop: 10,
    justifyContent: 'space-evenly'

  },
  btntext: {
    color: "white",
    backgroundColor: "grey",
    borderRadius: 5,
    padding: 8,
    width: 100,
    alignItems: "center",
    justifyContent: "center"

  },

});

export default Details;
