import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconBack from '../../components/IconBack';
import IconVector from '../../components/IconVector';
import CustomButton from '../../components/CustomButton';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fixedPhoneNumber = '0987654321'; // Số điện thoại cố định

  const handleContinue = () => {
    setIsLoading(true);

    // Simulate a 2-second delay before navigating to the next screen
    setTimeout(() => {
      setIsLoading(false);

      if (phoneNumber === fixedPhoneNumber) {
        console.log('Số điện thoại: ', phoneNumber);
        navigation.navigate('LoginNumberScreen');
      } else {
        setError('Số điện thoại không đúng');
        setIsError(true);
      }
    }, 2000);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerIcon}>
        <IconBack onPress={handleBackPress} style={styles.styleIcon} />
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/shipping.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.containerHeader}>
        <View>
          <Text style={styles.textHeader}>Xin chào!</Text>
        </View>

        <View style={[styles.inputContainer, isError && styles.errorInput]}>
          <TextInput
            placeholder="Nhập số điện thoại"
            style={styles.inputNumber}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text);
              setError('');
              setIsError(true);
            }}
          />
          <IconVector
            library="FontAwesome"
            name="phone"
            size={20}
            color="#807A7A"
            style={styles.icon}
          />
          <Text style={{ color: 'red' }}>{error}</Text>
        </View>

        <View>
          <CustomButton
            title="Đăng nhập"
            onPress={handleContinue}
            style={styles.button}
            textStyle={[styles.textButton, { color: 'white' }]}
            uppercase={true}
          />
          <IconVector
            library="AntDesign"
            name="arrowright"
            size={20}
            color="#f7f7f7"
            style={styles.iconButton}
          />
        </View>
      </View>

      {/* Modal for Loading */}
      <Modal transparent={true} animationType="slide" visible={isLoading}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#23AC41" />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  styleIcon: {
    marginLeft: 10,
    marginTop: '10%',
  },
  headerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 300,
    marginTop: '5%',
  },
  containerHeader: {
    padding: 20,
  },
  textHeader: {
    fontSize: 32,
    fontWeight: 'regular',
    color: '#000000',
    marginTop: -20,
  },
  inputContainer: {
    position: 'relative',
    margin: 10,
  },
  errorInput: {
    borderColor: 'red', // Màu viền đỏ khi có lỗi
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: 15,
    transform: [{ translateY: -13 }],
  },
  iconButton: {
    position: 'absolute',
    top: '50%',
    right: 15,
    transform: [{ translateX: -50 }, { translateY: -4 }],
  },
  inputNumber: {
    height: 55,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 40,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 15,
  },
  button: {
    height: 55,
    width: 271,
    padding: 10,
    marginTop: 5,
    marginLeft: '10%',
    borderRadius: 15,
    backgroundColor: '#23AC41',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(160, 151, 151, 0.33) 0.16)',
  },
  modalContent: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;