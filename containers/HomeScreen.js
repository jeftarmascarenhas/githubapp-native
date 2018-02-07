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
    drawerLabel: 'Home',
    color: '#fff',
  };
  menuOpen = () => {
    this.props.navigation.navigate('DrawerOpen');
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title="Home" menu={this.menuOpen} />
        <InfosGithubUser />
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
});