import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { CartContext } from "../contextaddcart/CartContext";

function Cart({ navigation }) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🛒 Cart Screen</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty!</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>₹ {item.price}</Text>
              </View>
              <TouchableOpacity
                style={styles.removeBtn}
                onPress={() => removeFromCart(index)}
              >
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  empty: {
    marginTop: 20,
    fontSize: 16,
    color: "grey",
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 5,
  },
  removeBtn: {
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  removeText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  backBtn: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5,
  },
  backText: {
    color: "white",
    fontWeight: "bold",
  },
});
