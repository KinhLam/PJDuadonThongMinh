// LoTrinh_DatXe.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';

const LoTrinh_DatXe = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <View style={styles.TextInputView}>
                    <TextInput style={styles.TextinputText}
                        placeholder="Vị trí của bạn"></TextInput>
                    <TextInput style={styles.TextinputText}
                        placeholder="Vị trí của bạn">Trường đại học Lạc Hồng (cơ sở 1)...</TextInput>

                </View>
                <View>
                    <Image style={styles.imageMap}
                        source={require('../../assets/anh_map.jpg')} />
                </View>
                <View>
                    <View>
                        <TouchableOpacity style={styles.buttonChonXe}>
                            <Text>Xe 4 chỗ</Text>
                            <Text>30.000đ</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonChonXe}>
                            <Text>Xe 7 chỗ</Text>
                            <Text>50.000đ</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <View style={styles.buttonPhuongThuc}>
                            <TouchableOpacity>
                                <Text>Tiền mặt</Text>
                            </TouchableOpacity>
                            <Text>|</Text>
                            <TouchableOpacity>
                                <Text>Chuyển khoản</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonDatXe}>
                            <View>
                                <Text>Tổng số tiền</Text>
                                <Text>0đ</Text>
                            </View>
                            <TouchableOpacity>
                                <Text>Đặt xe</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            </View>
        </ScrollView>
    );
};


export default LoTrinh_DatXe;

const styles = StyleSheet.create({
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
    buttonChonXe: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        boderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        marginTop: 3,

    },
    buttonPhuongThuc: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',

    },
    buttonDatXe:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        marginTop: 15
    }

});
