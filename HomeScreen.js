import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const products = [
  { id: 1, name: 'Office Wear', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress1.png') },
  { id: 2, name: 'Black', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress2.png') },
  { id: 3, name: 'Church Wear', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress3.png') },
  { id: 4, name: 'Lamerei', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress4.png') },
  { id: 5, name: '21WN', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress5.png') },
  { id: 6, name: 'Lopo', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress6.png') },
  { id: 7, name: '21WN', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress7.png') },
  { id: 8, name: 'Play suit', description: 'reversible angora cardigan', price: '$120', image: require('./assets/dress8.jpg') },
];

const HomeScreen = () => {
  const handleSearch = () => {
    console.log('Search button clicked');
  };

  const handleMenu = () => {
    console.log('Menu button clicked');
  };

  const handleFilter = () => {
    console.log('Filter button clicked');
  };

  const handleListView = () => {
    console.log('List view button clicked');
  };

  const handleShoppingBag = () => {
    console.log('Shopping bag clicked');
  };

  const addToCart = (productName) => {
    console.log(`Added ${productName} to cart`);
    // Implement your cart functionality here
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.navigationBar}>
          <TouchableOpacity onPress={handleMenu}>
            <Image source={require('./assets/Menu.png')} style={styles.menuIcon} />
          </TouchableOpacity>
          <Image source={require('./assets/Logo.png')} style={styles.logoIcon} />
          <TouchableOpacity onPress={handleSearch}>
            <Image source={require('./assets/Search.png')} style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShoppingBag}>
            <Image source={require('./assets/shoppingBag.png')} style={styles.shoppingIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.secondNav}>
          <Text style={styles.ourStoryText}>OUR STORY</Text>
          <TouchableOpacity onPress={handleFilter}>
            <Image source={require('./assets/Filter.png')} style={styles.filterIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleListView}>
            <Image source={require('./assets/Listview.png')} style={styles.listIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.pictureContainer}>
          {products.map((product) => (
            <View key={product.id} style={styles.card}>
              <Image source={product.image} style={styles.picture} />
              <Text style={styles.form}>{product.name}</Text>
              <Text style={styles.description}>{product.description}</Text>
              <Text style={styles.cost}>{product.price}</Text>
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => addToCart(product.name)}
              >
                <Image
                  source={require('./assets/add.png')}
                  style={styles.addToCartIcon}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  navigationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  menuIcon: {
    marginRight: 20,
  },
  logoIcon: {
    flex: 1,
    marginRight: 20,
  },
  searchIcon: {
    marginRight: 20,
  },
  shoppingIcon: {
    marginRight: 20,
  },
  secondNav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    width: '100%',
  },
  ourStoryText: {
    fontSize: 24,
    fontFamily: 'serif',
  },
  filterIcon: {
    marginLeft: 'auto',
    marginRight: 10,
  },
  listIcon: {
    marginRight: 10,
  },
  pictureContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  card: {
    width: 160,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  picture: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  form: {
    fontSize: 16,
    fontFamily: 'serif',
    marginTop: 5,
    textAlign: 'center',
  },
  description: {
    color: 'grey',
    fontSize: 12,
    textAlign: 'center',
  },
  cost: {
    fontSize: 16,
    fontFamily: 'serif',
    color: 'orange',
    marginTop: 5,
    textAlign: 'center',
  },
  addToCartButton: {
    marginTop: 10,
  },
  addToCartIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default HomeScreen;
