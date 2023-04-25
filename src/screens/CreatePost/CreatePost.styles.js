import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 16,
    paddingVertical: 32,

    backgroundColor: '#ffffff',
  },

  photoContainer: {
    width: '100%',
    height: 240,
    marginBottom: 8,

    overflow: 'hidden',

    borderRadius: 8,
    backgroundColor: '#F6F6F6',

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E8E8E8',
  },

  photoImage: {
    position: 'absolute',
    left: 0,
    top: 0,

    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  photoLoadButton: {},
  photoLoadButtonText: {
    marginBottom: 32,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },

  form: {
    gap: 16,
  },
  formGroup: {
    position: 'relative',
    justifyContent: 'center',
  },
  formInput: {
    paddingVertical: 16,

    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#E8E8E8',
  },
  formInputIcon: {
    position: 'absolute',
  },

  formButton: {
    marginTop: 32,
  },

  formButtonDisabled: {
    backgroundColor: '#F6F6F6',
  },

  formButtonTextDisabled: {
    color: '#BDBDBD',
  },
});
