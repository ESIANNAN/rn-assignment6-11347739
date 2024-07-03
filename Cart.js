import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
  <View style={styles.container}>
        <View style={styles.navigationBar}>
            <Image source={require('./assets/Logo.png')} style={styles.logoIcon} />
            <Image source={require('./assets/Search (1).png')} style={styles.searchIcon} />
        </View>
     
      
      
      
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
