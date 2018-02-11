import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

export default class NewRepoModal extends Component {
  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => this.props.closeModal()}
      >
        <View style={styles.modalContainer} >
          <View style={styles.boxContainer} >
            <Text style={styles.textModal}>Adicionar Repositório</Text>
            <TextInput
              autoFocus
              placeholderTextColor="#FFF"
              autoCapitalize="none"
              style={styles.boxInput}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="organização/repositório"
              value={this.props.newRepoText}
              onChangeText={this.props.onChangeNewRepo}
            />
            <View style={styles.buttonContainer} >
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={this.props.onCancel}
              >
                <Text style={styles.textButton} >Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.submitButton]}
                onPress={() => this.props.onAdd(this.props.newRepoText)}
              >
                <Text style={styles.textButton} >Adicionar</Text>

              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

NewRepoModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  closeModal: PropTypes.func,
  onChangeNewRepo: PropTypes.func.isRequired,
  newRepoText: PropTypes.string,
  visible: PropTypes.bool,
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    padding: 20,
    backgroundColor: '#444',
    alignItems: 'center',
    width: 280,
  },
  boxInput: {
    alignSelf: 'stretch',
    marginTop: 10,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#DDD',
    height: 40,
    borderRadius: 3,
  },
  buttonContainer: {
    marginTop: 30,
    height: 40,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  cancelButton: {
    backgroundColor: '#999',
    marginRight: 5,
  },
  submitButton: {
    backgroundColor: '#f1d303',
  },
  textModal: {
    color: '#FFF',
  },
  textButton: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 12,
  },
});