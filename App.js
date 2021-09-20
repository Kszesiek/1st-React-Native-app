import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList } from 'react-native';

export default function App() {
  const [newNote, setNote] = useState('')
  const [notes, setNotes] = useState([])

  /*
  function newNoteHandler( enteredText ) {
    setNote(enteredText);
  } */
  const newNoteHandler = (enteredText) => {
    setNote(enteredText)
  }
  const addNoteHandler = () => {
    console.log("processing note: " + newNote);
    setNotes([...notes, { key: Math.random().toString(), value: newNote }])
    // setNotes(notes => [...notes, newNote]) - teoretycznie to powyżej może zaciągnąć nieaktualną listę
    console.log("note successfully added to the list");
  }

  /*
  function textChanger() {
    if (defaultText == "bajo jajo")
      changeDefaultText("pryncypałki");
    else if (defaultText == "pryncypałki")
    changeDefaultText("print('dupa');");
    else
      changeDefaultText("bajo jajo");
  }
  */

  return (
    <View style={styles.mainView}>
      <View title='input bar' style={styles.inputBar}>
        <View style={{ backgroundColor: "#aaa", padding: 3, flex: 1, }}>
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
          onPress={addNoteHandler}
        />
      </View>
      {notes.length ?
        <FlatList title='list of notes'
          style={{ backgroundColor: "#ceab69" }}
          data={notes}
          renderItem={itemData => (
            <View>
              <Text style={styles.noteListItem}>{itemData.item.value}</Text>
            </View>
          )}
        />
        :
        <View title='empty list feedback' style={{ padding: 30, backgroundColor: '#eeeee4', textAlign: 'center' }}>
          <Text> Lista jest pusta. Możesz dodać do niej elementy powyżej. </Text>
        </View>
      }

    </View>
    /*
    <View style={styles.mainView}>
      <Text>{defaultText}</Text>
      <Button title="Zmiana!" onPress={() => textChanger(self.Text)} />
      <StatusBar style="auto" />
    </View>
    */
  );
}

const styles = StyleSheet.create({
  mainView: {
    // flex: 1,
    backgroundColor: '#eee',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 30,
    paddingBottom: 100
  },
  inputBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 25,
    //margin: 10,
    //padding: 20,
  },
  noteListItem: {
    padding: 3,
    marginVertical: 5,
    backgroundColor: "#dfc183",
    borderColor: "#b98a3f",
    borderWidth: 1,
    marginHorizontal: 20,
  },
});
