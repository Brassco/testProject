import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailsTextRow = ({title, children}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}:
            </Text>
            <Text style={styles.text}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 6,
        borderBottomColor: "#111",
        borderBottomWidth: 2,
        paddingBottom: 5,
        paddingTop: 5,
    },
    title: {
        fontWeight: "600",
        fontSize: 20,
        marginRight: 6,
    },
    text: {
        fontWeight: "400",
        fontSize: 18,
    }
})

export default DetailsTextRow;