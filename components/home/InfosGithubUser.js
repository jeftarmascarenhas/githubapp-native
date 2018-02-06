import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class InfosGithubUser extends Component {
  state = {
    followers: 0,
    following: 0,
    public_repos: 0,
    thumbnail: null,
    name: '',
  };

  async componentWillMount() {
    const infoCall = await fetch('http://api.github.com/users/jeftarmascarenhas');
    const infoResponse = await infoCall.json();
    this.setState({
      followers: infoResponse.followers,
      following: infoResponse.following,
      public_repos: infoResponse.public_repos,
      thumbnail: infoResponse.avatar_url,
      name: infoResponse.name,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.thumbnail && <View style={styles.profile}>
          <Image
            style={styles.avatar}
            source={{ uri: this.state.thumbnail }}
          />
          <Text>{this.state.name}</Text>
        </View>}
        <View style={styles.box}>
          <Text>Followers</Text>
          <Text>{this.state.followers}</Text>
        </View>
        <View style={styles.box}>
          <Text>Following</Text>
          <Text>{this.state.following}</Text>
        </View>
        <View style={styles.box}>
          <Text>public_repos</Text>
          <Text>{this.state.public_repos}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  box: {
    flex: 1,
    width: 100,
    height: 100,
    margin: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});