import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground
} from 'react-native';
import PropTypes from 'prop-types';

export default class BackgroundImage extends Component {

  render() {
    const  { style } = this.props;
    return (
      <ImageBackground
        style={[{...style}, styles.backgroundImage]}
        source={require('./bg-user.jpg')}
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}

BackgroundImage.propTypes = {
  style: PropTypes.object,
  children: PropTypes.element,
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});