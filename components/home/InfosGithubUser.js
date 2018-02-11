import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import InfoHeader from './InfoHeader';
import InfoListUser from './InfoListUser';

export default class InfosGithubUser extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <InfoHeader
            thumbnail={this.props.infosDataUser.thumbnail}
            name={this.props.infosDataUser.name}
          />
          <InfoListUser
            followers={this.props.infosDataUser.followers}
            following={this.props.infosDataUser.following}
            public_repos={this.props.infosDataUser.public_repos}
            public_gists={this.props.infosDataUser.public_gists}
          />
        </ScrollView>
      </View>
    );
  }
}

InfosGithubUser.propTypes = {
  infosDataUser: PropTypes.shape({
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    public_repos: PropTypes.number,
    public_gists: PropTypes.number,
  }),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});