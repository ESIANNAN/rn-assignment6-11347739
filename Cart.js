import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
  <View style={styles.container}>
        <View style={styles.navigationBar}>
            <Image source={require('./assets/Logo.png')} style={styles.logoIcon} />
            <Image source={require('./assets/Search.png')} style={styles.searchIcon} />
        </View>
        <View style={styles.secondText}>
            <Text style={styles.checkout}>CHECKOUT</Text>
        </View>
      
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navigationBar: {
    flexDirection: 'row',
    marginTop: 70,
  },
  logoIcon: {
    marginLeft:100 ,
  },
  searchIcon: {
    marginLeft: 90,
  },
   checkout: {
    marginLeft: 80,
    marginTop: 40,
    fontSize: 24,
    fontFamily: 'serif',
     color: 'grey',
 },
  
});
