import { createStackNavigator } from '@react-navigation/stack';
import CommentsScreen from 'screens/Comments/Comments.screen';
import MapScreen from 'screens/Map/Map.screen';
import PostsScreen from 'screens/Posts/Posts.screen';
import { screen } from 'constants';

const Stack = createStackNavigator();

export default function PostsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.POSTS} title='Posts' component={PostsScreen} />
      <Stack.Screen name={screen.COMMENTS} component={CommentsScreen} />
      <Stack.Screen name={screen.MAP} component={MapScreen} />
    </Stack.Navigator>
  );
}
