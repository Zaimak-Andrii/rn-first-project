import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const BackArrow = () => {
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity onPress={goBack} style={{ marginLeft: 16 }}>
      <Feather name='arrow-left' size={24} color='rgba(33, 33, 33, 0.8)' />
    </TouchableOpacity>
  );
};
