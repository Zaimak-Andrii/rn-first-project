import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './PostItem.styles';
import { useNavigation } from '@react-navigation/native';
import { screen } from 'constants';

export default function PostItem({ post, isLast }) {
  const { id, photoURL, location, title, locationTitle, comments } = post;
  const { navigate } = useNavigation();

  const goToMapHandler = () => {
    navigate(screen.MAP, { title, location });
  };

  const goToCommentsHandler = () => {
    navigate(screen.COMMENTS, { id, title, photoURL, comments });
  };

  return (
    <View style={[styles.container, isLast && { marginBottom: 64 }]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: photoURL }} />
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.footer}>
        <View style={styles.commentsContainer}>
          <Feather name='message-circle' size={24} color='#BDBDBD' />
          <TouchableOpacity activeOpacity={0.8} onPress={goToCommentsHandler}>
            <Text style={styles.commentsText}>{comments?.length ?? 0}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.locationContainer}>
          <Feather name='map-pin' size={24} color='#BDBDBD' />
          <TouchableOpacity activeOpacity={0.8} onPress={goToMapHandler}>
            <Text style={styles.locationText}>{locationTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
