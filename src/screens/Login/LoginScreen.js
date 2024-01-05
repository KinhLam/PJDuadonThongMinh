import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconBack from '../../components/IconBack';
import CustomButton from '../../components/CustomButton';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(''); // State để lưu thông báo lỗi
  const [isError, setIsError] = useState(false); // State để xác định xem có lỗi hay không

  const handleContinue = () => {
    // Kiểm tra nếu số điện thoại chưa được nhập hoặc không đúng định dạng

    // Xử lý sự kiện khi nhấn nút "Tiếp tục"
    console.log('Số điện thoại: ', phoneNumber);
    navigation.navigate('LoginNumberScreen');
  };

  const handleContinueGoogle = () => {
    // Kiểm tra nếu số điện thoại chưa được nhập hoặc không đúng định dạng

    // Xử lý sự kiện khi nhấn nút "Tiếp tục"
    // console.log('Số điện thoại: ', phoneNumber);
    navigation.navigate('HomeTabNavigator');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconBack />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/car.gif')} style={styles.logo} />
      </View>
      {/* <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.registerTitle]}>Đăng nhập</Text>
      </View> */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Tiếp tục với google"
          onPress={handleContinueGoogle}
          mode="contained"
          style={[
            styles.button,
            {backgroundColor: '#FF725E', marginBottom: 10},
          ]}
          textStyle={styles.buttonText}
        />

        <CustomButton
          title="Tiếp tục với số điện thoại"
          onPress={handleContinue}
          mode="contained"
          style={[styles.button, {backgroundColor: '#FF725E', marginTop: 10}]}
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
    backgroundColor: '#fdece2',
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
    marginTop: 15, // Khoảng cách từ thông báo lỗi đến nút tiếp tục
  },
});

export default LoginScreen;
