import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Button,
} from 'react-native';

export default class Header extends Component {

  render() {
    return (
      <View style={styles.header} >
        {this.props.menu && <Button
          title="Menu"
          color="#FFF"
          onPress={() => this.props.menu()}
        />}
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
    backgroundColor: '#1c1c1c',
    borderBottomWidth: 1,
    borderColor: '#f1d303',
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