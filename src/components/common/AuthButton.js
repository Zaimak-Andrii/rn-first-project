import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const AuthButton = ({ text, style, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button, style]} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
  text: {
    paddingVertical: 16,
    paddingHorizontal: 32,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
