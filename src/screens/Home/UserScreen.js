import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import IconVector from '../../components/IconVector';

const UserScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // navigation.navigate('SelectLoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Left Section */}
        <View style={styles.leftHeader}>
          <Image
            style={styles.userImage}
            source={require('../../assets/home/user.png')}
          />
        </View>

        {/* Right Section */}
        <View style={styles.rightHeader}>
          <Text style={styles.welcomeText}>LTK Team</Text>
          <Text style={styles.userText}>ltk20CT111@gmail.com</Text>
        </View>
      </View>

      <View style={{marginTop: 25}}>
        <View style={{marginTop: 5, marginBottom: 5}}>
          <CustomButton
            title="Thông tin cá nhân"
            onPress={() => {
              console.log('Thông tin cá nhân');
            }}
            style={styles.button}
            textStyle={[styles.textButton, {color: 'black'}]}
            uppercase={false}
          />
          <IconVector
            library="AntDesign"
            name="user"
            size={25}
            color="#767676"
            style={styles.iconButton}
          />
        </View>

        <View style={{marginTop: 5, marginBottom: 5}}>
          <CustomButton
            title="Đã lưu"
            onPress={() => {
              console.log('Đã lưu');
            }}
            style={styles.button}
            textStyle={[styles.textButton, {color: 'black'}]}
            uppercase={false}
          />
          <IconVector
            library="AntDesign"
            name="calendar"
            size={25}
            color="#767676"
            style={styles.iconButton}
          />
        </View>

        <View style={{marginTop: 5, marginBottom: 5}}>
          <CustomButton
            title="Yêu thích"
            onPress={() => {
              console.log('Yêu thích');
            }}
            style={styles.button}
            textStyle={[styles.textButton, {color: 'black'}]}
            uppercase={false}
          />
          <IconVector
            library="AntDesign"
            name="hearto"
            size={25}
            color="#767676"
            style={styles.iconButton}
          />
        </View>

        <View style={{marginTop: 5, marginBottom: 5}}>
          <CustomButton
            title="Cài đặt"
            onPress={() => {
              console.log('Cài đặt');
            }}
            style={styles.button}
            textStyle={[styles.textButton, {color: 'black'}]}
            uppercase={false}
          />
          <IconVector
            library="AntDesign"
            name="setting"
            size={25}
            color="#767676"
            style={styles.iconButton}
          />
        </View>

        <View style={{marginTop: 5, marginBottom: 5}}>
          <CustomButton
            title="Đổi mật khẩu"
            onPress={() => {
              console.log('Đổi mật khẩu');
            }}
            style={styles.button}
            textStyle={[styles.textButton, {color: 'black'}]}
            uppercase={false}
          />
          <IconVector
            library="AntDesign"
            name="form"
            size={25}
            color="#767676"
            style={styles.iconButton}
          />
        </View>

        <View style={{marginTop: 5, marginBottom: 5}}>
          <CustomButton
            title="Trợ giúp & Phản hồi"
            onPress={() => {
              console.log('Trợ giúp & Phản hồi');
            }}
            style={styles.button}
            textStyle={[styles.textButton, {color: 'black'}]}
            uppercase={false}
          />
          <IconVector
            library="AntDesign"
            name="questioncircleo"
            size={25}
            color="#767676"
            style={styles.iconButton}
          />
        </View>

        <View style={{marginTop: 5, marginBottom: 5}}>
          <CustomButton
            title="Đăng xuất"
            onPress={handleLogout}
            style={styles.button}
            textStyle={[styles.textButton, {color: 'black'}]}
            uppercase={false}
          />
          <IconVector
            library="AntDesign"
            name="logout"
            size={25}
            color="#767676"
            style={styles.iconButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  leftHeader: {
    // flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  welcomeText: {
    fontSize: 16,
    color: '#12175E',
    fontWeight: '600',
  },
  userText: {
    fontSize: 15,
    color: '#12175E',
    fontWeight: '400',
    paddingTop: 5,
  },
  rightHeader: {
    paddingRight: 16,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  buttonContainer: {
    flexDirection: 'row', // Display components in the same row
    // alignItems: '', // Center items vertically
    // justifyContent: 'center', // Center items horizontally
    marginTop: '10%',
  },
  button: {
    height: 45,
    width: 200,
    padding: 10,
    marginTop: 5,
    marginLeft: '25%',
    borderRadius: 15,
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
  },
  textButton: {
    fontSize: 17,
    fontWeight: '400',
  },
  iconButton: {
    position: 'absolute',
    top: '45%',
    left: 15,
    transform: [{translateY: -7}, {translateX: 40}],
  },
});

export default UserScreen;
