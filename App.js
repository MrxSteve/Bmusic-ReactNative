import { Text, View, Image, Button, TouchableOpacity } from "react-native";

export default function App() {

  const userName= 'Steve Tobar';

  return (
    <View style={{borderWidth: 4, borderColor: 'red', flex: 1}}>
      <Text style={{fontSize: 20, textAlign: 'center', marginTop: 30}}>
        BMusicApp
      </Text>
        <View style={{borderWidth: 4, borderColor: 'green', padding: 5, marginTop: 20, flexDirection: 'row'}}>
          <Image 
            source={{uri: 'https://avatars.githubusercontent.com/u/89896025?v=4'}}
            style={{height: 100, width: 100, borderRadius: 50}}    
          />
          <Text style={{fontSize: 20, textAlign: 'center', 
            flex: 1, alignSelf: 'center'}}>
              User: {userName}
          </Text>
        </View>
        <TouchableOpacity
            style={{borderWidth: 1, backgroundColor: 'blue', marginTop: 10,
              width: 150, height: 45, alignSelf: 'center', borderRadius: 10, justifyContent: 'center'
            }}
            onPress={() => alert("editando...")}
        >
            <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>Editar</Text>
        </TouchableOpacity>

        <View>
          <Text style={{fontSize: 20, textAlign: 'center', marginTop: 30}}>
            Canciones favoritas
          </Text>
        </View>
    </View>
  );
}
