import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Platform,
  TouchableOpacity,
  AsyncStorage,
  Alert
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
    drawerLabel: 'Favorites',
  };

  async componentDidMount() {
    const repos = JSON.parse(await AsyncStorage.getItem('@AppGithub:repositories')) || [];
    this.setState({ repos });
  }

  addRepo = async () => {
    const repoCall = await fetch(`https://api.github.com/repos/${this.state.newRepoText}`);
    const response = await repoCall.json();
    const repository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login,
      stargazers_count: response.stargazers_count,
    };
    

    this.setState({
      modalVisible: false,
      repos: [
        ...this.state.repos,
        repository,
      ],
      newRepoText: '',
    });
    await AsyncStorage.setItem('@AppGithub:repositories', JSON.stringify(this.state.repos)); 
  };

  closeModal = () => {
    this.setState({
      visible: false,
    });
  }

  onChangeNewRepo = (newRepoText) => {
    this.setState({ newRepoText });
  }
  menuOpen = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={styles.container} >
        <Header title={'Favorites repositories'} menu={this.menuOpen}>
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
                newRepoText={this.state.newRepoText}
              />
            )
          }
        </ScrollView>
        <NewRepoModal
          onCancel={() => this.setState({
            modalVisible: false,
            newRepoText: '',
          })}
          value={this.state.newRepoText}
          onChangeNewRepo={this.onChangeNewRepo}
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
