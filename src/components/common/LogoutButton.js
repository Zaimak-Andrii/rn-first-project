import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth.slice';

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <TouchableOpacity onPress={logoutHandler} style={{ marginRight: 10 }}>
      <Feather name='log-out' size={24} color='#BDBDBD' />
    </TouchableOpacity>
  );
};
