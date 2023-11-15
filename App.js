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

//Traffic
import TransportScreen from './src/screens/traffic/TransportScreen';
import LoTrinh_DatXe from './src/screens/traffic/LoTrinhDatXeScreen';
import LoTrinhChuyenDiScreen from './src/screens/traffic/LoTrinhChuyenDiScreen';
import HoanThanhChuyenXeScreen from './src/screens/traffic/HoanThanhChuyenXeScreen';
// Components
import IconBack from './src/components/IconBack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

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
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Hoạt động') {
            iconName = focused ? 'paper-plane' : 'paper-plane-outline';
          } else if (route.name === 'Thanh toán') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Tin nhắn') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Tài khoản') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Return the Ionicons component with the correct name
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Hoạt động"
        component={ActivePageScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Thanh toán"
        component={PayScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Tin nhắn"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Tài khoản"
        component={UserScreen}
        options={{headerShown: false}}
      />
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
        <Stack.Screen
          name="TransportScreen"
          component={TransportScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoTrinh_DatXe"
          component={LoTrinh_DatXe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HoanThanhChuyenXeScreen"
          component={HoanThanhChuyenXeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoTrinhChuyenDiScreen"
          component={LoTrinhChuyenDiScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
