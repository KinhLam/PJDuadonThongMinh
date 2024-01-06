import React, {useEffect} from 'react';
import {View, StyleSheet, Image, BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import {Text} from 'react-native-paper';

const SelectLoginScreen = () => {
  const navigation = useNavigation();

  // Hàm không cho người dùng quay lại khi ấn nút điều hướng trở về
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // Không cho phép người dùng quay về trang trước
        return true;
      },
    );
    
    return () => backHandler.remove();
  }, []);

  const handleContinueWithPhone = () => {
    // Navigate to the LoginScreen when the button is pressed
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SMARTCAR</Text>
        <Text style={[styles.textButton, {color: '#f3ecec'}]}>Your everyday everything app</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/drive-car.png')}
          style={styles.logo}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonHeader}>
            <CustomButton
              title="Tiếp tục với số điện thoại"
              onPress={handleContinueWithPhone}
              style={styles.buttonUp}
              textStyle={[styles.textButton, {color: 'white'}]}
            />
          </View>
          <View style={styles.buttonHeader}>
            <CustomButton
              title="Tiếp tục với Google"
              onPress={() => console.log('Button 2 pressed')}
              style={styles.buttonDown}
              textStyle={[styles.textButton, {color: '#000000'}]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23AE28',
  },
  header: {
    marginTop: '40%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f3ecec',
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: '100%',
    height: 500,
  },
  buttonContainer: {
    position: 'absolute',
    padding: 20,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonHeader: {
    paddingTop: 15,
  },
  buttonUp: {
    height: 55,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#4FAE5A',
  },
  buttonDown: {
    height: 55,
    padding: 10,
    borderRadius: 10,
    borderColor: '#767676',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectLoginScreen;
