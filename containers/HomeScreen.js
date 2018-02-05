import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import Header from '../components/common/Header';
import InfosGithubUser from '../components/home/InfosGithubUser';

export default class HomeScene extends Component {

  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View>
        <Header title="Home"/>
        <InfosGithubUser />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});