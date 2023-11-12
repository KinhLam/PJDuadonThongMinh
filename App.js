import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Login
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import LoginNumberScreen from './src/screens/LoginNumberScreen';
import OTPScreen from './src/screens/OTPScreen';

// Home
import HomeScreen from './src/screens/Home/HomeScreen';
import NotificationScreen from './src/screens/Home/NotificationScreen';
import PayScreen from './src/screens/Home/PayScreen';
import UserScreen from './src/screens/Home/UserScreen';

// Components
import IconBack from './src/components/IconBack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 60, // Adjust the height of the bottom tab bar
        },
        tabBarLabelStyle: {
          fontSize: 14, // Adjust the font size of the label
        },
        tabBarIconStyle: {
          width: 30, // Adjust the size of the icon
          height: 30,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Pay" component={PayScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};

// Main App
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginNumberScreen"
          component={LoginNumberScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeTabNavigator"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
