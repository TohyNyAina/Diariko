import React from 'react';
import { StyleSheet, View, Text, TextInput, StatusBar, Dimensions } from 'react-native';
import colors from '../misc/colors'


const Intro = () => {
    return (
        <>
        <StatusBar hidden/>
        <View style={styles.container}>
            <Text style={styles.inputTitle}>Entrer votre nom pour continuer</Text>
            <TextInput placeholder='Entrer votre nom' style={styles.textInput}/>
        </View>
        </>
    );
}

const width = Dimensions.get('window').width - 50;
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
        width,
        height: 40,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 25,
    },
    inputTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 25,
    },
});

export default Intro;
