import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Registration from './src/Screens/Registration';
import React from 'react';
import Ecommerce from './src/Screens/Ecommerce';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Registration /> */}
      <Ecommerce />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
