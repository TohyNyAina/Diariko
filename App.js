import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Intro from './app/screens/Intro';


export default function App() {
  const findUser = async () => {
    const result = await AsyncStorage.alignItems('user');
    console.log(result);
  };

  useEffect(() => {
    findUser()
  }, []);

  return <Intro/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});