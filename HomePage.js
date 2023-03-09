import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';
import { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';




function HomePage(props) {

  
    //const navigate = useNavigation();
    const [user, setText] = useState();
    const [pass, setPass] = useState();

    function handleChange(text){
          setText(text)
    }
    function handleChange2(text){
      setPass(text)
    }

    

  function Login() {
    alert(user+pass);
  } //Login = Login.bind(HomePage)

  return (
    //const navigate = useNavigation();
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        style={styles.image1}
        //source={{uri:'https://thumbs.dreamstime.com/z/lettre-d-de-l-eau-sur-le-noir-29150485.jpg'}}
        source={require('./image/1.jpeg')}
      />
      <Text style={styles.innerText}>Nom d'utilisateur</Text>
      <TextInput
        placeholder="user"
        style={styles.text_input}
        onChangeText={handleChange}
        name="user"
        value={user}
        
        mode="outlined"
      />
      <Text style={styles.innerText}>Mot de passe</Text>
      <TextInput
        style={styles.text_input}
        secureTextEntry={true}
        name="pass"
        value={pass}
        onChangeText={handleChange2}
        label="Mot de passe"
        mode="outlined"
      />

      <TouchableHighlight onPress={() => Login()} style={styles.touch1}>
        <Text color="black">Se connecter</Text>
        
      </TouchableHighlight>
      <Text style={styles.innerText}>
        Mot de passe oublié?
        <Text style={styles.innerText2}>Cliquez ici</Text>
      </Text>
      <Text style={styles.innerText}>
        Nouveau?
        <Text style={styles.innerText2} 
        onPress={() =>  navigate("login1")}>Inscription</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text_input: {
    width: 180,
    height: 40,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 20,
    color: 'black',
    margin: 10,
    padding: 4,
  },
  image1: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'blue',
  },
  touch1: {
    backgroundColor: 'green',
    width: 180,
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  innerText: {
    color: 'black',
    fontWeight: "bold",
    textAlign: 'justify',
  },
  innerText2: {
    color: 'red',
    fontWeight: "bold",
    textAlign: 'justify',
  },
});


export default HomePage;
