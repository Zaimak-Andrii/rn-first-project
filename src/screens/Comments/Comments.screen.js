import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './Comments.styles';
import { useForm } from 'react-hook-form';
import { PostInput } from 'components/common';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth.selectors';
import { addCommentToPostService } from 'firebase/service';
import { Timestamp, collection, doc, onSnapshot } from 'firebase/firestore';
import CommentItem from 'components/CommentItem';
import { db } from 'firebase/config';

const schema = object({
  message: string().required(),
});

export default function CommentsScreen() {
  const user = useSelector(selectUser);
  const { params } = useRoute();
  const { id, photoURL } = params;
  const [comments, setComments] = useState([]);
  const flatListRef = useRef(null);
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const sendMessageHandler = async (data) => {
    try {
      const comment = { id: Date.now(), ...data, author: user, createdDate: Timestamp.now() };
      await addCommentToPostService(id, comment);

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const changeListHandler = () => {
    flatListRef.current.scrollToEnd({ animated: true });
  };

  // clear message input when screen inactive
  useFocusEffect(useCallback(() => reset, []));

  useEffect(() => {
    const subscribe = onSnapshot(doc(db, `posts`, id), (doc) => {
      setComments(doc.data().comments);
    });

    return subscribe;
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: photoURL }} />
      </View>
      <FlatList
        ref={flatListRef}
        style={styles.list}
        data={comments}
        renderItem={({ item: comment, index }) => (
          <CommentItem comment={comment} isLast={index === comments.length - 1} />
        )}
        keyExtractor={(comment) => comment.id}
        onContentSizeChange={changeListHandler}
      />
      <View style={styles.form}>
        <PostInput
          name='message'
          placeholder='Comment...'
          control={control}
          rightIcon={
            <TouchableOpacity style={styles.formButton} activeOpacity={0.8} onPress={handleSubmit(sendMessageHandler)}>
              <Feather name='arrow-up' size={20} color='#FFFFFF' />
            </TouchableOpacity>
          }
          inputStyle={styles.formInput}
        />
      </View>
    </View>
  );
}
