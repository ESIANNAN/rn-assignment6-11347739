import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.navigationBar}>
      <Image source={require('./assets/Menu.png')} style={styles.menuIcon} />
      <Image source={require('./assets/Logo.png')} style={styles.menuIcon} />
      <Image source={require('./assets/shoppingBag.png')} style={styles.menuIcon} />
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
});
