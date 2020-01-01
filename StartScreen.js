import React from 'react';
import { Button, View, StatusBar, Image } from 'react-native';
import NavBar from './Navbar.js';
import { styles } from './styles/StyleSheet';

export default class StartScreen extends React.Component {

	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}

	onPress(){
		this.props.navigation.navigate('MainScreen');
	}
	render() {
		return (
			<View style={styles.startScreen}>
				<StatusBar hidden />
				<NavBar/>
				<View style={styles.startScreenContainer}>
					 <Image style = {styles.startImage} source = {require('./assets/icono.png')}/> 
					<Button color = '#9121C1' title= "Start" onPress = {this.onPress}/>
				</View>
				
			</View>
            );
        }
}
