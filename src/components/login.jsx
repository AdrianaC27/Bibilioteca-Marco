import React from "react";
import{StyleSheet,View,Image,Text, TextInput, Button } from "react-native";


export default ()=>{
    return(
        <View>
            <Image style={styles.logo}source={require('../Imagens/cadastroPessoa.png')}/>
            <Text style={{
            marginLeft:100, 
            display:'flex',
            fontSize:25,
           }}> Bibilioteca Brasileira</Text>
           <Image style={styles.circulo}source={require('../Imagens/Circulo.png')}/>
        </View>

        
    )
}

const styles = StyleSheet.create({

    

    logo: {

        height: 120,
        margin: 40,
        padding: 40,
                
     }, 

     circulo:{
        width: 80,
        height: 80,
        margin: 20,
        padding: 40,
     }

    }
)
