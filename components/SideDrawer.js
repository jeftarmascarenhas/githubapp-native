import React, { Component } from 'react';
import { DrawerItems } from 'react-navigation';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class SideDrawer extends Component {
  render() {
    return (
      <View style={styles.drawer}>
        <DrawerItems {...this.props} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
});