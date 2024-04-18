import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

const OutlinedButton = ({ title, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isSelected && styles.selectedButton]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, isSelected && styles.selectedButtonText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const BottomModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState('a');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleButtonPress = (button) => {
    setSelectedButton(button);
    // You can update the state or perform any other actions here
    console.log("Selected Button:", button);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openModal}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <View style={{flexDirection:"row",padding:1}}>
            <Text>Wednesday,17 january2024                                    </Text>
            <Image
                style={{height:16,width:16}}
                resizeMode="cover"
                source={require("../assets/receiptedit1.png")}
              />
            </View>
            <Text style={{paddingBottom:25}}>Choose your visit time</Text>
            <View style={styles.buttonContainer}>
              <OutlinedButton
                title="Button A"
                isSelected={selectedButton === 'a'}
                onPress={() => handleButtonPress('a')}
              />
              <OutlinedButton
                title="Button B"
                isSelected={selectedButton === 'b'}
                onPress={() => handleButtonPress('b')}
              />
            </View>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonM: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonTextM: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  modalContainerM: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContentM: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
  },
  buttonContainerM: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonM: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    borderWidth: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,                                                                                                                                                           
    borderRadius: 5,
  },
  buttonTextM: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  selectedButtonM: {
  },
  selectedButtonTextM: {
    color: 'blue',
  },
  closeButtonM: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});

export default BottomModal;
