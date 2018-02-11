import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

export default class InfoListUser extends Component{
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={[styles.box, styles.boxBorder]}>
          <View style={styles.textLabel}>
            <Text style={styles.whiteColor}>Followers</Text>
          </View>
          <Text style={styles.whiteColor}>{this.props.followers}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.whiteColor}>Following</Text>
          <Text style={styles.whiteColor}>{this.props.following}</Text>
        </View>
        <View style={[styles.box, styles.boxBorder]}>
          <Text style={styles.whiteColor}>Public Repos</Text>
          <Text style={styles.whiteColor}>{this.props.public_repos}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.whiteColor}>Public Gists</Text>
          <Text style={styles.whiteColor}>{this.props.public_gists}</Text>
        </View>
      </View>      
    );
  }
}

InfoListUser.propTypes = {
  followers: PropTypes.number,
  following: PropTypes.number,
  public_repos: PropTypes.number,
  public_gists: PropTypes.number,
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '48%',
    height: 80,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxBorder: {
    borderColor: '#282828',
    borderRightWidth: 1,
  },
  whiteColor: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  textLabel: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});