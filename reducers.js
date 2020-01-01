import { combineReducers } from "redux";
import { QUESTION_ANSWER } from "./actions";
import { CHANGE_QUESTION } from "./actions";
import { SUBMIT } from "./actions";
import { INIT_QUESTIONS } from "./actions";
import { DOWNLOAD } from "./actions";

//definicion de los estados

function score(state = 0, action = {}) {
  switch (action.type) {
    case SUBMIT:
     const aciertos = action.payload.questions.map( (question)=>{                 
       var respuesta= question.userAnswer ? question.userAnswer :" ";
       return question.answer=== respuesta;
     });


     return aciertos.reduce(function(a,b){ return a+b});
     default:
       return state;
     }}









     
      //un map consiste en recorre un lista/array/ lo que sea en funcion de un parametro
      //en este caso recorremos las cuestions con un map analizando cada question
      //a cada question de question se le aplica lo que viene despues de => 
      //respuesta es igual a lo que escribe la persona y sino es ""
      //dentro del return se compara lo que deberia ser la respuesta correcta con la del usuario y si es true se establece un 1 y cuando es falso un 0


     

     //funcion magica de tal forma que coginedo todos el resultado de aciertos(PONGAMOS QUE ES [ 0 0 0 1 0 1])) devuelve la suma ( que seria 2)

    
 

function finished(state = false, action = {}) {
  switch (action.type) {
    case INIT_QUESTIONS:
      var newstate = false;
      return newstate;
    case SUBMIT:
      var newstate = true;
      return newstate;
    default:
      return state;
  }
  //Si se activa SUBMIT FINISHED ES TRUE Y SI NO FALSE
}
function currentQuestion(state = 0, action = {}) {
  switch (action.type) {
    case CHANGE_QUESTION:
        return (action.payload.change === 'Siguiente')  ? (++state) : (--state);
    case  INIT_QUESTIONS:
      return 0;
    default:
      return state;
  }
  //Hemos añadido un parametro change a la accion de changequestion ( al igual que questionasnwer tine un parametro asnwer)
  //De esta manera si change es == a siguiente el estado avanza y sino retrocede
}



function questions(state = [], action = {}) {
  switch (action.type) {
   case INIT_QUESTIONS:
     
      return state.map((question, i) => {
        return {
          ...question,
          userAnswer:
            action.payload.index === i
              ? action.payload.answer
              : ""
        };
      });
   
    case QUESTION_ANSWER: // esto lo daban hecho
      return state.map((question, i) => {
        return {
          ...question,
          userAnswer:
            action.payload.index === i
              ? action.payload.answer
              : question.userAnswer
        };
      });

      case DOWNLOAD:
        return action.payload.questions;

    default:
      return state;
  }
}

//nuestros estados o reducers
const GlobalState = combineReducers({
  score,
  finished,
  currentQuestion,
  questions
});
export default GlobalState;
