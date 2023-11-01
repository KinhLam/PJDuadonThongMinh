import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/car.gif')}
        style={styles.logo}
      />
      <Text style={styles.title}>Chào mừng</Text>
      <Text style={styles.title}>đến SmartCar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#AFF5C3',
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black', // Màu chữ trắng
    flexWrap: 'wrap',
  },
});

export default WelcomeScreen;