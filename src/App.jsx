import React from "react";
import{StyleSheet,View,Text} from "react-native";

import Usuario from "./components/Usuario";
import Cadastro from "./components/Cadastro";
import Login from "./components/login";
import MenuPrincipal from "./components/MenuPrincipal";
import SobreNos from "./components/SobreNos";


export default () =>{
       
    return(
       <View style ={[style.txtG, style.centro ]}>           
           
           
           
           {/* <Usuario/> */}
           {/* <Cadastro/>  */}
           {/* <Login/> */}
           <MenuPrincipal/>
           {/* <SobreNos/> */}
       </View>
    )
   
   
   }

   const style = StyleSheet.create(
    {
        txtG:{
             backgroundColor:"#A4CE95",
             flex:1
        },
        centro:{
            alignItems:'stretch',
            padding:10,
        },
        texto:{
            fontSize:23,
            padding:40,
            color:'white',
            fontFamily:'Arial',
        }


    }
    
    )
     
   

