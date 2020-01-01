import { Text, View, AsyncStorage, StatusBar} from 'react-native';
import React from "react";
import { connect } from 'react-redux';
import Game from "./Game";
import {questionAnswer, changeQuestion, initQuestions,submit,download} from './redux/actions'
import NavBar from './Navbar';
import ReduxProvider from './redux/ReduxProvider'
import { styles } from './styles/StyleSheet';



class MainScreen extends React.Component {
constructor(props){
    super(props);
    this.downloadQuestions=this.downloadQuestions.bind(this);
  }
 
  downloadQuestions(){
    fetch("https://quiz.dit.upm.es/api/quizzes/random10wa?token=7a59787b4a3230fee7fc")
 
        .then(function(res){
          return res.json();
        })
        .then(downloaded=>{
          this.props.dispatch(download(downloaded));
          console.log("ver si cambian las pregs");
          console.log(downloaded);
        })
  } 
 
  componentDidMount(){
    this.downloadQuestions();
  }

  render(){  
   
   return (
     //todos los estados o reducers que vamos a utilizar los abreviamos nombrando la funcion con nombres
     //para hacer mas sencillo el codigo
     // curentQuestion es ahora la funcion de currentQuestion
     //DE APP SALE NAVBAR Y GAME
     
     <View style={styles.container}>
       <ReduxProvider/>
       <NavBar/>
       <Game 
      
       questions={this.downloadQuestions}
       question={this.props.questions[this.props.currentQuestion]}//la question en si, capital de españa? de italia? questions[i]
       currentQuestion={this.props.currentQuestion} //en que numero de pregunta vamos, primera segunda i ,, es un reducer
       finished={this.props.finished}//llamamos a la funcion y la utilizamos desde la palabra finished,, es un reducer
       score={this.props.score} //reducer
       onQuestionAnswer={(answer)=>{
       this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
       }} //al parecer este lo daban hay que analizarlo, hace dispach a questionANSWER metiendo currentQuestion como indice y answer como el parametro answer
       // dispatch se utiliza cuando es una accion?,, es una accion
       onChangeQuestion={(change)=>{
         this.props.dispatch(changeQuestion(this.props.currentQuestion, change))
       }}//accion chanqueQuestion
       onSubmit={()=>{this.props.dispatch(submit(this.props.questions))}}
       questionsLength ={this.props.questions.length} // cantidad de preguntas,,, accion submit
       onReset={()=>{this.props.dispatch(initQuestions(this.props.questions));this.downloadQuestions()}}
       goBack={()=>{this.props.navigation.goBack()}}
       /> 

      
       
</View>
   );
   }
 }

 
function mapStateToProps(state) {
 return {
 ...state
 };
}

export default connect(mapStateToProps)(MainScreen);