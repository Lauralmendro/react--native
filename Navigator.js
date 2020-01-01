import React from 'react';

import { StackNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import StartScreen from './StartScreen';

export const Navigator = new StackNavigator({
	Main: {
		screen: MainScreen
	},
	Start: {
		screen: StartScreen
	}
},{
	initialRouteName: "StartScreen",
	headerMode: 'none'
});


class Nav extends React.Component {
	render() {
		return (
			<Navigator />
		);
	}
}
export default Nav;