import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Intro = () => {
    return (
        <View>
            <Text>Entrer votre nom pour continuer</Text>
            <TextInput/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Intro;
