import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../components/common/Header';
import InfosGithubUser from '../components/home/InfosGithubUser';
import FormGetGithubUser from '../components/home/FormGetGithubUser';

export default class HomeScene extends Component {
  
  state = {
    newUserText: '',
    infosDataUser: {
      followers: 0,
      following: 0,
      public_repos: 0,
      thumbnail: null,
      name: '',
    },
  };

  static navigationOptions = {
    drawerLabel: 'Home',
    color: '#fff',
  };

  getInfosGithubUser = async () => {
    const urlUser = `http://api.github.com/users/${this.state.newUserText}`;
    const infoCall = await fetch(urlUser);
    const infoResponse = await infoCall.json();
    const infosDataUser = {
      followers: infoResponse.followers,
      following: infoResponse.following,
      public_repos: infoResponse.public_repos,
      thumbnail: infoResponse.avatar_url,
      name: this.state.newUserText,
    };
    this.setState({ infosDataUser });
  }
  
  menuOpen = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  onChangeUserText = (newUserText) => {
    this.setState({ newUserText });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Home"
          menu={this.menuOpen}
        />
        <FormGetGithubUser
          onChangeUserText={this.onChangeUserText}
          getInfosGithubUser={this.getInfosGithubUser}
        />
        <InfosGithubUser
          infosDataUser={this.state.infosDataUser}
        />
        <Text></Text>
      </View>
    );
  }
}

HomeScene.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
});