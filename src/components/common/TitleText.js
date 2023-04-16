import { StyleSheet, Text } from 'react-native';

export const TitleText = ({ title, style }) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
    textAlign: 'center',
  },
});
