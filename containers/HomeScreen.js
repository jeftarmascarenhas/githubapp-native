import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import Header from '../components/common/Header';
import InfosGithubUser from '../components/home/InfosGithubUser';
import FormGetGithubUser from '../components/home/FormGetGithubUser';

export default class HomeScene extends Component {
  
  state = {
    newUserText: '',
  };

  static navigationOptions = {
    drawerLabel: 'Home',
    color: '#fff',
  };
  
  menuOpen = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  onChangeUserText = (newUserText) => {
    this.setState({
      newUserText,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Home"
          menu={this.menuOpen}
        />
        <FormGetGithubUser

        />
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