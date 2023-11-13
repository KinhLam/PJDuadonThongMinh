import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import IconBack from '../components/IconBack';
import {useNavigation} from '@react-navigation/native';


const OTPScreen = ({  }) => {
  const navigation = useNavigation();

  const [otp, setOTP] = useState('');

  const handleVerifyOTP = () => {
    // Xử lý sự kiện xác minh OTP
    // Sau khi xác minh thành công, bạn có thể chuyển đến màn hình tiếp theo
    navigation.navigate('WelcomeScreen');
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconBack />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Nhập mã OTP</Text>
      <TextInput
        placeholder="Mã OTP"
        style={styles.input}
        keyboardType="numeric"
        value={otp}
        onChangeText={text => setOTP(text)}
      />
      <CustomButton
        title="Xác minh OTP"
        onPress={handleVerifyOTP}
        mode="contained"
        style={styles.button}
        textStyle={styles.buttonText}
      />
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
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: '30%',
    marginBottom: '10%',
  },
  input: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF725E',
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
  },
});

export default OTPScreen;
