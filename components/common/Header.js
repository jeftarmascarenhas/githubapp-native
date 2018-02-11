import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import PropTypes from  'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
const iconMenu = (<Icon name="ios-menu-outline" size={30} color="#FFF" />);

export default class Header extends Component {

  render() {
    return (
      <View style={styles.header} >
        {<TouchableOpacity
            style={styles.menuOpen}
            onPress={() => this.props.menu()}
          >
            <Text style={styles.menuText} >{iconMenu}</Text>
          </TouchableOpacity>
        }
        <Text style={styles.headerText} >{this.props.title}</Text>
        {this.props.children && this.props.children}
      </View>
    );
  }
}

Header.propTypes = {
  menu: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.element,
};

const styles = StyleSheet.create({
  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#191919',
    borderBottomWidth: 1,
    borderColor: '#f1d303',
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