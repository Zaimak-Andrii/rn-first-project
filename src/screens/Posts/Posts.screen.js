import { FlatList, Text, View } from 'react-native';
import styles from './Posts.styles';
import PostItem from 'components/PostItem/PostItem';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from 'firebase/config';

export default function PostsScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const subscribe = onSnapshot(collection(db, 'posts'), (data) => {
      setPosts(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return subscribe;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={posts}
        renderItem={({ item: post, index }) => <PostItem post={post} isLast={index === posts.length - 1} />}
        keyExtractor={(post) => post.title}
      />
    </View>
  );
}
