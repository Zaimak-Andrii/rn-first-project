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

    paddingTop: 32,
    paddingBottom: 144,
    paddingHorizontal: 16,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    backgroundColor: '#ffffff',
  },

  keyboardOpen: {
    marginBottom: -241,
  },

  title: {
    marginBottom: 32,
  },

  form: {
    gap: 16,
  },
});
