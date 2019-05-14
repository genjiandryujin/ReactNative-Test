import React, { Component } from 'react';
import { View,
  Animated,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager  } from 'react-native';

class Ball extends Component {
  
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 50, y: 300 }
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball}/>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
});

export default Ball;