import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker';
import CustomButton from '../../components/CustomButton';

const RatingButton = ({ rating, selectedRating, onPress, onHover }) => {
    const isHighlighted = selectedRating >= rating;

    return (
        <TouchableOpacity
            style={styles.starButton}
            onPress={() => onPress(rating)}
            onPressIn={() => onHover(rating)}
            onPressOut={() => onHover(null)}
            onLongPress={() => onHover(null)}
        >
            <Ionicons
                name={isHighlighted ? 'star' : 'star-outline'}
                size={30}
                color={isHighlighted ? '#CCCC00' : 'black'}
            />
        </TouchableOpacity>
    );
};

const HoanThanhChuyenXeScreen = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
        // Go back to the previous screen
        navigation.goBack();
    };

    const [userReview, setUserReview] = useState('');
    const [userRating, setUserRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(null);
    const handleRatingPress = (rating) => {
        setUserRating(rating);
    };

    const handleRatingHover = (rating) => {
        setHoveredRating(rating);
        // Thực hiện các xử lý khác dựa trên đánh giá của người dùng
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.headerContainer1}>
                    <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerContainer2}>Hoàn thành chuyến xe</Text>
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
                    <Ionicons name="checkmark-done-sharp" size={24} color="white" style={styles.iconbottom} />
                    <Text style={styles.textbottom} >Hoàn thành</Text>
                    <Text style={styles.textbottom1} >Bạn cảm thấy chuyến xe này như thế nào ?</Text>
                    <View style={styles.ratingContainer}>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <RatingButton 
                                key={rating}
                                rating={rating}
                                selectedRating={userRating}
                                onPress={handleRatingPress}
                                onHover={handleRatingHover}
                            />
                        ))}
                    </View>
                    <View style={styles.container1}>
                        <ScrollView style={styles.scrollView2}>
                            <TextInput
                                style={styles.textInput}
                                multiline
                                placeholder="Viết cảm nhận của bạn..."
                                value={userReview}
                                onChangeText={(text) => setUserReview(text)}
                            />
                        </ScrollView>
                    </View>
                    <CustomButton style={[styles.button, { backgroundColor: '#FF9736'}]}
            textStyle={styles.buttonText} title={"Xác nhận"}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default HoanThanhChuyenXeScreen;

const styles = StyleSheet.create({
    textbottom: {
        fontSize: 20,
        textAlign: 'center'

    },
    headerContainer: {

    },
    headerContainer1: {

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
    },
    backButton: {

        backgroundColor: '#FF9736',
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
        borderRadius: 10,
    },
    imageMap: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        resizeMode: 'cover',
    },
    iconbottom: {
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
       
    },
    starButton: {
        marginHorizontal: 5,
    },
    container1: {
        flex: 1,
        padding: 16,
    },
    scrollView1: {
        flex: 1,
    },
    textInput: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
    },
    iconbottom: {
        backgroundColor: '#00FF00',
        width: 60,
        fontSize: 50,
        borderRadius: 60,
        textAlign: 'center',
        padding: 5,
        marginLeft: 160,
        marginTop: 10,
    },
    textbottom1: {
        textAlign: 'center',
    },
    button:{
        
        padding: 1,
        marginLeft:40,
        marginRight: 40,
        marginBottom: 40,

    },
});
