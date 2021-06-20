import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredContent, setEnteredContent] = useState('');

  const titleHandler = textInput => {
    setEnteredTitle(textInput);
  };

  const contentHandler = textInput => {
    setEnteredContent(textInput);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredTitle, enteredContent);
    setEnteredTitle('');
    setEnteredContent('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Title"
          style={styles.input}
          onChangeText={titleHandler}
          value={enteredTitle}
        />
        <TextInput
          placeholder="Body Content"
          style={styles.input}
          onChangeText={contentHandler}
          value={enteredContent}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
