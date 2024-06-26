import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/colors'

const RoundIconBtn = ({antIconName, size, color}) => {
    return <AntDesign 
                name={antIconName} 
                size={size || 24} 
                color={color || colors.LIGHT} 
            />
}

const styles = StyleSheet.create({
    container: {}
})

export default RoundIconBtn;
