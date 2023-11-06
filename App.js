import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import LoginNumberScreen from './src/screens/LoginNumberScreen';
// import CustomIcon from './src/components/CustomIcon';
import IconBack from './src/components/IconBack';
import OTPScreen from './src/screens/OTPScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginNumberScreen"
          component={LoginNumberScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
