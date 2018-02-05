import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Platform,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Header from '../components/common/Header';
import Repo from '../components/Repo';
import NewRepoModal from '../components/NewRepoModal';

export default class FavoritesRepoScene extends Component {

  state = {
    modalVisible: false,
    repos: [],
  };

  static navigationOptions = {
    headerTitle: 'Favorites',
    headerRight: (
      <Button
        onPress={() => alert('This is Button')}
        title="Info"
        color="#000"
      />
    ),
  };

  async componentDidMount() {
    const repos = JSON.parse(await AsyncStorage.getItem('@AppGithub:repositories')) || [];
    this.setState({ repos });
  }

  addRepo = async (newRepoText) => {
    const repoCall = await fetch(`http://api.github.com/repos/${newRepoText}`);
    const response = await repoCall.json();
    const repository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login,
    };

    this.setState({
      modalVisible: false,
      repos: [
        ...this.state.repos,
        repository,
      ],
    });
    await AsyncStorage.setItem('@AppGithub:repositories', JSON.stringify(this.state.repos)); 
  };

  render() {
    return (
      <View style={styles.container} >
        <Header title={'Favorites repositories'}>
          <TouchableOpacity onPress={() => {
              this.setState({ modalVisible: true })
            }}>
            <Text style={styles.headerButton} >+</Text>
          </TouchableOpacity>
        </Header>

        <ScrollView contentContainerStyle={styles.repoList} >
          {
            this.state.repos.map(item => 
              <Repo
                key={item.id}
                data={item}
              />
            )
          }
        </ScrollView>
        <NewRepoModal
          onCancel={() => this.setState({ modalVisible: false })}
          onAdd={this.addRepo}
          visible={this.state.modalVisible}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  repoList: {
    padding: 20,
  },
})
