import React from 'react';
import "./redux/reducers";

import {Text, View,TouchableHighlight } from 'react-native';
import { styles } from "./styles/StyleSheet";


export default class Actionbar extends React.Component {
    
    render(){
        return (

            
            <View style={styles.content}>

               <View style={styles.botones}>

                <TouchableHighlight style={styles.boton} onPress = {()=> {
                    if ((this.props.currentQuestion)!==0){
                        this.props.onChangeQuestion('Anterior')
                    }
          
                }}><Text>Anterior</Text></TouchableHighlight>



             <TouchableHighlight style={styles.boton} onPress ={()=> {
                this.props.onSubmit()

              }} ><Text>Submit</Text></TouchableHighlight>



             <TouchableHighlight style={styles.boton} onPress ={()=> {
                
                this.props.onReset()
                
               
             } } ><Text>Reset</Text></TouchableHighlight>
        


              <TouchableHighlight style={styles.boton} onPress={()=>{
              if ((this.props.currentQuestion + 1)!== this.props.questionsLenght){
                this.props.onChangeQuestion('Siguiente')
                }
                }} ><Text>Siguiente</Text></TouchableHighlight>

            <TouchableHighlight style={styles.boton} 
              onPress={() => {this.props.goBack()}}
              ><Text>Back</Text></TouchableHighlight>



              </View>



            </View>
            
        
        
        )
    }

        


        

}



