import React from 'react';
import { TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo'; // Sử dụng icon từ Ionicons (bạn có thể chọn icon pack khác)

const IconBack = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginLeft: 10 }}>
      <EntypoIcon name="chevron-left" size={20} color="#000000" />
    </TouchableOpacity>
  );
};

export default IconBack;
