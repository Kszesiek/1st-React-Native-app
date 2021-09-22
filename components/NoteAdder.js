import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Touchable, Text, TouchableOpacity } from 'react-native';

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
    <Modal visible={props.visible} transparent={true} animationType='slide' >
      <View style={{ flex: 1, backgroundColor: 'black', opacity: 0 }}>
        <TouchableOpacity onPress={props.onCancelAddingNote} style={{ width: '100%', height: "100%" }} />
      </View>
      <View title='input bar' style={styles.inputBar}>
        <View width={'80%'}>
          <View style={{ backgroundColor: "#bbb", padding: 3, marginBottom: 10, width: '100%' }}>
            <TextInput
              placeholder="Wprowadź treść notatki..."
              onChangeText={newNoteHandler}
              value={newNote}
              style={{ opacity: 0.9, color: 'black', }}
            />
          </View>
          <View style={styles.buttons}>
            <View style={{ flex: 1 }} />
            <Button
              title="Anuluj"
              color='red'
              onPress={() => {
                props.onCancelAddingNote();
                setNote('');
              }}
            />
            <View width={10} />
            <Button
              title="Dodaj notatkę"
              onPress={() => {
                props.onAddNote(newNote);
                setNote('');
              }}
            />
          </View>
        </View>

      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({
  inputBar: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ECDDAD',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});

export default NoteAdder;