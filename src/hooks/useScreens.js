import { AuthStack, HomeStack } from 'stack';

export const useScreens = (isAuth) => {
  return isAuth ? <HomeStack /> : <AuthStack />;
};
