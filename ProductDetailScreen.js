import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ProductDetailScreen({ route, navigation }) {
  const { item } = route.params;

  // Function to add item to cart (similar to what you have in Homescreen)
  const addToCart = () => {
    // Implement addToCart logic or simply navigate back to Homescreen with an add to cart action
    navigation.navigate('Homescreen', { action: 'add_to_cart', item: item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.source} style={styles.productImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  productImage: {
    width: 300,
    height: 300,
    borderRadius: 15,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    fontFamily: 'serif',
    color: 'grey',
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontFamily: 'serif',
    color: 'orange',
    marginTop: 10,
  },
  addToCartButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
