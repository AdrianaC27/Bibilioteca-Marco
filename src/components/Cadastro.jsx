import React, { useState } from "react";
import{StyleSheet,View,Image,Text, TextInput, Button } from "react-native";

export default ()=>{
    const [nome, setNome]= useState('')
    const [email, setEmail]= useState('')
    const [endereço, setEndereco]= useState('')
    const [numero, setNumero]= useState('')
    const [Cep, setCep]= useState('')
    const [Cidade, setCidade]= useState('')
    const [estado, setEstado]= useState('')

    return(
        <View>
            <Image style={styles.logo}source={require('../Imagens/cadastroPessoa.png')}/>
            <Text style={{
            marginLeft:120, 
            
       
            display:'flex',
            
            fontSize:25
            
           }}
           >Cadastro de Clientes</Text> 
              
            <TextInput
            style={styles.input}             
            onChangeText={setNome}
            value={nome}                      
            placeholder="Nome"            
            />
            <TextInput
            style={styles.input}             
            onChangeText={setEmail}
            value={email}                      
            placeholder="email"            
            />
            <TextInput
            style={styles.input}             
            onChangeText={setEndereco}
            value={endereço}                      
            placeholder="Endereço"  

            />
            <TextInput
            style={styles.input}             
            onChangeText={setNumero}
            value={numero}                      
            placeholder="Número"            
            />
            <TextInput
            style={styles.input}             
            onChangeText={setCep}
            value={Cep}                      
            placeholder="CEP"
            keyboardType="numeric"            
            />
            <TextInput
            style={styles.input}             
            onChangeText={setCidade}
            value={Cidade}                      
            placeholder="Cidade"            
            />
            <TextInput
            style={styles.input}             
            onChangeText={setEstado}
            value={estado}                      
            placeholder="Estado"            
            />
            <View style={styles.button}>
               <Button
               style={styles.button}
               title="Cadastrar"
               color='blue'
               />
            </View >
            
            <View style={styles.button}>
               <Button
                style={styles.button}
                title="Alterar"
                color='blue' 
                />
                       
            </View>
            
            <View style={styles.button}>
                < Button
                style={styles.button}
                title="Pesquisar"
                color='blue' 
                />

                       
            </View>
            <View style={styles.button}>
                < Button
                style={styles.button}
                title="Excluir"
                color='blue' 
                />
                       
            </View>
        </View>

    )
}
        

const styles = StyleSheet.create({

    texto:{height: 40,
        margin: 5,
        padding: 5,
        backgroundColor: 'white',

    },

    logo: {

        height: 120,
        padding: 40,
                
     }, 
     
     input:{
        height: 40,
        margin: 5,
        borderWidth: 3,
        padding: 5,
        backgroundColor: 'white'
      },
      button:{
        
        height: 40,
    
        marginBottom: 10,
       
        
     },  
}

)