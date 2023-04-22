import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const LinkButton = ({ text, style, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button, style]} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {},
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    textAlign: 'center',
  },
});
