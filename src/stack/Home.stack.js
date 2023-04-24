import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screen } from 'constants';
import CreatePostScreen from 'screens/CreatePost/CreatePost.screen';
import ProfileScreen from 'screens/Profile/Profile.screen';
import PostsStack from './Posts.stack';
import BottomTabIcon from 'components/BottomTabIcon';
import { BackArrow } from 'components/common';

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
        name={screen.HOME}
        options={{
          title: 'Posts',
          headerShown: false,
          tabBarIcon: (props) => <BottomTabIcon {...props} name='grid' />,
        }}
        component={PostsStack}
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

/*

<AntDesign name="appstore-o" size={24} color="black" />

<Feather name="grid" size={24} color="black" />

<Ionicons name="grid-outline" size={24} color="black" />

*/
