import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import NoteItem from './components/NoteItem';
import NoteAdder from './components/NoteAdder';

export default function App() {
  const [notes, setNotes] = useState([]);

  const addNoteHandler = newNote => {
    console.log("processing note: " + newNote);
    setNotes([...notes, { key: Math.random().toString(), value: newNote }])
    // setNotes(notes => [...notes, newNote]) - teoretycznie to powyżej może zaciągnąć nieaktualną listę
    console.log("note successfully added to the list");
  }

  const removeNoteHandler = noteKey => {
    console.log("removing note: " + noteKey);
    setNotes(notes => {
      return notes.filter((note) => note.key != noteKey)
    })
    console.log("note successfully removed");
  }

  return (
    <View style={styles.mainView}>
      <NoteAdder onAddNote={addNoteHandler} />

      {notes.length ?   // wyświetlanie listy notatek lub komunikatu o ich braku
        <View style={{flex: 1}}>
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
          <Text style={{textAlign: 'center', paddingVertical: 15}}> Aby usunąć element z listy, przytrzymaj go przez 3 sekundy. </Text>
        </View>
        :
        <View title='empty list feedback' style={{ padding: 30, backgroundColor: '#eeeee4' }}>
          <Text style={{textAlign: 'center'}}> Lista jest pusta. Możesz dodać do niej elementy powyżej. </Text>
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
