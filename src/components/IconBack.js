import React from 'react';
import { TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const IconBack = ({ onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{ padding: 10 }, style]}>
      <EntypoIcon name="chevron-left" size={25} color="#000000" />
    </TouchableOpacity>
  );
};

export default IconBack;
