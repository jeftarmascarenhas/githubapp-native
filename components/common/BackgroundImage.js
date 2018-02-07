import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,  
} from 'react-native';

export default class BackgroundImage extends Component {

  render() {
    return (
      <Image
        source={require('../../images/bg-user.jpg')}
      >
        {this.props.children}
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});