import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, View, Image, Button } from 'react-native';

function Home({ navigation }) {

  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setData(res.data))
      .catch(err => console.log("ERROR", err))
  }, []);

  return (
    <View style={styles.container}>
     

    
    

      {/* 🔵 Product List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.img} />
            <Text style={styles.title}>{item.title}</Text>
            <Text>₹ {item.price}</Text>
              <Button
      title="View Details"
      onPress={() => navigation.navigate("Details", { product: item })}
    />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: "white",
    
  },

  text: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10
  },

  btn:{
    marginHorizontal:20,
    marginBottom:10
  },

  card: {
    backgroundColor: "#f2f2f2",
    margin: 10,
    padding: 10,
    borderRadius: 10
  },

  img: {
    width: 80,
    height: 80,
    resizeMode: "contain"
  },

  title: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default Home;
