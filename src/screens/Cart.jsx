import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Cart({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🛒 Cart Screen</Text>
      <TouchableOpacity onPress={()=>navigation.openDrawer()}><Text>Back</Text></TouchableOpacity>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    fontSize:22,
    fontWeight:"bold"
  }
});
