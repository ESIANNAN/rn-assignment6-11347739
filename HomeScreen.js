import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
<ScrollView contentContainerStyle={styles.scrollContainer}>
<View style={styles.container}>
    <View style={styles.navigationBar}>
      <Image source={require('./assets/Menu.png')} style={styles.menuIcon} />
      <Image source={require('./assets/Logo.png')} style={styles.logoIcon} />
      <Image source={require('./assets/Search (1).png')} style={styles.searchIcon} />
      <Image source={require('./assets/shoppingBag.png')} style={styles.shoppingIcon} />
</View>

  <View style={styles.secondNav} >
        <Text style={styles.ourStoryText}>OUR STORY</Text>
        <Image source={require('./assets/Filter (1).png')} style={styles.filterIcon} />
        <Image source={require('./assets/Listview.png')} style={styles.listIcon} />
    </View>

      <View style={styles.pictureContainer}>
        <View style={styles.pictureRow}>
            <Image source={require('./assets/dress1.png')} style={styles.picture} />
            <Image source={require('./assets/dress2.png')} style={styles.picture} />
            <Image source={require('./assets/dress3.png')} style={styles.picture} />
            <Image source={require('./assets/dress4.png')} style={styles.picture} />
        </View>
        <View style={styles.pictureRow}>
            <Image source={require('./assets/dress5.png')} style={styles.picture} />
            <Image source={require('./assets/dress6.png')} style={styles.picture} />
            <Image source={require('./assets/dress7.png')} style={styles.picture} />
        </View>
    </View>

    <StatusBar style="auto" />
 </View>
 </ScrollView>
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
    secondNav: {
    flexDirection:'row',
  },
  ourStoryText: {
    marginTop: 25,
    fontSize: 24,
    fontFamily: 'serif',
  },
  filterIcon: {
    marginTop: 25,
    marginLeft: 100,
    width: 30,
    height: 30,
  },
  listIcon: {
    marginTop: 25,
    marginLeft: 20,
    width: 30,
    height: 30,
  },
    pictureContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
});
