import { forwardRef, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const Input = ({ style, ...props }) => {
  const [focusStyle, setFocusStyle] = useState({});

  const focusHandler = () => {
    setFocusStyle({
      backgroundColor: 'transparent',
      borderColor: '#FF6C00',
    });
  };
  const blurHandler = () => {
    setFocusStyle({});
  };
  return (
    <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      inputMode='text'
      keyboardType='default'
      placeholderTextColor='#BDBDBD'
      style={[styles.input, focusStyle, style]}
      onFocus={focusHandler}
      onBlur={blurHandler}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 16,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',

    backgroundColor: '#F6F6F6',

    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 8,
  },
});
