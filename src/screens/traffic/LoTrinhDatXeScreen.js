import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker';
const ArrivingSection = ({ onCancel, onConfirm }) => {
    return (
        <View style={styles.EnventXacNhanHuyChuyen1}>
            <View style={styles.EnventXacNhanHuyChuyen}>
                <Text style={styles.TextTenTaiXe}>Tx Lâm Đức Kính</Text>
                <Text style={styles.TextThoiGian}>Xe sẽ đến trong 4p nữa</Text>
                <View style={styles.ViewThongTin}>
                    <Text>0123456789</Text>
                    <TouchableOpacity>
                        <Text>Nhắn tin</Text>
                    </TouchableOpacity>

                </View>

            </View>
            <View style={styles.ButtonConfimOrCancel}>
                <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
                    <Text style={styles.confirmButtonText}>Xác nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                    <Text style={styles.confirmButtonText}>Hủy chuyến</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const LoTrinh_DatXe = () => {
    const navigation = useNavigation();
    const [totalAmount, setTotalAmount] = useState(0);
    const [showArrivingSection, setShowArrivingSection] = useState(false);

    const handleSelectCar = (price) => {
        setTotalAmount(price);
    };

    const handleBackPress = () => {
        // Go back to the previous screen
        navigation.goBack();
    };

    const handleCancel = () => {
        // Xử lý logic khi hủy chuyến
        setShowArrivingSection(false);
    };

    const handleConfirm = () => {
        // Xử lý logic khi xác nhận chuyến
        setShowArrivingSection(true);
        navigation.navigate('LoTrinhChuyenDiScreen');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.headerContainer1}>
                    <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerContainer2}>Chọn vị trí</Text>
                </View>
                <View style={styles.TextInputView}>
                    <TextInput
                        style={styles.TextinputText}
                        placeholder="Vị trí của bạn"
                    />
                    <TextInput
                        style={styles.TextinputText}
                        placeholder="Vị trí của bạn"
                    >
                        Trường đại học Lạc Hồng (cơ sở 1)...
                    </TextInput>
                </View>
                <View>
                    <Image
                        style={styles.imageMap}
                        source={require('./../../assets/anh_map.jpg')}
                    />
                </View>
                <View>
                    {!showArrivingSection ? (
                        <View>
                            <View>
                                <View style={styles.MarginPhuongThuc}>
                                    <TouchableOpacity
                                        style={styles.buttonChonXe}
                                        onPress={() => handleSelectCar(38000)}
                                    >
                                        <Text>Xe 4 chỗ</Text>
                                        <Text>38.000đ</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={styles.buttonChonXe}
                                        onPress={() => handleSelectCar(50000)}
                                    >
                                        <Text>Xe 7 chỗ</Text>
                                        <Text>50.000đ</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.BoderPhuongThuc}>
                                <View style={styles.buttonPhuongThuc}>
                                    <TouchableOpacity>
                                        <Text style={styles.TextPhuongThuc}>Tiền mặt</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.TextPhuongThuc1}>|</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.TextPhuongThuc}>Chuyển khoản</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttonDatXe}>
                                    <View style={styles.TextTotal1}>
                                        <Text style={styles.TextTotal}>Tổng số tiền</Text>
                                        <Text style={styles.TextTotal}>{totalAmount}đ</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.buttonDatXe1}
                                        onPress={() => {
                                            setShowArrivingSection(true);
                                        }}
                                    >
                                        <Text style={styles.TextDatXe}>Đặt xe</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <ArrivingSection onCancel={handleCancel} onConfirm={handleConfirm} />
                    )}
                </View>
            </View>
        </ScrollView>
    );
};

export default LoTrinh_DatXe;

const styles = StyleSheet.create({
    EnventXacNhanHuyChuyen: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    EnventXacNhanHuyChuyen1: {
        borderWidth: 2,
        height: 'auto',
        borderRadius: 10,
        paddingBottom: 90
    },
    TextTenTaiXe: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    TextThoiGian: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    ButtonConfimOrCancel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
    , ViewThongTin: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    confirmButton: {
        backgroundColor: '#FF9736',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: '#FF9736',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    TextInputView: {
        backgroundColor: '#FF9736',
    },
    TextinputText: {
        padding: 7,

        marginLeft: 10,
        marginTop: 2,
        marginBottom: 3,
        marginRight: 10,
        borderColor: "#000000",
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10
    },
    imageMap: {
        width: Dimensions.get('window').width, // Độ rộng của ảnh là chiều rộng của thiết bị trừ đi margin
        height: Dimensions.get('window').width, // Chiều cao của ảnh cũng giống nhau để giữ tỉ lệ
        resizeMode: 'cover'
    },
    MarginPhuongThuc: {
        marginTop: 10
    },
    BoderPhuongThuc: {
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 22,
        paddingBottom: 20,
        borderRadius: 10

    },
    TextPhuongThuc1: {
        fontSize: 20,
        marginBottom: 0
    }
    ,
    buttonChonXe: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        boderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        marginTop: 3,
        marginLeft: 3,
        marginRight: 3,

    },
    buttonPhuongThuc: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        marginTop: 20,

    },
    TextPhuongThuc: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonDatXe: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',

        marginLeft: 35,
        marginRight: 35,
        backgroundColor: '#FF9736',
        padding: 12,
        borderRadius: 10,
    },
    TextTotal: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF'

    },
    buttonDatXe1: {
        backgroundColor: '#F9E31E',
        padding: 10,
        borderRadius: 20,
    },
    TextDatXe: {
        fontSize: 16,

    },
    backButton: {
        backgroundColor: '#FF9736'
    },
    headerContainer1: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FF9736',
        alignItems: 'center',
    },
    headerContainer2: {
        textAlign: 'center',
        width: '80%',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }

});
