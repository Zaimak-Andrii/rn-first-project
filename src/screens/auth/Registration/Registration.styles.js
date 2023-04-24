import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  content: {
    position: 'relative',

    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    backgroundColor: '#ffffff',
  },

  keyboardOpen: {
    marginBottom: -175,
  },

  avatarContainer: {
    position: 'absolute',
    top: -60,
    alignSelf: 'center',
  },

  avatar: {
    width: 120,
    height: 120,
  },

  title: {
    marginBottom: 32,
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    textAlign: 'center',
  },

  form: {
    gap: 16,
  },
});
