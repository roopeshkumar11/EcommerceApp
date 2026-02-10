import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { CartContext } from "../contextaddcart/CartContext";

function Details({ route, navigation }) {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  const handleCart = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Product Image */}
      <Image source={{ uri: product.image }} style={styles.img} />

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>₹ {product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.btn, styles.backBtn]} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.buyBtn]} onPress={() => navigation.navigate("Buy", { product })}>
          <Text style={styles.btnText}>Buy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.cartBtn]} onPress={() => handleCart(product)}>
          <Text style={styles.btnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    color: "green",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginBottom: 30,
  },
  btn: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  backBtn: {
    backgroundColor: "#6c757d",
  },
  buyBtn: {
    backgroundColor: "#007bff",
  },
  cartBtn: {
    backgroundColor: "#28a745",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
