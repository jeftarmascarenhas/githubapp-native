import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import BackgroundImage  from '../common/BackgroundImage';

export default class InfoHeader extends Component {
  render() {
    return (
      <View style={styles.profile}>
        <BackgroundImage
          style={{
            width: '100%',
            justifyContent: 'center',  
          }}
        >
          <View style={styles.profileInfo}>
            <Image
              style={styles.avatar}
              source={{ uri: this.props.thumbnail }}
            />
            <Text style={styles.profileName}>{this.props.name}</Text>
          </View>
        </BackgroundImage>
      </View>
    )
  }
}

InfoHeader.propTypes = {
  thumbnail: PropTypes.string,
  name: PropTypes.string,
}

const styles = StyleSheet.create({
  profileInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: '100%',
    height: 180,
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    color: '#FFF',
    fontSize: 18,
  },
});