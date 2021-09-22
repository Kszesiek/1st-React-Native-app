import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

import NoteItem from './components/NoteItem';
import NoteAdder from './components/NoteAdder';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [isAddWindowActive, setAddWindowActive] = useState(false);

  const addNoteHandler = newNote => {
    setNotes([...notes, { key: Math.random().toString(), value: newNote }])
    // setNotes(notes => [...notes, newNote]) - teoretycznie to powyżej może zaciągnąć nieaktualną listę
    console.log("note " + newNote + " successfully added to the list");
    setAddWindowActive(false);
  }

  const removeNoteHandler = noteKey => {
    setNotes(notes => {
      return notes.filter((note) => note.key != noteKey)
    })
    console.log("note " + noteKey + " successfully removed");
  }

  const cancelAddingNoteHandler = () => {
    setAddWindowActive(false);
  }

  /*
  const switchAddWindowActive = () => {
    if (isAddWindowActive == true) {
      setAddWindowActive(false);
      console.log("hiding 'add new note' window");
    } else {
      setAddWindowActive(true);
      console.log("showing 'add new note' window");
    }
  }
  */
  console.log(notes);
  return (
    <View style={styles.mainView}>
      <View style={{ marginVertical: 20 }}>
        <Button title="Dodaj nową notatkę" onPress={() => setAddWindowActive(true)} />
      </View>

      <NoteAdder
        visible={isAddWindowActive}
        onAddNote={addNoteHandler}
        onCancelAddingNote={cancelAddingNoteHandler}
      />

      {notes.length ?   // wyświetlanie listy notatek lub komunikatu o ich braku
        <View style={{ flex: 1 }}>
          <View title='FlatList container, with top and bottom bars'>
            <View style={{ height: 10, backgroundColor: "#d5c5a3" }} />
            <FlatList title='list of notes'
              // style={{ backgroundColor: "#d5c5a3" }}
              data={notes}
              renderItem={itemData =>
                <NoteItem
                  noteKey={itemData.item.key}
                  onDelete={removeNoteHandler}
                  value={itemData.item.value}
                />
              }
            />
            <View style={{ height: 10, backgroundColor: "#d5c5a3" }} />
          </View>
          <View style={{ flex: 1, }} />
          <Text style={{ textAlign: 'center', paddingVertical: 15 }}> Aby usunąć element z listy, przytrzymaj go przez 3 sekundy. </Text>
        </View>
        :
        <View title='empty list feedback' style={{ padding: 30, backgroundColor: '#eeeee4' }}>
          <Text style={{ textAlign: 'center' }}> Lista jest pusta. Możesz dodać do niej elementy powyżej. </Text>
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
    flex: 1,
    backgroundColor: '#ede8d9',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
});
