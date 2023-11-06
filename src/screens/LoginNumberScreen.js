import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconBack from '../components/IconBack';
import CustomButton from '../components/CustomButton';

const LoginNumberScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(''); // State để lưu thông báo lỗi
  const [isError, setIsError] = useState(false); // State để xác định xem có lỗi hay không

  const handleContinue = () => {
    // Kiểm tra nếu số điện thoại chưa được nhập hoặc không đúng định dạng
    if (!/^(0\d{9})$/.test(phoneNumber)) {
      setError('Vui lòng nhập đúng số điện thoại');
      setIsError(true); 
      return; 
    }

    // Xử lý sự kiện khi nhấn nút "Tiếp tục"
    console.log('Số điện thoại: ', phoneNumber);
    navigation.navigate('OTPScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconBack />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/car.gif')} style={styles.logo} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.registerTitle]}>Bắt đầu</Text>
      </View>
      <View style={styles.inputContainer}>
        <View
          style={[
            styles.inputWrapper,
            isError && styles.errorInputWrapper, // Sử dụng kiểu dáng errorInputWrapper nếu có lỗi
          ]}
        >
          <TextInput
            placeholder="Số điện thoại"
            style={styles.input}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text);
              setError(''); // Xóa thông báo lỗi khi người dùng thay đổi số điện thoại
              setIsError(false); // Gỡ đánh dấu có lỗi
            }}
          />
        </View>
        {/* Hiển thị thông báo lỗi */}
        <Text style={styles.errorText}>{error}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Tiếp tục"
          onPress={handleContinue}
          mode="contained"
          style={[styles.button, { backgroundColor: '#FF725E' }]
          }
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: '10%',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
  },
  registerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputWrapper: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10, // Khoảng cách từ input đến thông báo lỗi
  },
  errorInputWrapper: {
    borderColor: 'red', // Màu viền đỏ khi có lỗi
  },
  input: {
    height: 55,
    paddingLeft: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginTop: 10, // Khoảng cách từ thông báo lỗi đến nút tiếp tục
  },
});

export default LoginNumberScreen;
