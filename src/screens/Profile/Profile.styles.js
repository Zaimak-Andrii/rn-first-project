import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,

    resizeMode: 'cover',
  },

  content: {
    flex: 1,

    position: 'relative',
    marginTop: 147,

    paddingTop: 92,
    paddingHorizontal: 16,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    backgroundColor: '#ffffff',
  },

  avatar: {
    position: 'absolute',
    top: -60,

    width: 120,
    height: 120,

    alignSelf: 'center',
  },

  logoutButton: {
    position: 'absolute',

    top: 22,
    right: 16,
  },

  name: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    color: '#212121',
  },

  list: {
    marginTop: 32,
  },
});
