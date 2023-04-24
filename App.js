import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useScreens } from 'hooks/useScreens';
import { selectIsAuth } from 'redux/auth/auth.selectors';

export default function App() {
  const isAuth = useSelector(selectIsAuth);
  const screens = useScreens(isAuth);
  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('@fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('@fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('@fonts/Roboto/Roboto-Bold.ttf'),
  });

  const layoutRootViewHandler = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={layoutRootViewHandler}>
      <NavigationContainer>{screens}</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
