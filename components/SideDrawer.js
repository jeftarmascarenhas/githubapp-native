import React, { Component } from 'react';
import { DrawerItems } from 'react-navigation';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const GithubIcon = (<Icon name="logo-github" size={30} color="#FFF" />)

export default class SideDrawer extends Component {
  render() {
    return (
      <View style={styles.drawer}>
        <View style={styles.sideHeader}>
          <View style={styles.sideHeaderLogo}>{GithubIcon}</View>
          <Text style={styles.sideHeaderText}>
           GitHub App
          </Text>
        </View>
        <DrawerItems {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sideHeader: {
    backgroundColor: '#111',
    padding: 10,
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },
  sideHeaderLogo: {
    marginRight: 10,
  },
  sideHeaderText: {
    color: '#FFF',
  },
  drawer: {
    flex: 1,
  },
});