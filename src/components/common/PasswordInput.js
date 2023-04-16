import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Input } from './Input';
import { useState } from 'react';

export const PasswordInput = (props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const clickShowHandler = () => {
    setIsShowPassword((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Input inputMode='text' keyboardType='default' secureTextEntry={!isShowPassword} {...props} />
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={clickShowHandler}>
        <Text style={styles.buttonText}>{isShowPassword ? 'Hide' : 'Show'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  button: {
    position: 'absolute',
    top: '50%',
    right: 16,

    padding: 8,

    transform: [{ translateY: -18 }],
  },

  buttonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});
