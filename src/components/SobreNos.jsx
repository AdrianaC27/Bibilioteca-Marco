import React from "react";
import{StyleSheet,View,Text,Image} from "react-native";

export default ()=>{
    return(
    <View>
        <Image style={styles.logo}source={require('../Imagens/cadastroPessoa.png')}/>
                <Text style={{  
                         
                display:'flex',            
                fontSize:25,
                color:'white'

            
            }}>Sobre nós</Text>
            <Text>A instituição possui mais de 500.000 mil exemplares, 
                entre livros, revistas e jornais históricos. 
                Seu acervo reúne obras representativas da produção 
                
                intelectual de escritores brasileiros e estrangeiros,  
                que podem ser encontradas não apenas no setor de empréstimo,
                mas, também, em coleções específicas localizadas em diferentes 
                setores da biblioteca, como, por exemplo, a coleção de autores 
                mineiros (Mineiriana), coleção de obras raras e especiais 
                (Patrimonial), coleção de periódicos antigos (Hemeroteca), 
                
                coleção infantojuvenil (BIJU) e acervo em Braille. 
                A estrutura física da Biblioteca Pública Estadual 
                de Minas Gerais possui ainda salas de estudo e de 
                pesquisa via internet, sala de cursos, galerias de arte, 
                além de um teatro com moderno suporte tecnológico para um 
                público de 191 pessoas. Seus prédios recebem, diariamente, 
                cerca de 660 pessoas, entre crianças, jovens, adultos, 
                pesquisadores de várias áreas do conhecimento e pessoas com
                 deficiência visual..</Text>

    </View>
        
            
           
)}

const styles = StyleSheet.create({

    

    logo: {

        height: 120,
        margin: 40,
        padding: 40,
                
     }, 
    }
    )
    


