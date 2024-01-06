import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';

const UserScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Thực hiện các bước cần thiết để đăng xuất người dùng

    // Điều hướng về trang SelectLoginScreen
    navigation.navigate('SelectLoginScreen');
  };

  return (
    <View style={styles.container}>
      <CustomButton
        title="Đăng xuất"
        onPress={handleLogout}
        style={styles.button}
        textStyle={[styles.textButton, {color: 'black'}]}
        uppercase={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  button: {
    height: 40,
    width: 150,
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
});

export default UserScreen;
