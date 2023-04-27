import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,

    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 32,

    backgroundColor: '#ffffff',
  },

  imageContainer: {
    width: '100%',
    height: 240,

    overflow: 'hidden',

    borderRadius: 8,

    backgroundColor: '#e8e8e8',
  },

  image: {
    width: '100%',
    height: '100%',

    resizeMode: 'cover',
  },

  list: {
    flex: 1,
  },

  form: {
    marginTop: 'auto',

    width: '100%',
  },
  formGroup: {},
  formInput: {
    paddingHorizontal: 16,

    backgroundColor: '#F6F6F6',

    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  formButton: {
    width: 34,
    height: 34,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FF6C00',
    borderRadius: 20,
  },
});
