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
import ActivePageScreen from './src/screens/Home/ActivePageScreen';

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
          height: 70, 
          paddingBottom: 15,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIconStyle: {
          width: 30,
          height: 30,
        },
      })}>
      <Tab.Screen name="Trang chủ" component={HomeScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Hoạt động" component={ActivePageScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Thanh toán" component={PayScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Tin nhắn" component={NotificationScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Tài khoản" component={UserScreen} options={{headerShown: false}}/>
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
