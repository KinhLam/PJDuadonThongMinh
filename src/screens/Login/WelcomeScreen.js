import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleTaixePress = () => {
    navigation.navigate('ScrennsDriver');
  };

  const handleKhachHangPress = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <Pressable style={styles.container} android_ripple={{color: "#289c0e"}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SMARTCAR</Text>
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/home/Illustraton.png')}
          style={styles.logo}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23AE28',
    overflow: Platform.OS === "android" ? "hidden" : "visible",

  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 421.57,
    height: 305,
    marginTop: '57%'
  },
  header: {
    marginTop: '60%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  buttonContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  leftButtonContainer: {
    marginRight: 5,
    marginLeft: 20,
    marginHorizontal: 10,
  },
  rightButtonContainer: {
    marginLeft: 5,
    marginHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextLeft: {
    fontSize: 18,
    fontWeight: '300',
    color: '#221918',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
  },
});

export default WelcomeScreen;
