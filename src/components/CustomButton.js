import React from 'react';
import { Button } from 'react-native-paper';

const CustomButton = ({ onPress, title, mode, style, textStyle }) => {
  return (
    <Button mode={mode} onPress={onPress} style={style} labelStyle={textStyle}>
      {title}
    </Button>
  );
};

export default CustomButton;
