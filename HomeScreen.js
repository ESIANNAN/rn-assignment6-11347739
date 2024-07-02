import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

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
         <View style={styles.card}>
                <Image source={require('./assets/dress1.png')} style={styles.picture} />
                <Text style={styles.form}> Office Wear</Text>
                <Text style={styles.description}>reversible angora cardigan</Text>
                <Text style={styles.cost}>$120</Text>
            </View>
            <View style={styles.card}>
                <Image source={require('./assets/dress2.png')} style={styles.picture} />
                <Text>Black</Text>
                <Text>reversible angora cardigan</Text>
                <Text>$120</Text>
            </View>
            <View style={styles.card}>
                <Image source={require('./assets/dress3.png')} style={styles.picture} />
                <Text>Church Wear</Text>
                <Text>reversible angora cardigan</Text>
                <Text>$120</Text>
            </View>
            <View style={styles.card}>
                <Image source={require('./assets/dress4.png')} style={styles.picture} />
                <Text>Lamerei</Text>
                <Text>reversible angora cardigan</Text>
                <Text>$120</Text>
            </View>  
        </View>
        <View style={styles.pictureRow}>
            <View style={styles.card}>
                <Image source={require('./assets/dress5.png')} style={styles.picture} />
                <Text>21WN</Text>
                <Text>reversible angora cardigan</Text>
                <Text>$120</Text>
            </View>  
            <View style={styles.card}>
                <Image source={require('./assets/dress6.png')} style={styles.picture} />
                <Text>Lopo</Text>
                <Text>reversible angora cardigan</Text>
                <Text>$120</Text>
            </View>  
            <View style={styles.card}>
                <Image source={require('./assets/dress7.png')} style={styles.picture} />
                <Text>21WN</Text>
                <Text>reversible angora cardigan</Text>
                <Text>$120</Text>
            </View>
            <View style={styles.card}>
                <Image source={require('./assets/dress8.jpg')} style={styles.picture} />
                <Text>Play suit</Text>
                <Text>reversible angora cardigan</Text>
                <Text>$120</Text>
            </View>
           
           
            
            
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
    marginLeft: 30,
  },
  logoIcon: {
    marginRight: 60,
  },
  searchIcon: {
    marginRight: 25,
  },
  secondNav: {
    flexDirection:'row',
  },
  ourStoryText: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 24,
    fontFamily: 'serif',
    
  },
  filterIcon: {
    marginTop: 30,
    marginLeft: 110,
    marginRight: 10,
    width: 30,
    height: 30,
  },
  listIcon: {
    marginTop: 30,
    marginLeft: 20,
    width: 30,
    height: 30,
  },
  pictureContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginRight: 25,
  },
  
  pictureRow: {
    marginLeft: 20,
  },
  picture: {
    borderRadius:15,
    marginBottom: 15,
  },
   card: {
    marginBottom: 15,
  },
  form: {
    fontSize: 20,
    fontFamily: 'serif',
  },
   description: {
    fontSize:14,
    fontFamily: 'serif',
    color: 'grey',
  },
  cost: {
    fontSize:20,
    fontFamily: 'serif',
    color: 'orange', 
  },
});
