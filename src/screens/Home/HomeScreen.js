import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const handleTransportPress = () => {
    navigation.navigate('TransportScreen');
  };
  return (
    <ScrollView style={styles.container}>
      {/* Header with Background Image */}
      <ImageBackground
        source={require('../../assets/home/background.jpg')}
        style={styles.headerBackground}>
        {/* Black overlay to make the background dim */}
        <View style={styles.overlay} />

        <View style={styles.header}>
          {/* Left Section */}
          <View style={styles.leftHeader}>
            <Text style={styles.welcomeText}>Xin chào !!</Text>
            <Text style={styles.userText}>
              Những dịch vụ đang chờ bạn khám phá
            </Text>
          </View>

          {/* Right Section */}
          <View style={styles.rightHeader}>
            <Image
              style={styles.userImage}
              source={require('../../assets/home/logo.png')}
            />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchInput} placeholder="Search..." />
      </View>

      {/* Main Content */}
      <SafeAreaView style={styles.mainContent}>
        <View style={styles.restOfMainContent}>
          <View style={styles.rectanglesContainer}>
            {/* Rectangle 1 */}
            <TouchableOpacity
              style={[
                styles.rectangle,
                {
                  backgroundColor: 'rgba(83, 177, 117, 0.20)',
                  borderWidth: 1.5,
                  borderColor: '#53B175',
                },
              ]}
              onPress={handleTransportPress}
              >
              <Image
                style={styles.rectangleImage}
                source={require('../../assets/home/gps-navigation.png')}
              />
              <Text style={styles.rectangleText}>Vận chuyển</Text>
            </TouchableOpacity>

            {/* Rectangle 2 */}
            <View
              style={[
                styles.rectangle,
                {
                  backgroundColor: 'rgba(244, 140, 117, 0.20)',
                  borderWidth: 1.5,
                  borderColor: '#F48C75',
                },
              ]}>
              <Image
                style={styles.rectangleImage}
                source={require('../../assets/home/car-driving.png')}
              />
              <Text style={styles.rectangleText}>Đưa đón</Text>
            </View>
          </View>

          <View style={styles.rectanglesContainer}>
            {/* Rectangle 3 */}
            <View
              style={[
                styles.rectangle,
                {
                  backgroundColor: 'rgba(235, 182, 70, 0.2)',
                  borderWidth: 1.5,
                  borderColor: '#F8A44C',
                },
              ]}>
              <Image
                style={styles.rectangleImage}
                source={require('../../assets/home/givaway.png')}
              />
              <Text style={styles.rectangleText}>Khuyến mãi</Text>
            </View>

            {/* Rectangle 4 */}
            <View
              style={[
                styles.rectangle,
                {
                  backgroundColor: 'rgba(211, 176, 224, 0.20)',
                  borderWidth: 1.5,
                  borderColor: '#D3B0E0',
                },
              ]}>
              <Image
                style={styles.rectangleImage}
                source={require('../../assets/home/pay.png')}
              />
              <Text style={styles.rectangleText}>Thanh toán</Text>
            </View>
          </View>

          <View style={styles.rectanglesContainer}>
            {/* Rectangle 5 */}
            <View
              style={[
                styles.rectangle,
                {
                  backgroundColor: 'rgba(253, 229, 152, 0.20)',
                  borderWidth: 1.5,
                  borderColor: '#fde598',
                },
              ]}>
              <Image
                style={styles.rectangleImage}
                source={require('../../assets/home/personal.png')}
              />
              <Text style={styles.rectangleText}>Cài đặt</Text>
            </View>

            {/* Rectangle 6 */}
            <View
              style={[
                styles.rectangle,
                {
                  backgroundColor: 'rgba(183, 223, 245, 0.20)',
                  borderWidth: 1.5,
                  borderColor: '#B7DFF5',
                },
              ]}>
              <Image
                style={styles.rectangleImage}
                source={require('../../assets/home/user.png')}
              />
              <Text style={styles.rectangleText}>Tài khoản</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBackground: {
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 180, // Set the height of the header with background
    position: 'relative', // To allow absolute positioning within
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the alpha (last value) for transparency
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  leftHeader: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  welcomeText: {
    fontSize: 35,
    color: '#aaadd8',
    fontWeight: '700',
  },
  userText: {
    fontSize: 15,
    color: '#ffdada',
    fontWeight: 'normal',
    paddingTop: 5,
  },
  rightHeader: {},
  userImage: {
    width: 57,
    height: 57,
    borderRadius: 30,
  },
  mainContent: {
    flex: 1,
  },
  searchBarContainer: {
    position: 'absolute',
    top: 110, // Adjust this value as needed
    width: '100%', // Take the full width
    padding: 18,
  },
  searchInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginTop: 25,
  },
  restOfMainContent: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    top: 16,
    marginTop: 30,
  },
  rectanglesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%', // Adjust the width as needed
  },
  rectangle: {
    width: 170, // Adjust the width as needed
    height: 189.11, // Adjust the height as needed
    // backgroundColor: '#3498db', // Example background color
    borderRadius: 18,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleImage: {
    width: '80%',  // Adjust the width as needed
    height: 100, // Adjust the height as needed
    borderRadius: 40, // half of width and height to make it circular
    marginBottom: 10, // spacing between image and text
  },
  rectangleText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
