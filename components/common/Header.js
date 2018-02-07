import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

export default class Header extends Component {

  render() {
    return (
      <View style={styles.header} >
        {<TouchableOpacity
            style={styles.menuOpen}
            onPress={() => this.props.menu()}
          >
            <Text style={styles.menuText} >Menu</Text>
          </TouchableOpacity>
        }
        <Text style={styles.headerText} >{this.props.title}</Text>
        {this.props.children && this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#191919',
    borderBottomWidth: 1,
    borderColor: '#f1d303',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  menuOpen: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  menuText: {
    color:'#FFF',
    fontSize: 13,
  },
});