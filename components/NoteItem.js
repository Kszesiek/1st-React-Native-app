import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

const NoteItem = props => {
    return (
        <TouchableHighlight
        activeOpacity={0.65}
        underlayColor={'#dad1b3'}
        onLongPress={() => props.onDelete(props.noteKey)}>
            <View style={{backgroundColor: "#d5c5a3"}}>
                <Text style={styles.noteListItem}>{props.value}</Text>
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