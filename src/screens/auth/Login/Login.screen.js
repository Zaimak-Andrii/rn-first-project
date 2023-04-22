import { ImageBackground, Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './Login.styles';
import { EmailInput, PasswordInput, TitleText, AuthButton, LinkButton } from 'components/common';
import useKeyboard from '../../../hooks/useKeyboard';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { screen } from 'constants';

const bg = require('@images/auth-bg.jpg');
const defaultValues = {
  email: '',
  password: '',
};

export default function LoginScreen() {
  const { navigate } = useNavigation();
  const isKeyboardOpen = useKeyboard();
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const touchHandler = () => {
    Keyboard.dismiss();
  };

  const gotoSignUpHandler = () => {
    navigate(screen.SIGN_UP);
  };

  const submitFormHandler = (data) => {
    console.log('Login data: ', data);
    reset();
  };

  return (
    <TouchableWithoutFeedback
      style={{ borderColor: 'red', borderWidth: 1, borderStyle: 'solid' }}
      onPress={touchHandler}
    >
      <View style={styles.container}>
        <ImageBackground source={bg} style={styles.background}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''}>
            <View style={[styles.content, isKeyboardOpen ? styles.keyboardOpen : {}]}>
              <TitleText title='Sign in' style={styles.title} />
              <View style={styles.form}>
                <EmailInput name='email' control={control} placeholder='Email' />
                <PasswordInput name='password' control={control} placeholder='Password' />
                <AuthButton text='Sign In' style={{ marginTop: 27 }} onPress={handleSubmit(submitFormHandler)} />
                <View style={styles.textContainer}>
                  <Text style={styles.text}>Don't have an account?</Text>
                  <LinkButton text=' Sign Up' onPress={gotoSignUpHandler} />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
