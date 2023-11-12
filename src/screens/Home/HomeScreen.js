import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header with Background Image */}
      <ImageBackground
        source={require('../../assets/background.jpg')}
        style={styles.headerBackground}>
        <View style={styles.header}>
          {/* Left Section */}
          <View style={styles.leftHeader}>
            <Text>Welcome SmartCar</Text>
          </View>

          {/* Right Section */}
          <View style={styles.rightHeader}>
            {/* Replace 'userImage' with the actual source of the user's image */}
            <Image
              style={styles.userImage}
              source={require('../../assets/user1.jpg')}
            />
          </View>
        </View>
      </ImageBackground>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Search..." />
        </View>

        {/* Rest of the main content */}
        <View style={styles.restOfMainContent}>
          <Text>Main Content Goes Here</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Footer Goes Here</Text>
      </View>
    </View>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  leftHeader: {},
  rightHeader: {},
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  mainContent: {
    flex: 1,
  },
  searchBar: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  restOfMainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default HomeScreen;
