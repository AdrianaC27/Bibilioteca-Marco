import React, { useState } from "react";
import{StyleSheet,View,Image,Text, TextInput, Button,Alert} from "react-native";




export default ()=>{
           const [ usuario,setUsuario] = useState('');
           const [senha,setSenha] = useState('');

    return(
        <View>
            <Image style={styles.logo} source={require('../Imagens/cadastroPessoa.png')} />
            
            <TextInput 
                style={styles.input} 
                onChangeText={setUsuario}
                value={usuario}
                placeholder="Insira seu Usuário"
            />
            
            <TextInput 
                style={styles.input} 
                onChangeText={setSenha}
                value={senha}
                placeholder="Insira sua Senha"
                keyboardType="numeric"/>
            
            <Text>Não tem Usuário. Click Aqui?</Text>

            <View style={styles.button}>
            <Button
            style={styles.button}
            title="Entrar"
            color='red'
            onPress={() => Alert.alert('Entrar')}/>
            </View>

            <Button
            style={styles.button}
            title="Sair"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    input:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    title: {
        textAlign: 'center',
        height: 40,
        margin: 40,
        padding: 20,
        
      },

    logo:{

        height: 120,
        margin: 40,
        padding: 40,
    }, 
    
    button:{
        
        height: 40,
        marginTop: 80,
        marginBottom: 40,
        backgroundColor: 'red'
        
     },  
    
})