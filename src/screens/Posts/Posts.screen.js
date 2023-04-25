import { FlatList, Text, View } from 'react-native';
import styles from './Posts.styles';
import { useSelector } from 'react-redux';
import { selectPosts } from 'redux/posts/posts.selectors';
import PostItem from 'components/PostItem/PostItem';

export default function PostsScreen() {
  const posts = useSelector(selectPosts);

  console.log('Posts', posts);
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
