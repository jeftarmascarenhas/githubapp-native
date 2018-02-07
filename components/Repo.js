import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  PixelRatio
} from 'react-native';

export default class Repo extends Component {
  render() {
    return (
      <View style={styles.repo} >
        <Image
          style={styles.repoImage}
          source={{ uri: this.props.data.thumbnail }}
        />
        <View style={styles.repoInfo}>
          <Text style={styles.repoTitle}>{this.props.data.title}</Text>
          <Text style={styles.repoAuthor}>{this.props.data.author}</Text>
          <Text style={styles.repoAuthor}>{this.props.data.stargazers_count}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  repo: {
    padding: 20,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1 / PixelRatio.get(),
    marginBottom: 20,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  repoImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  repoInfo: {
    marginLeft: 10,
  },
  repoTitle: {
    fontWeight: 'bold',
    color: '#333',
  },
  repoAuthor: {
    fontSize: 12,
    color: '#999',
  },
})