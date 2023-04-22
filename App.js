import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-gesture-handler';
import RegistrationScreen from 'screens/auth/Registration/Registration.screen';
import LoginScreen from 'screens/auth/Login/Login.screen';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from 'stack/AuthStack';

export default function App() {
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
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
