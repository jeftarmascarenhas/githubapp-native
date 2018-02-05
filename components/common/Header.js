import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

export default class Header extends Component {

  render() {
    return (
      <View style={styles.header} >
        <Text style={styles.headerText} >{this.props.title}</Text>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});