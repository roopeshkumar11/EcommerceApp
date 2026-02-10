import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";

function Settings({ navigation }) {
 
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      {/* Profile */}
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>👤 Edit Profile</Text>
      </TouchableOpacity>

     

      {/* About */}
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>ℹ About App</Text>
      </TouchableOpacity>

      {/* Contact */}
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>📞 Contact Us</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>🚪 Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20
  },
  item: {
    padding: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 12
  },
  itemRow: {
    padding: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontSize: 16
  },
  logout: {
    marginTop: 30,
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
