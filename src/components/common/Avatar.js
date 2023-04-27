import { Image, StyleSheet, View } from 'react-native';

export const Avatar = ({ source, style, ...props }) => {
  return <View style={[styles.container, style]}>{source && <Image source={source} style={styles.image} />}</View>;
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',

    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  image: {
    width: '100%',
    height: '100%',

    resizeMode: 'cover',
  },
});
