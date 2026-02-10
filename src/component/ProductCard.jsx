import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ProductCard = ({ product, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.img} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>₹ {product.price}</Text>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f2f2f2",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    color: "green",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
