import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const LoTrinhChuyenDiScreen = () => {
    const navigation = useNavigation();
    const handleConfirm = () => {
        // Xử lý logic khi xác nhận chuyến
        
        navigation.navigate('HoanThanhChuyenXeScreen');
    };
    return (
        <ImageBackground
            source={require('./../../assets/anhChiDuong.jpg')}
            style={styles.imageBackground}
        >
            <TouchableOpacity style={styles.header1}>
                <Ionicons name="arrow-up" size={24} color="white" style={styles.iconheader} />
                <Text style={styles.header2}>Đi thẳng về hướng Bắc</Text>
            </TouchableOpacity>
            <View style={styles.header3}>
                <TouchableOpacity>

                    <Ionicons name="mic" size={24} color="Black" style={styles.iconheader1} />
                </TouchableOpacity>
                <TouchableOpacity>

                    <Ionicons name="search" size={24} color="Black" style={styles.iconheader1} />
                </TouchableOpacity>
                <TouchableOpacity>

                    <Ionicons name="volume-high" size={24} color="Black" style={styles.iconheader1} />
                </TouchableOpacity>
            </View>
            <View style={styles.header6}>
                <TouchableOpacity style={styles.header4}>
                    <Ionicons name="location" size={24} color="Black" style={styles.text1} />
                    <Text style={styles.text1}>Về giữa</Text>
                </TouchableOpacity>
                <View style={styles.header5}>
                    <TouchableOpacity>
                        <Ionicons name="close" size={24} color="Black" style={styles.iconheader2} />
                    </TouchableOpacity>
                    <View alignItems="center">
                        <Text >3 Phút</Text>
                        <Text>1.7km   -   10:00</Text>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="checkmark-outline" size={24} color="Black" style={styles.iconheader2} onPress={handleConfirm} />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
    },
    header1: {
        backgroundColor: '#FF9736',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginLeft: 20,
        padding: 20,
        marginTop: 5,
        borderRadius: 20,
    },
    header2: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginLeft: 20,
    },
    header3: {

        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: 20,
    },
    iconheader1: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 70,
        width: 40,
        textAlign: 'center',
        backgroundColor: 'white',
        color: 'black',
        padding: 6,
        marginTop: 10,
    },
    header4: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 2,
        width: 90,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 9,
        marginLeft: 20.,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        color: 'blue',
        fontWeight: 'bold',
    },
    header5: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth:  1,
        padding: 40,
        borderRadius: 10,
        justifyContent: 'space-between',
        backgroundColor:'white',
      
    },    header6: {
        marginTop: 'auto',
    },
    iconheader2:{ 
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 70,
        width: 40,
        textAlign: 'center',
        backgroundColor: '#FF9736',
        color: 'white',
        padding: 6,
    
    },

});

export default LoTrinhChuyenDiScreen;
