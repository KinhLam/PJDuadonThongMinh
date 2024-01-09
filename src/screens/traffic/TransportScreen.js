import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker';

const TransportScreen = () => {
  const navigation = useNavigation();

  const [nameSender, setNameSender] = useState('');
  const [phoneSender, setPhoneSender] = useState('');
  const [addressSender, setAddressSender] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [weight, setWeight] = useState('');
  const [size, setSize] = useState('');
  const [date, setDate] = useState('');
  const [nameReceiver, setNameReceiver] = useState('');
  const [phoneReceiver, setPhoneReceiver] = useState('');
  const [addressReceiver, setAddressReceiver] = useState('');
  const [showAddressSelectionModal, setShowAddressSelectionModal] = useState(false);
  const [addressList, setAddressList] = useState([
    { id: '1', name: 'khoa', phone: '123456789', address: 'abc xyz' },
    { id: '2', name: 'kính', phone: '123456789', address: 'abc xyz' },
    // Thêm các địa chỉ khác tương tự
  ]);

  const handleBackPress = () => navigation.goBack();
  const handleConfirmPress = () => {
    console.log('Xác nhận đã được nhấn!');
    console.log("Tên người gửi:", nameSender);
    console.log("SĐT người gửi:", phoneSender);
    console.log("Địa chỉ đi:", addressSender);
    console.log("Trọng lượng:", weight + " kg");
    const dimensions = `${length} x ${width}`;
    console.log("Kích thước:", dimensions);
    console.log("Ngày đi:", date);
    console.log("Tên người nhận:", nameReceiver);
    console.log("SĐT người nhận:", phoneReceiver);
    console.log("Địa chỉ đến:", addressReceiver);
    navigation.navigate('LoTrinh_DatXe');
  };

  const handleShowAddressSelectionModal = () => setShowAddressSelectionModal(true);

  const handleAddressSelected = (selectedAddress) => {
    setNameSender(selectedAddress.name);
    setPhoneSender(selectedAddress.phone);
    setAddressSender(selectedAddress.address);
    setShowAddressSelectionModal(false);
  };

  const renderAddressItem = (item) => (
    <TouchableOpacity
      style={styles.addressItem}
      onPress={() => handleEditAddress(item)}
    >
      <Text>{item.name}</Text>
      <Text>{item.phone}</Text>
      <Text>{item.address}</Text>
    </TouchableOpacity>
  );

  const handleEditAddress = (item) => {
    // Thực hiện các xử lý khi người dùng muốn sửa thông tin địa chỉ
    // Ví dụ: navigation.navigate('EditAddressScreen', { address: item });
  };

  const AddressSelectionModal = () => {
    const [editingAddress, setEditingAddress] = useState(null);
  
    const handleEditAddress = (item) => {
      setEditingAddress(item);
    };
  
    const handleSelectAddress = (selectedAddress) => {
      // Xử lý sự kiện khi một đối tượng địa chỉ được chọn
      // Ví dụ: Gửi thông tin địa chỉ đã chọn đến nơi cần sử dụng (ví dụ: parent component)
      console.log("Địa chỉ được chọn:", selectedAddress);
      setShowAddressSelectionModal(false);
    };
  
    const handleSaveAddress = () => {
      const index = addressList.findIndex((item) => item.id === editingAddress.id);
      if (index !== -1) {
        const updatedList = [...addressList];
        updatedList[index] = editingAddress;
        setAddressList(updatedList);
      }
      setEditingAddress(null);
    };
  
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={showAddressSelectionModal}
        onRequestClose={() => setShowAddressSelectionModal(false)}
      >
        <View style={styles.modalContainer}>
          <FlatList
            data={addressList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.addressItem}
                onPress={() => (editingAddress ? handleSaveAddress() : handleSelectAddress(item))}
              >
                {editingAddress && editingAddress.id === item.id ? (
                  <>
                    <TextInput
                  
                      style={styles.inputText}
                      placeholder="Tên người gửi"
                      value={editingAddress.name}
                      onChangeText={(text) => {
                        setEditingAddress((prev) => ({ ...prev, name: text }));
                      }}
                    />
                    <TextInput
                      style={styles.inputText}
                      placeholder="SĐT người gửi"
                      value={editingAddress.phone}
                      onChangeText={(text) => {
                        setEditingAddress((prev) => ({ ...prev, phone: text }));
                      }}
                    />
                    <TextInput
                      style={styles.inputText}
                      placeholder="Địa chỉ người gửi"
                      value={editingAddress.address}
                      onChangeText={(text) => {
                        setEditingAddress((prev) => ({ ...prev, address: text }));
                      }}
                    />
                    <TouchableOpacity onPress={() => handleSaveAddress()}>
                      <Text style={styles.saveButtonText}>Lưu</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <Text style={styles.addressText}>Tên người gửi: {item.name}</Text>
                    <Text style={styles.addressText}>SĐT người gửi: {item.phone}</Text>
                    <Text style={styles.addressText}>Địa chỉ người gửi: {item.address}</Text>
                    {editingAddress ? null : (
                      <TouchableOpacity onPress={() => handleEditAddress(item)}>
                        <Text style={styles.editButtonText}>Chỉnh sửa</Text>
                      </TouchableOpacity>
                    )}
                  </>
                )}
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.confirmButton} onPress={() => setShowAddressSelectionModal(false)}>
            <Text style={styles.confirmButtonText}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };
  

  const renderInput = (label, placeholder, value, onChangeText, isDimension = false, isDate = false) => (
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerActiveScreen}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textheader1}>Đặt xe</Text>
      </View>

      <View style={styles.TextInputView}>
        <TouchableOpacity style={styles.confirmButton} onPress={handleShowAddressSelectionModal}>
          <Text style={styles.confirmButtonText}>Chọn địa chỉ</Text>
        </TouchableOpacity>

        {/* Danh sách địa chỉ */}


        {renderInput("Trọng lượng:", "Nhập số Kg", weight, setWeight)}
        {renderInput("Kích thước:", "Nhập kích thước", size, setSize)}
        {renderInput("Ngày đi:", "DD:MM:YYYY", date, setDate)}
        {renderInput("Tên người nhận:", "Họ và tên", nameReceiver, setNameReceiver)}
        {renderInput("SĐT người nhận:", "Nhập số điện thoại", phoneReceiver, setPhoneReceiver)}
        {renderInput("Địa chỉ đến:", "Nhập địa chỉ", addressReceiver, setAddressReceiver)}

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPress}>
          <Text style={styles.confirmButtonText}>Xác nhận</Text>
        </TouchableOpacity>

        <AddressSelectionModal />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  headerActiveScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#23AC41',
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
  datePicker: {
    width: '100%',
  },
  confirmButton: {
    backgroundColor: '#23AC41',
    padding: 20,
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  confirmButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  addressItem: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: 400,
  },
  addressText: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
  },
  editButtonText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  saveButtonText: {
    color: 'green',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});

export default TransportScreen;