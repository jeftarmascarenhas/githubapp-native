import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
const iconFollwers = (<Icon name="rocket" size={30} color="#900" />);

export default class FormGetGithubUser extends Component {
  render() {
    return (
      <View>
        <View style={styles.containerForm}>
          <TextInput
            placeholderTextColor="#FFF"
            autoCapitalize="none"
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Seu Usuário"
            style={styles.input}
            value={this.props.newUserText}
            onChangeText={this.props.onChangeUserText}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.props.getInfosGithubUser}
          >
            <Text style={styles.textButton} >Pesquisar {iconFollwers} </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

FormGetGithubUser.propTypes = {
  newUserText: PropTypes.string,
  onChangeUserText: PropTypes.func,
  getInfosGithubUser: PropTypes.func,
};

const styles = StyleSheet.create({
  containerForm: {
    flexDirection: 'row',
    backgroundColor: '#333',
    height: 50,
    marginTop: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    padding: 5,
    color: '#FFF',
  },
  input: {
    flex: 2,
    color: '#FFF',
    fontSize: 13,
    borderBottomWidth: 1,
    borderColor: '#f9f9f9',
  },
});