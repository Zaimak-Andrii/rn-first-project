import { createStackNavigator } from '@react-navigation/stack';
import { screen } from 'constants';
import LoginScreen from 'screens/auth/Login/Login.screen';
import RegistrationScreen from 'screens/auth/Registration/Registration.screen';

const Stack = createStackNavigator();
const options = { headerShown: false };

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.SIGN_IN} component={LoginScreen} options={options} />
      <Stack.Screen name={screen.SIGN_UP} component={RegistrationScreen} options={options} />
    </Stack.Navigator>
  );
}
