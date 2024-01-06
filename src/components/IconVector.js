import React from "react";
import { View } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const IconVector = ({ library, name, size, color, style }) => {
  const IconComponent = library === 'FontAwesome' ? FontAwesomeIcon : AntDesign;

  return (
    <View style={style}>
      <IconComponent name={name} size={size} color={color} />
    </View>
  );
};

export default IconVector;