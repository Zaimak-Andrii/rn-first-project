import { Text, View } from 'react-native';
import { format } from 'date-fns';
import stylesFn from './CommentItem.styles';
import { Avatar } from 'components/common';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth.selectors';

export default function CommentItem({ comment, isLast }) {
  const { id } = useSelector(selectUser);
  const { author, message, createdDate } = comment;

  const styles = stylesFn(id === author.id);
  const date = format(new Date(createdDate.toDate()), 'dd-MMMM-yyyy | h:mm');

  return (
    <View style={[styles.container, isLast && { marginBottom: 0 }]}>
      <Avatar style={styles.avatar} source={{ uri: author.avatar }} />

      <View style={styles.commentContainer}>
        <Text style={styles.commentMessage}>{message}</Text>
        <Text style={styles.commentDate}>{date}</Text>
      </View>
    </View>
  );
}
