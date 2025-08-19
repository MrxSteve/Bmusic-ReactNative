import { Button, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a BMusic</Text>
      <Text style={styles.subtitle}>Tu aplicación de música favorita</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title='Ver mi Perfil'
          onPress={() => navigation.navigate('Profile')}
          color="#6c8ae6"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title='Ver Playlists'
          onPress={() => navigation.navigate('PlayListDetail')}
          color="#6c8ae6"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6e5faff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6c8ae6',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
})