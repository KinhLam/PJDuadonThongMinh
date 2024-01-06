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
        <Image source={require('../../assets/shipping.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#cbf5cc',
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
  
});

export default LoginScreen;
