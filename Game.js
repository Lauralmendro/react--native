import React from 'react';

import Actionbar from "./Actionbar";


import Content from './Content';
import { Image,Text, View,TouchableHighlight } from 'react-native';
import { styles } from './styles/StyleSheet';



export default class Game extends React.Component{
    render(){
        if( this.props.finished == false){

    return (

        //DE GAME SALE CONTENT Y ACTIONBAR
        //tenemos que meter en cada uno las actions y reducers que vayamos a utilizar
        <View >
        
        <Content 
           
            question= {this.props.question}//estas acciones no se para que se utilizan en content , SI SE UTILIZA ACCEDER PREGUNTA
            onQuestionAnswer={(e)=>this.props.onQuestionAnswer(e)}//SE UTILIZA PARA ESCRIBIR
             currentQuestion={this.props.currentQuestion}// en un principio no se utiliza en content
            score={this.props.score}//idem
        /> 
        <Actionbar 
            onChangeQuestion={this.props.onChangeQuestion} //para el boton de siguiente y atras
            onSubmit={this.props.onSubmit} // boton submit
            currentQuestion={this.props.currentQuestion}// tanto currentquestion como length lo utiliza pra el clickable
          
            questionsLength={this.props.questionsLength}
            onReset={this.props.onReset}
            goBack={this.props.goBack}
            onDownload={this.props.onDownload}
        />

        
     </View>
    
    );
    
        }    
     else {

    return(
        <View style={styles.res}>
        <Text> RESULTADO: {this.props.score}</Text>
          
        <View>{this.props.score<5? <Text>FAIL: TRY NEXT TIME :(</Text> : <Text> "PASS: CONGRATULATIONS!</Text>}</View>
          
          <TouchableHighlight style={styles.boton}  onPress ={()=> {
                this.props.onReset()
            }} ><Text>Reset</Text></TouchableHighlight>
            
            <View>{this.props.score<5? 
            <Image
            source = {require('./assets/fail.jpg')}
            style={{ width:250,height:250}}
          />  :
          <Image
          source = {require('./assets/well.jpg')}
          style={{ width:250,height:250}}
        /> }
             </View>
            
        </View>
    )
     }
}
}
   