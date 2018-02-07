import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

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
            onPress={() => alert('Title', 'Message')}
          >
            <Text style={styles.textButton} >Pesquisar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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