import { StyleSheet } from 'react-native';

export default (isOwner) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 24,

      flexDirection: isOwner ? 'row-reverse' : 'row',
    },

    avatarContainer: {
      width: '100%',
      height: 240,

      overflow: 'hidden',

      borderRadius: 8,
    },

    avatar: {
      width: 28,
      height: 28,

      borderRadius: 28,
    },

    commentContainer: {
      flex: 1,

      marginLeft: isOwner ? 0 : 16,
      marginRight: isOwner ? 16 : 0,
      padding: 16,

      backgroundColor: '#e8e8e8',
      borderRadius: 6,
      borderTopLeftRadius: isOwner ? 6 : 0,
      borderTopRightRadius: isOwner ? 0 : 6,
    },
    commentMessage: {
      fontFamily: 'Roboto-Regular',
      fontSize: 13,
      lineHeight: 18,
      color: '#212121',
    },
    commentDate: {
      alignSelf: isOwner ? 'flex-start' : 'flex-end',

      fontFamily: 'Roboto-Regular',
      fontSize: 10,
      lineHeight: 12,
      color: '#BDBDBD',
    },
  });
