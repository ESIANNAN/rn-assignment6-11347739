import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
<View style={styles.container}>
    <View style={styles.navigationBar}>
      <Image source={require('./assets/Menu.png')} style={styles.menuIcon} />
      <Image source={require('./assets/Logo.png')} style={styles.logoIcon} />
      <Image source={require('./assets/Search (1).png')} style={styles.searchIcon} />
      <Image source={require('./assets/shoppingBag.png')} style={styles.shoppingIcon} />
</View>

 <View>
    <Text style={styles.ourStoryText}>OUR STORY</Text>
  </View>

    <StatusBar style="auto" />
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  navigationBar: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 70,
  },
  menuIcon: {
    marginRight: 80,
  },
  logoIcon: {
    marginRight: 60,
  },
  searchIcon: {
    marginRight: 15,
  },
    ourStoryText: {
    marginTop: -670,
    fontSize: 24 ,
    fontFamily: 'serif',    
  },
});
