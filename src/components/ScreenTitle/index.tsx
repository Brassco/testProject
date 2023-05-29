import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScreenTitle = ({children}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: "500",
        fontSize: 24,
    }
})

export default ScreenTitle;