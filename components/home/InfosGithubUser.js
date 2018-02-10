import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

export default class InfosGithubUser extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.profile}>
            {this.props.infosDataUser.thumbnail && <Image
              style={styles.avatar}
              source={{ uri: this.props.infosDataUser.thumbnail }}
              />
            }
            {this.props.infosDataUser.thumbnail && <Text style={styles.profileName}>{this.props.infosDataUser.name}</Text>}
            {!this.props.infosDataUser.thumbnail &&  <Text style={styles.profileName}>Conectando ao github...</Text>}
          </View>
          {this.props.infosDataUser.thumbnail && <View style={styles.wrapper}>
            <View style={[styles.box, styles.boxBorder]}>
              <Text style={styles.whiteColor}>Followers</Text>
              <Text style={styles.whiteColor}>{this.props.infosDataUser.followers}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.whiteColor}>Following</Text>
              <Text style={styles.whiteColor}>{this.props.infosDataUser.following}</Text>
            </View>
            <View style={[styles.box, styles.boxBorder]}>
              <Text style={styles.whiteColor}>public_repos</Text>
              <Text style={styles.whiteColor}>{this.props.infosDataUser.public_repos}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.whiteColor}>public_repos</Text>
              <Text style={styles.whiteColor}>{this.props.infosDataUser.public_repos}</Text>
            </View>
          </View>}
        </ScrollView>
      </View>
    );
  }
}

InfosGithubUser.propTypes = {
  infosDataUser: PropTypes.oneOfType({
    thumbnail: PropTypes.string,
    followers: PropTypes.string,
    following: PropTypes.string,
    public_repos: PropTypes.string,
  }),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  profile: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  profileName: {
    color: '#FFF',
    fontSize: 16,
  },
  box: {
    width: '48%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxBorder: {
    borderColor: '#333',
    borderRightWidth: 1,
  },
  whiteColor: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});