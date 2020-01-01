import React from 'react';
import {  Text, View } from 'react-native';
import { styles } from "./styles/StyleSheet";

 class Navbar extends React.Component{
    render(){
    return ( 
    <View style={styles.nav}>
     <Text>My Quiz</Text>
      </View>
        );
    }
}
export default Navbar;