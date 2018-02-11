import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  PixelRatio,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
const iconRemove = (<Icon name="md-trash" size={25} color="#999" />);

export default class Repo extends Component {
  render() {
    const  { data } = this.props;
    return (
      <View style={styles.repo} >
        <Image
          style={styles.repoImage}
          source={{ uri: data.thumbnail }}
        />
        <View style={styles.repoInfo}>
          <Text style={styles.repoTitle}>{data.title}</Text>
          <Text style={styles.repoAuthor}>{data.author}</Text>
          <Text style={styles.repoAuthor}>
            Stars: {data.stargazers_count} Forks: {data.forks_count}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => alert('Não Implementados.')}>{iconRemove}</TouchableOpacity>
        </View>
      </View>
    );
  }
}

Repo.propTypes = {
  data: PropTypes.object
}

const styles = StyleSheet.create({  
  repo: {
    padding: 20,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1 / PixelRatio.get(),
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#222',
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
    color: '#FFF',
  },
  repoAuthor: {
    fontSize: 12,
    color: '#FFF',
  },
})