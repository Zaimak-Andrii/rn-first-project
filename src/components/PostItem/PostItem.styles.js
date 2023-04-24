import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,

    marginBottom: 32,
  },

  imageContainer: {
    width: '100%',
    height: 240,

    overflow: 'hidden',

    borderRadius: 8,
  },

  image: {
    width: '100%',
    height: '100%',

    resizeMode: 'cover',
  },

  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  commentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  commentsText: {},

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: 'underline',
    color: '#212121',
  },
});
