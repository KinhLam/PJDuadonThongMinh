import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WelcomeScreen from '../../screens/WelcomeScreen';
import ScrennsDriver from '../Driver/ScrennsDriver';
import CustomButton from '../../components/CustomButton';


const SelectScreens = () => {
    
    const navigation = useNavigation();
   
    const handleTaixePress = () => {
        navigation.navigate('ScrennsDriver');
    };

    const handleKhachHangPress = () => {
        // navigation.navigate('LoginScreen');
        navigation.navigate('WelcomeScreen');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/WellcomeScreens.png')} style={styles.logo} />

            <View style={styles.header}>
                <Text style={styles.headerText}>Chào mừng</Text>
                <Text style={styles.headerText}>đến với ứng dụng</Text>
                <Text style={styles.headerText}>bạn là ?</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <View style={[styles.buttonContainer, styles.leftButtonContainer]}>
                    <CustomButton
                        title="Tài xế"
                        onPress={handleTaixePress}
                        mode="contained"
                        style={[styles.button, { backgroundColor: '#92E3A9', }]}
                        textStyle={styles.buttonTextLeft}
                    />
                </View>
                <View style={[styles.buttonContainer, styles.rightButtonContainer]}>
                    <CustomButton
                        title="Khách hàng"
                        onPress={handleKhachHangPress}
                        mode="contained"
                        style={[styles.button, { backgroundColor: '#FF725E' }]}
                        textStyle={styles.buttonText}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 400,
        height: 400,

    },
    header: {
        marginTop: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    buttonContainer: {
        flex: 1,
        overflow: 'hidden',
    },
    leftButtonContainer: {
        marginRight: 5,
        marginLeft: 20,
        marginHorizontal: 10,
    },
    rightButtonContainer: {
        marginLeft: 5,
        marginHorizontal: 10,
    },
    button: {
        width: '100%',
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextLeft: {
        fontSize: 18,
        fontWeight: '300',
        color: '#221918',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '300',
        color: 'white',
    },
});

export default SelectScreens;
