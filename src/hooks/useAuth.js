import { useEffect, useState } from 'react';
import { auth } from 'firebase/config';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/auth/auth.slice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      console.log('Auth change: ', !!user);
      setIsAuth(!!user);
      setIsLoading(false);

      if (user) {
        dispatch(
          updateUser({
            id: user.uid,
            avatar: user.photoURL,
            email: user.email,
            username: user.displayName,
          })
        );
      }
    });

    return subscribe;
  }, []);

  return { isLoading, isAuth };
};
