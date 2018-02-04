import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Repo from './components/Repo';
import NewRepoModal from './components/NewRepoModal';

export default class App extends Component {
    state = {
      modalVisible: false,
      repos: [],
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
        <View style={styles.header} >
          <Text style={styles.headerText} >Mini App Github</Text>
          <TouchableOpacity onPress={() => {
            this.setState({ modalVisible: true })
          }}>
            <Text style={styles.headerButton} >+</Text>
          </TouchableOpacity>
        </View>

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
  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  repoList: {
    padding: 20,
  },
});
