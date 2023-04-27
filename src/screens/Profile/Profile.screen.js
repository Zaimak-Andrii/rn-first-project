import { FlatList, ImageBackground, Text, View } from 'react-native';
import styles from './Profile.styles';
import { Avatar, LogoutButton } from 'components/common';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth.selectors';
import { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import PostItem from 'components/PostItem';
import { db } from 'firebase/config';

const bg = require('@images/auth-bg.jpg');

export default function ProfileScreen() {
  const { id, avatar, username } = useSelector(selectUser);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), where('owner.id', '==', id));
    const subscribe = onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return subscribe;
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.background}>
        <View style={styles.content}>
          <Avatar style={styles.avatar} source={{ uri: avatar }} />
          <LogoutButton style={styles.logoutButton} />
          <Text style={styles.name}>{username}</Text>
          <FlatList
            style={styles.list}
            data={posts}
            renderItem={({ item: post, index }) => <PostItem post={post} isLast={index === posts.length - 1} />}
            keyExtractor={(post) => post.title}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
