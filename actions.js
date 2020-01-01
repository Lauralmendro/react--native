export const QUESTION_ANSWER = "QUESTION_ANSWER";
export const CHANGE_QUESTION = "CHANGE_QUESTION";
export const SUBMIT = "SUBMIT";
export const INIT_QUESTIONS = "INIT_QUESTIONS";
export const DOWNLOAD = "DOWNLOAD";

export function questionAnswer(index, answer) {
  return { type: QUESTION_ANSWER, payload: { index, answer } };
}
export function changeQuestion(index, change) {
  return { type: CHANGE_QUESTION, payload: { index, change } };
}

export function submit(questions) {
  return { type: SUBMIT, payload: { questions } };
}

export function initQuestions(questions) {
  return { type: INIT_QUESTIONS, payload: { questions } };
}

export function download(questions) {
  return { type: DOWNLOAD, payload: { questions } };
}



//Definicion de actions: literalmente una accion , 
//todad las cosas que pasan son funciones que pasan cuando yo hago algo.
//Para que esas funciones realmente hagan algo es necesario utilizar redux que es lo que modifica los estados que en este caso son :
 //finsihed ,score.....(los reducers)