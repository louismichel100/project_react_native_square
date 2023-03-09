import React, {Component} from 'react';
import {Text, View,TextInput, TouchableHighlight, Image, StyleSheet} from 'react-native';

function HomePage(){

    const [user, onChangeText]= React.useState("Useless Text");
    const [pass, onChangePass] = React.useState();
    

    return (
        
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

            <TextInput
            style={styles.text_input}
            //onChangeText={onChangeText}
            //value={''}
            placeholder = "utilisateur"


            />

        <TextInput
            style={styles.text_input}
            secureTextEntry={true}
            //value={}
            //onChangeText={onChangePass}
            placeholder = "Mot de passe"
            />

            <TouchableHighlight
            onPress={()=>this.Login()}
            style={styles.touch1}
            >

            <Text color='black'>Se connecter</Text>

            </TouchableHighlight>
            
        </View>
          
    );


}


const styles = StyleSheet.create({
    text_input: {
      width:180, 
        height:40, 
        borderWidth:2, 
        borderColor:'green', 
        borderRadius:20,
        color: 'black', 
        margin: 10,
        padding:4
    },
    image1:{
      width:120,
      height:120,
      marginBottom:20,
      borderRadius:60,
      borderWidth:2,
      borderColor:'blue'
  
    },
    touch1:{
      backgroundColor: 'green',
      width: 180,
      height: 45,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
    }
  });

export default HomePage