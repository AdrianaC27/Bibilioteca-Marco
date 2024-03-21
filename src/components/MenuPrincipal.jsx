import React from "react";
import{StyleSheet,View,Image,Text} from "react-native";

export default ()=>{
    
return(
    <View>
        <Text style={{
            marginLeft:120, 
            
       
            display:'flex',
            
            fontSize:25
            
           }}
           >Menu Principal</Text> 
           <View>
           <Image style={styles.logo}source={require('../Imagens/Quadrado.png')}/>
           <Text>Cadastro de Clientes</Text>

           </View>
           <View>
           <Image style={styles.logo}source={require('../Imagens/Quadrado.png')}/>
           <Text>Cadastro de Clientes</Text>

           </View>
           <View>
           <Image style={styles.logo}source={require('../Imagens/Quadrado.png')}/>
           <Text>Cadastro de Clientes</Text>

           </View>
            
        

    </View>
)
        
 
    
}

const styles = StyleSheet.create({
    logo: {

        height: 60,
        padding: 60,
        flexGrow: 1,
        flexDirection: 'row'
    }

})

