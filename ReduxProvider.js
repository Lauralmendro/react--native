import { Provider } from "react-redux";
import GlobalState from "./reducers";
import { createStore } from "redux";
import React from "react";
import { questions } from "../assets/mock-data";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import MainScreen from '../MainScreen';
import StartScreen from '../StartScreen';


const AppNavigator = createStackNavigator({
	MainScreen: { 
		screen: MainScreen 
	},
	StartScreen: {
		screen: StartScreen
	}
},{
	initialRouteName: 'StartScreen',
	headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator);

export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      score: 0,
      finished: false,
      currentQuestion: 0,
      questions: [...questions]
    };
    this.store = this.configureStore();
  }
  render() {
    return (
      <Provider store={this.store}>
      
      <AppContainer />
        
      </Provider>
    );
  }
  configureStore() {
    return createStore(GlobalState, this.initialState);
  }
}