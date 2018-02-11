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
    infosDataUser: {},
    loadOpen: false,
  };

  static navigationOptions = {
    drawerLabel: 'Home',
    color: '#fff',
  };

  getInfosGithubUser = async () => {
    const urlUser = `http://api.github.com/users/${this.state.newUserText}`;
    this.setState({ loadOpen: true, });
    const infoCall = await fetch(urlUser);
    const infoResponse = await infoCall.json();
    const infosDataUser = {
      followers: infoResponse.followers,
      following: infoResponse.following,
      public_repos: infoResponse.public_repos,
      public_gists: infoResponse.public_gists,
      thumbnail: infoResponse.avatar_url,
      name: this.state.newUserText,
    };
    this.setState({ infosDataUser, loadOpen: false, });
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
          style={styles.formGit}
          onChangeUserText={this.onChangeUserText}
          getInfosGithubUser={this.getInfosGithubUser}
        />
        {this.state.loadOpen && <View style={styles.loading} >
          <Text style={styles.loadingText}>Conectando...</Text>
        </View>}
        {this.state.infosDataUser.name && <InfosGithubUser
          infosDataUser={this.state.infosDataUser}
        />}
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
    backgroundColor: '#191919',
  },
  loading: {
    alignItems: 'center',
    padding: 10,
  },
  loadingText: {
    color: '#FFF',
    fontSize: 16,
  },
});