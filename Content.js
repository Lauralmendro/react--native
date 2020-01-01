import React from "react";

import {  Text, View,Image,TextInput } from 'react-native';
import { styles } from "./styles/StyleSheet";


export default class Content extends React.Component {
  
    
  
  render() {
/* 
     let imgsrc="";
    if(this.props.question.attachment===undefined||this.props.question.attachment===null){
      imgsrc= "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1350441335.jpg";
    }else{
      imgsrc=this.props.question.attachment.url;
    }  */
    
    

    if (this.props.question === undefined) {
      return <Text>FIN DEL QUIZ: PRESS SUBMIT</Text>;
    } else {
      return (
        <View style={styles.content} >
        

          <View style={styles.content2}>

             <Image
              
              source={{uri:this.props.question.attachment.url}}
              style={{ width:400,height:300}}
            /> 

            <Text style={styles.pregunta}>
              {this.props.currentQuestion + 1} . {this.props.question.question}
            </Text>
        
            <TextInput style={styles.textInput} placeholder="Type here"
              value={this.props.question.userAnswer || ""}
              onChangeText={(text) => {
                this.props.onQuestionAnswer(text);
              }}
            />

            <View style={styles.autor}  >
              <Image style={styles.autorImg} source={{uri:this.props.question.author.photo.url}}  /> 
              <Text> {this.props.question.author.username}</Text>

            </View>


            <Text>
              Tips:
              {this.props.question.tips.length === 0 ? "No tips": this.props.question.tips.map(function(t, index) {
                  return <Text key={index}> {t} </Text>;
                })
                }
            </Text>


          </View>


        </View>
      );
    }
  }

}
