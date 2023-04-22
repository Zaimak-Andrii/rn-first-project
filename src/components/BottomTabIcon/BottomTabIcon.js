import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function BottomTabIcon({ focused, color, name }) {
  return (
    <View
      style={
        focused && {
          backgroundColor: '#FF6C00',
          borderRadius: 20,
          paddingHorizontal: 23,
          paddingVertical: 8,
          color: '#ffffff',
        }
      }
    >
      <Feather name={name} size={24} color={focused ? '#ffffff' : color} />
    </View>
  );
}
