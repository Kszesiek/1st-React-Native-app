import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NoteAdder = props => {
  const [newNote, setNote] = useState('');

  /*
  function newNoteHandler( enteredText ) {
    setNote(enteredText);
  } */
  const newNoteHandler = (enteredText) => {
    setNote(enteredText)
  }

  return (
    <View title='input bar' style={styles.inputBar}>
      <View style={{ backgroundColor: "#bbb", padding: 3, flex: 1, }}>
        <TextInput
          placeholder="Wprowadź treść notatki..."
          onChangeText={newNoteHandler}
          value={newNote}
          style={{ opacity: 0.9, color: 'black' }}
        />
      </View>
      <View title='spacer' style={{ width: 10 }} />
      <Button
        title="Dodaj"
        onPress={() => props.onAddNote(newNote)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 25,
    //margin: 10,
    //padding: 20,
  },
});

export default NoteAdder;