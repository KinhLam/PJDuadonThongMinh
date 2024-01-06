import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconBack from '../../components/IconBack';
import IconVector from '../../components/IconVector';
import CustomButton from '../../components/CustomButton';
import Modal from 'react-native-modal'; // Import thư viện modal

const LoginNumberScreen = () => {
  const navigation = useNavigation();
  const [otp, setOTP] = useState(['', '', '', '']);
  const [resendTime, setResendTime] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false); // State để quản lý hiển thị modal lỗi

  const inputRefs = useRef([]);

  useEffect(() => {
    const isAnyEmpty = otp.some(value => value === '');
    const isAnyFocused = inputRefs.current.some(ref => ref.isFocused());

    if (isAnyEmpty && !isAnyFocused) {
      inputRefs.current[0].focus();
    }
  }, [otp]);

  useEffect(() => {
    let timer;

    if (resendTime > 0) {
      timer = setInterval(() => {
        setResendTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      setIsResendDisabled(false);
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [resendTime]);

  const handleContinue = () => {
    // Hiển thị màn hình chờ
    setIsLoading(true);

    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);

      // TODO: Add logic to check if OTP is correct
      const isOTPCorrect = otp.join('') === '1234'; // Change '1234' to your correct OTP

      if (isOTPCorrect) {
        navigation.navigate('HomeTabNavigator');
      } else {
        // Hiển thị modal lỗi
        setIsErrorModalVisible(true);
      }
    }, 2000);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleResend = () => {
    setIsResendDisabled(true);
    setResendTime(30);

    const timer = setInterval(() => {
      setResendTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  };

  const handleInputChange = (index, text) => {
    const newOTP = [...otp];
    newOTP[index] = text;

    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    } else if (!text && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    setOTP(newOTP);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerIcon}>
        <IconBack onPress={handleBackPress} style={styles.styleIcon} />
      </View>

      <View style={{ padding: 20, marginLeft: 10 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.textTitle}>Xác minh tài khoản</Text>
        </View>
        <View style={{ marginTop: 10, paddingRight: '15%' }}>
          <Text style={styles.textHeader}>
            Chúng tôi đã gửi mã xác minh tới số điện thoại của bạn
          </Text>
        </View>
      </View>

      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={text => handleInputChange(index, text)}
          />
        ))}
      </View>

      <View style={{ marginBottom: 20 }}>
        {/* Sử dụng biến isLoading để kiểm tra và hiển thị màn hình chờ */}
        {isLoading ? (
          <ActivityIndicator size="large" color="#23AC41" />
        ) : (
          <CustomButton
            title="Tiếp tục"
            onPress={handleContinue}
            style={styles.button}
            textStyle={[styles.textButton, { color: 'white' }]}
            uppercase={true}
          />
        )}
        <IconVector
          library="AntDesign"
          name="arrowright"
          size={20}
          color="#f7f7f7"
          style={styles.iconButton}
        />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {resendTime > 0 ? (
          <Text style={styles.textHeader}>
            Gửi lại mã sau {resendTime} giây
          </Text>
        ) : (
          <Text
            style={styles.textHeader}
            onPress={handleResend}
            disabled={isResendDisabled}
          >
            Gửi lại mã
          </Text>
        )}
      </View>

      {/* Modal hiển thị thông báo lỗi */}
      <Modal isVisible={isErrorModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Thông báo</Text>
          <Text style={styles.modalText}>Mã OTP không đúng. Vui lòng thử lại.</Text>
          <CustomButton
            title="Đóng"
            onPress={() => setIsErrorModalVisible(false)}
            style={styles.modalButton}
            textStyle={{ color: 'white' }}
          />
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
  textTitle: {
    fontSize: 24,
    fontWeight: 'medium',
    color: '#120D26',
    marginTop: -20,
  },
  textHeader: {
    fontSize: 15,
    fontWeight: '300',
    color: '#120D26',
    lineHeight: 24,
  },
  iconButton: {
    position: 'absolute',
    top: '50%',
    right: 15,
    transform: [{ translateX: -70 }, { translateY: -8 }],
  },
  button: {
    height: 55,
    width: 271,
    padding: 10,
    marginTop: 5,
    marginLeft: '15%',
    borderRadius: 15,
    backgroundColor: '#23AC41',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    padding: 30,
  },
  otpInput: {
    height: 55,
    width: 55,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    marginRight: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#120D26',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#120D26',
  },
  modalButton: {
    backgroundColor: '#23AC41',
    borderRadius: 10,
    padding: 10,
    width: 150,
  },
});

export default LoginNumberScreen;
