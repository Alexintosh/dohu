import React, { Component } from 'react';
import _ from 'lodash';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  Animated,
  Easing
} from 'react-native';

class EndMatch extends Component {

    constructor(props) {
      super(props);
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this._animatedValue = new Animated.Value(0);
      this._textAnimatedValue = new Animated.Value(0);
      this.state = {
        dataSource: ds.cloneWithRows(this.props.incorrectAnswers),
      };
    }

    startAgain() {
        this.props.navigator.popToTop();
    }

    componentDidMount() {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(this._animatedValue, {
          toValue: 200,
          duration: 1000
        }),
        Animated.timing(this._animatedValue, {
          toValue: 100,
          duration: 2000
        })
      ]).start(); 

      Animated.sequence([            // spring to start and twirl after decay finishes    
        Animated.timing(this._textAnimatedValue, {
            toValue: 80,
            duration: 500,
            easing: Easing.elastic(1)
        })
      ]).start();
    }

    renderWrongAnswers(){
      return(
       <ListView
          dataSource={this.state.dataSource}
          renderHeader={() => {
              return( 
                  <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderWrong}>Wrong</Text>
                    <Text style={styles.tableHeaderRight}>Right</Text>
                  </View>
              );
            }
          }
          renderRow={(rowData) => {
              return( 
                  <View style={styles.row}>
                    <Text style={styles.red}>{rowData.selected}</Text>
                    <Text style={styles.green}>{rowData.correct}</Text>
                  </View>
              );
            }
          }
        /> 
      );
    }

    render(){
        var incorrectAnswers = this.renderWrongAnswers();
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.props.player}! Your score is :
                </Text>
                <Animated.Text style={[styles.textScore, {fontSize: this._textAnimatedValue}]} >
                  {this.props.score} / {this.props.questionsCount}
                </Animated.Text>
                {incorrectAnswers}
                <TouchableHighlight style={styles.button} onPress={this.startAgain.bind(this)} underlayColor="#ccc">
                    <Text style={styles.buttonText}>Play Again</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

EndMatch.propTypes = {
    score: React.PropTypes.number.isRequired,
    questionsCount: React.PropTypes.number.isRequired,
    player: React.PropTypes.string.isRequired
};

var styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#8CD5F4',
    },
    tableHeader: {
        paddingTop:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerLabel: {
      width: 100,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    tableHeaderWrong: {
      color:'#000',
      fontSize: 22,
      marginLeft:50
    },
    tableHeaderRight: {
      color:'#FFF',
      fontSize: 22,
      marginRight:50
    },
    item: {
        backgroundColor: '#CCC',
        margin: 10,
        width: 100,
        height: 100
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 100,
        marginBottom: 40,
        fontFamily: 'Helvetica',
    },
    textScore: {
        fontFamily: "MODERNA",
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 30,
        marginBottom: 40,
    },
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      margin: 5
    },
    red: {
      color:'#F16C7A',
      fontSize: 15,
    },
    green: {
      color:'#67E09E',
      fontSize: 15,
    },
    button: {
        height: 60,
        backgroundColor: '#5cb860',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
    }
});

module.exports = EndMatch;

