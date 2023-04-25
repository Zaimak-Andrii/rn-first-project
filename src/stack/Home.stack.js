import { createStackNavigator } from '@react-navigation/stack';
import { screen } from 'constants';
import PostsStack from './Posts.stack';
import CommentsScreen from 'screens/Comments/Comments.screen';
import MapScreen from 'screens/Map/Map.screen';
import { BackArrow } from 'components/common';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.HOME} options={{ headerShown: false }} component={PostsStack} />
      <Stack.Screen
        name={screen.COMMENTS}
        options={{ titlce: 'Comments', headerLeft: () => <BackArrow /> }}
        component={CommentsScreen}
      />
      <Stack.Screen
        name={screen.MAP}
        options={{ title: 'Map', headerLeft: () => <BackArrow /> }}
        component={MapScreen}
      />
    </Stack.Navigator>
  );
}
