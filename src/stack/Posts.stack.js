import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screen } from 'constants';
import CreatePostScreen from 'screens/CreatePost/CreatePost.screen';
import ProfileScreen from 'screens/Profile/Profile.screen';
import BottomTabIcon from 'components/BottomTabIcon';
import PostsScreen from 'screens/Posts/Posts.screen';
import { BackArrow, LogoutButton } from 'components/common';

const Stack = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
        },
      }}
    >
      <Stack.Screen
        name={screen.POSTS}
        options={{
          title: 'Posts',
          tabBarIcon: (props) => <BottomTabIcon {...props} name='grid' />,
          headerRight: () => <LogoutButton />,
        }}
        component={PostsScreen}
      />
      <Stack.Screen
        name={screen.CREATE_POST}
        options={{
          title: 'Create new post',
          tabBarIcon: (props) => <BottomTabIcon {...props} name='plus' />,
          headerLeft: () => <BackArrow />,
          tabBarStyle: {
            display: 'none',
          },
        }}
        component={CreatePostScreen}
      />
      <Stack.Screen
        name={screen.PROFILE}
        options={{
          headerShown: false,
          tabBarIcon: (props) => <BottomTabIcon {...props} name='user' />,
        }}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}
