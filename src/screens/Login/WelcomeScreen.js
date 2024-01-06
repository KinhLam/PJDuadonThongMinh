import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Platform, ActivityIndicator } from 'react-native';
import { useNavigation, useIsFocused  } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('SelectLoginScreen');
    }, 2000);

    // Clear the timeout if the component unmounts or loses focus
    return () => {
      clearTimeout(timer);
    };
  }, [navigation, isFocused, ]);

  // Listen for changes in navigation state
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      // Prevent going back to WelcomeScreen when the back button is pressed
      if (!isLoading && navigation.isFocused()) {
        e.preventDefault();
      }
    });

    // Cleanup the subscription when the component is unmounted
    return unsubscribe;
  }, [navigation, isLoading]);

  return (
    <Pressable style={styles.container} android_ripple={{ color: "#289c0e" }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SMARTCAR</Text>
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/home/Illustraton.png')}
          style={styles.logo}
        />
      </View>

      {isLoading ? (
        <ActivityIndicator style={styles.loadingIndicator} color="#FFFFFF" size="large" />
      ) : null}
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
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -20, 
    marginTop: -20,  
  },
});

export default WelcomeScreen;
