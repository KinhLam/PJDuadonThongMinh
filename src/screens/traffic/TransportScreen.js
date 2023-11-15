import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker';


const TransportScreen = () => {
    const navigation = useNavigation();
    const [length, setLength] = useState('');
const [width, setWidth] = useState('');
    const [nameSender, setNameSender] = useState('');
    const [phoneSender, setPhoneSender] = useState('');
    const [addressSender, setAddressSender] = useState('');
    const [weight, setWeight] = useState('');
    const [size, setSize] = useState('');
    const [date, setDate] = useState('');
    const [nameReceiver, setNameReceiver] = useState('');
    const [phoneReceiver, setPhoneReceiver] = useState('');
    const [addressReceiver, setAddressReceiver] = useState('');

  const handleBackPress = () => {
    // Go back to the previous screen
    navigation.goBack();
  };

  const handleConfirmPress = () => {
    // Xử lý sự kiện khi nút xác nhận được nhấn
    console.log('Xác nhận đã được nhấn!');

    // In ra giá trị của tất cả các TextInput
    console.log("Tên người gửi:", nameSender);
    console.log("SĐT người gửi:", phoneSender);
    console.log("Địa chỉ đi:", addressSender);
    console.log("Trọng lượng:", weight + " kg");
    
    // Concatenate "Chiều dài" and "Chiều rộng" before logging
    const dimensions = `${length} x ${width}`;
    console.log("Kích thước:", dimensions);

    console.log("Ngày đi:", date);
    console.log("Tên người nhận:", nameReceiver);
    console.log("SĐT người nhận:", phoneReceiver);
    console.log("Địa chỉ đến:", addressReceiver);

    // Chuyển hướng đến màn hình LoTrinh_DatXe
    navigation.navigate('LoTrinh_DatXe');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerActiveScreen}>
        {/* Back button */}
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.textheader1}>Đặt xe</Text>
      </View>
      <View style={styles.TextInputView}>
        {renderInput("Tên người gửi:", "Họ và tên", nameSender, setNameSender)}
        {renderInput("SĐT người gửi:", "Nhập số điện thoại", phoneSender, setPhoneSender)}
        {renderInput("Địa chỉ đi:", "Nhập địa chỉ", addressSender, setAddressSender)}
        {renderInput("Trọng lượng:", "Nhập số Kg", weight, setWeight)}
        {renderInput("Kích thước:", "Nhập kích thước", size, setSize)}
        {renderInput("Ngày đi:", "DD:MM:YYYY", date, setDate)}
        {renderInput("Tên người nhận:", "Họ và tên", nameReceiver, setNameReceiver)}
        {renderInput("SĐT người nhận:", "Nhập số điện thoại", phoneReceiver, setPhoneReceiver)}
        {renderInput("Địa chỉ đến:", "Nhập địa chỉ", addressReceiver, setAddressReceiver)}
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPress}>
          <Text style={styles.confirmButtonText}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const renderInput = (label, placeholder, value, onChangeText, isDimension = false, isDate = false) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>{label}</Text>
        {isDate ? (
          <DatePicker
            style={styles.datePicker}
            date={value}
            mode="date"
            placeholder={placeholder}
            format="DD-MM-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
                borderRadius: 10,
                borderColor: 'gray',
              },
            }}
            onDateChange={(date) => onChangeText(date)}
          />
        ) : (
          <TextInput
            style={styles.TextinputText}
            placeholder={placeholder}
            value={isDimension ? value : `${value}`}
            onChangeText={(text) => {
              if (isDimension) {
                const [newLength, newWidth] = text.split('x').map((part) => part.trim());
                onChangeText({ length: newLength, width: newWidth });
              } else {
                onChangeText(`${text}`);
              }
            }}
          />
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  headerActiveScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#FF9736',
    marginBottom: 20,
    width: '100%'
  },
  textheader1: {
    fontSize: 20,
    color: '#FFF6F6',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  TextInputView: {
    width: '95%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelText: {
    width: '30%',
  },
  TextinputText: {
    flex: 1, 
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: '#FFA500',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default TransportScreen;
