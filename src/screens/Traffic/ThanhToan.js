import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableRipple } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';




const ThanhToan = () => {

    // const navigation = useNavigation();
    // const handleBackPress = () => {
    //     navigation.goBack();
    // };
    return (
        
        <View style={styles.container}>
            <View style={[styles.orderDetailsContainer1, styles.underline]}>
                {/* <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity> */}
                <Text style={[styles.header]}>Xem lại đơn hàng</Text>

            </View>

            <View style={styles.orderDetailsContainer}>
                <Text style={styles.orderDetails}>Chi tiết đơn hàng</Text>
                <TouchableRipple
                    style={styles.changeAddressButton}
                >
                    <Text style={styles.changeAddressButtonText}>Đổi địa chỉ</Text>
                </TouchableRipple>
            </View>
            <View style={styles.header1}>
                <Text style={styles.textHearder}>Địa chỉ gửi | người gửi: Lâm đức kính</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Địa chỉ: Trường đại học Lạc Hồng (Cơ sở 1)"
                />
                <Text style={[styles.textHearder]}>Địa chỉ nhận | người nhận: Hoàng Đăng Khoa</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Địa chỉ: Trường đại học Lạc Hồng (Cơ sở 2)"
                />
            </View>
            <View style={[styles.header2, styles.underline]}>
                <Text>Thời gian dự kiến xe đến nhận hàng 10 phút</Text>
            </View>
            <View style={[styles.header4, styles.underline]}>
                <Text>Trọng lượng hàng: 10Kg</Text>
            </View>
            <View style={[styles.header3, styles.underline]}>
                <Text>Loại xe: 4 chỗ / Giá: 30.000Đ</Text>
            </View>
            <View style={styles.paymentContainer}>
                <View style={styles.orderDetailsContainer}>
                    <Text style={styles.TextBottom}>Tổng cộng</Text>
                    <Text style={styles.TextBottom}>30.000Đ</Text>
                </View>
                <TouchableRipple
                    style={styles.changeAddressButton}
                >
                    <Text style={[styles.changeAddressButtonText, styles.textbuttoonthanhtoan]}>Thanh toán</Text>
                </TouchableRipple>
            </View>
        </View>
    );
};

export default ThanhToan;
const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        padding: 10,
    },
    orderDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    orderDetailsContainer1: {
        flexDirection: 'row',


    },
    TextBottom: {
        fontSize: 16,
        marginBottom: 10
    },
    orderDetails: {
        fontSize: 16,
        marginRight: 8,
    },
    changeAddressButton: {
        backgroundColor: '#23AC41',
        padding: 8,
        borderRadius: 8,

    },
    changeAddressButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    textHearder: {
        fontSize: 16,
    },
    underline: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 8,
        marginBottom: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
    },
    header2: {
        marginBottom: 16,
    },
    header3: {
        marginBottom: 16,
    },
    header4: {
        marginBottom: 16,
    },
    paymentContainer: {
        marginTop: 220,
    },
    paymentButton: {
        backgroundColor: '#23AE28',
        padding: 6,
        borderRadius: 8,
        marginTop: 16,
    },
    paymentButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textbuttoonthanhtoan: {
        textAlign: 'center',
        padding: 11,
        fontSize: 20

    }
});