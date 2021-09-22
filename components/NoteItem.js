import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

const NoteItem = props => {
    const [noteOpacity, setNoteOpacity] = useState(0.65);
        return (
        <TouchableHighlight
            activeOpacity={0.65}
            underlayColor={'#dad1b3'}
            onLongPress={() => props.onDelete(props.noteKey)}
            onPress={() => {
                if (noteOpacity == 0.65) {
                    setNoteOpacity(0.15);
                    console.log("Opacity changed to " + 0.15);
                } else {
                    setNoteOpacity(0.65)
                    console.log("Opacity changed to " + 0.65);
                }
            }
            }>
            <View style={{ backgroundColor: "#d5c5a3" }}>
                <Text style={[styles.noteListItem, {opacity: noteOpacity}]}>{props.value}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    noteListItem: {
        padding: 3,
        marginVertical: 5,
        backgroundColor: "#dfc183",
        borderColor: "#b98a3f",
        borderWidth: 1,
        marginHorizontal: 20,
    },
});

export default NoteItem;