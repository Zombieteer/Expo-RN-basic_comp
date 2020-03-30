import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export const todoItem = ({ item, pressHandler }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
            <TouchableOpacity style={styles.cross} onPress={() => { pressHandler(item.key) }}>
                <MaterialIcons name='delete' size={18} color='#333' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 7,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        padding: 16
    },
    cross: {
        width: 25,
        justifyContent: 'center'
    }
})

export default todoItem