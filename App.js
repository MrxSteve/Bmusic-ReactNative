import { Text, View, Image, TouchableOpacity, SafeAreaView, Dimensions, StyleSheet } from "react-native";
import { useState } from 'react'


const { width, height } = Dimensions.get('window');
console.log( width, height );

export default function App() {

  let userName = 'MrxSteve';
  const [myName, setMyName] = useState(userName);
  const imageUrl = 'https://avatars.githubusercontent.com/u/89896025?v=4';

  const following = 15;
  const followers = 10;

  const onPress = () => {
    setMyName('SrGeofrey');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BMusic</Text>
      
      <View style={styles.principal}>
        <View style={styles.profileContainer}>
          <Image 
            source={{uri: imageUrl}}
            style={styles.avatar}    
          />
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>{myName}</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{followers}</Text>
                <Text style={styles.statLabel}>Seguidores</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{following}</Text>
                <Text style={styles.statLabel}>Siguiendo</Text>
              </View>
            </View>
          </View>
        </View>
        
        <TouchableOpacity
          style={styles.editButton}
          onPress={onPress}
        >
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>      
      
      <View style={styles.favoritesSection}>
        <Text style={styles.favoritesTitle}>Canciones favoritas</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  principal: {
    backgroundColor: '#6c8ae6',
    marginTop: 15,
    width: width*0.9,
    padding: 20,
    borderRadius: 20,
    shadowOpacity: 0.3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  userInfoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#e0e0e0',
  },
  statDivider: {
    height: 24,
    width: 1,
    backgroundColor: '#fff',
    opacity: 0.5,
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold',
    color: '#6c8ae6',
    textAlign: 'center', 
    marginTop: 40,
    marginBottom: 10,
    letterSpacing: 1,
  },
  avatar: {
    height: 90, 
    width: 90, 
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#fff',
  },
  userName: {
    fontSize: 22, 
    color: '#fff',
    fontWeight: '700',
    marginBottom: 5,
    textAlign: 'center',

  },
  editButton: {
    backgroundColor: '#fff', 
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center', 
    borderRadius: 25, 
    justifyContent: 'center',
  },
  editButtonText: {
    fontSize: 16, 
    fontWeight: '600',
    textAlign: 'center', 
    color: '#6c8ae6',
  },
  favoritesSection: {
    width: width * 0.9,
    marginTop: 25,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    shadowOpacity: 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
  },
  favoritesTitle: {
    fontSize: 20, 
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  }
});
