import { createStackNavigator } from '@react-navigation/stack';
import CommentsScreen from 'screens/Comments/Comments.screen';
import MapScreen from 'screens/Map/Map.screen';
import PostsScreen from 'screens/Posts/Posts.screen';
import { screen } from 'constants';
import { LogoutButton } from 'components/common/LogoutButton';

const Stack = createStackNavigator();

export default function PostsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.POSTS}
        title='Posts'
        options={{
          headerRight: () => <LogoutButton />,
        }}
        component={PostsScreen}
      />
      <Stack.Screen name={screen.COMMENTS} component={CommentsScreen} />
      <Stack.Screen name={screen.MAP} component={MapScreen} />
    </Stack.Navigator>
  );
}
