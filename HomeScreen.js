import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.navigationBar}>
      <Image source={require('./assets/Menu.png')} style={styles.navigationIcon} />
      <Image source={require('./assets/Logo.png')} style={styles.navigationIcon} />
      <Image source={require('./assets/Search (1).png')} style={styles.naviggationIcon} />
      <Image source={require('./assets/shoppingBag.png')} style={styles.navigationIcon} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
});
