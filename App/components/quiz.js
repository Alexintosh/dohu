/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import _ from 'lodash';
import Score from './score'
import EndMatch from './end-match.js';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


class Quiz extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      score: 0,
      qCounter: 0,
      incorrectAnswers: []
    };
  }

  checkAnswer(answer){
    if( this.props.data.length > this.state.qCounter+1){
      var score = this.state.score;
      var incorrectAnswers = this.state.incorrectAnswers;
      let correctAns = this.props.data[this.state.qCounter].correct;

      if(correctAns == answer.id){
        score++;
      } else {
        incorrectAnswers.push({
          selected: answer.answer,
          correct: _.find(this.props.data[this.state.qCounter].answers, (n) => {
            return n.id == correctAns;
          }).answer
        });

        console.log(_.last(incorrectAnswers));
      }
      this.setState({ qCounter: ++this.state.qCounter, score: score, incorrectAnswers: incorrectAnswers});
    } else {
      this.props.navigator.push({
          component: EndMatch,
          name: 'End Match',
          passProps: {
              score: this.state.score,
              questionsCount: this.props.questionsCount,
              player: this.props.player,
              incorrectAnswers: this.state.incorrectAnswers
          }
      });
    }
  }

  renderBtn(index){    
    var style = {
       flex: 1,       
       justifyContent: 'center'
    };

    var color;
    switch(index){
      case 0:
        color = "#67E09E";
        break;
      case 1:
        color = "#F16C7A";
        break;
      case 2:
        color = "#648FDF";
        break;
      case 3:
        color = "#FF89B3";
        break;
      default:
        break;
    }

    style.backgroundColor = color;
    return style;
  }

  renderAnswers(){
    return this.props.data[this.state.qCounter].answers.map( (ans, index) => {
      return (
        <TouchableHighlight
          key={ans.id}
          underlayColor="#aaa"
          style={this.renderBtn(index)} 
          onPress={this.checkAnswer.bind(this, ans)}>
          <Text style={styles.label}>{ans.answer}</Text> 
        </TouchableHighlight>
      );
    });
  }
  
  render() {
    var img = this.props.images_uri + this.props.data[this.state.qCounter].image;
    console.log(img);
    //var _img = './images/easy/'+ this.props.data[this.state.qCounter].image;
    var answers = this.renderAnswers();
    return (
         <View style={styles.container}>
            <Image style={styles.image} source={{uri: img}} />
            {answers}
            <Score score={this.state.score}/>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
    padding: 10
  },
  image: {
    height: 400
  }
});

module.exports = Quiz;
