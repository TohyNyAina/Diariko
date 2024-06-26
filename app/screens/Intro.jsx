import React from 'react';
import { StyleSheet, View, Text, TextInput, StatusBar, Dimensions } from 'react-native';
import colors from '../misc/colors'


const Intro = () => {
    return (
        <>
        <StatusBar hidden/>
        <View style={styles.container}>
            <Text>Entrer votre nom pour continuer</Text>
            <TextInput style={styles.textInput}/>
        </View>
        </>
    );
}

const {width} = Dimensions.get('window');
console.log(width);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
    }
});

export default Intro;
