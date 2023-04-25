import { ImageBackground, Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './Registration.styles';
import { EmailInput, Input, PasswordInput, TitleText, LinkButton, Avatar, AppButton } from 'components/common';
import useKeyboard from '../../../hooks/useKeyboard';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { screen } from 'constants';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/auth.slice';

const bg = require('@images/auth-bg.jpg');
const defaultValues = {
  username: '',
  email: '',
  password: '',
};

export default function RegistrationScreen() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const isKeyboardOpen = useKeyboard();
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const touchHandler = () => {
    Keyboard.dismiss();
  };

  const gotoSignInHandler = () => {
    navigate(screen.SIGN_IN);
  };

  const submitFormHandler = (data) => {
    console.log('Registration data: ', data);
    dispatch(registration({ username: data.username, email: data.email }));
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
              <View style={styles.avatarContainer}>
                <Avatar source={null} style={styles.avatar} />
              </View>
              <TitleText title='Sign up' style={styles.title} />
              <View style={styles.form}>
                <Input name='username' placeholder='Username' control={control} />
                <EmailInput name='email' placeholder='Email' control={control} />
                <PasswordInput name='password' placeholder='Password' control={control} />
                <AppButton text='Sign up' style={{ marginTop: 27 }} onPress={handleSubmit(submitFormHandler)} />
                <View style={styles.textContainer}>
                  <Text style={styles.text}>Already have an account?</Text>
                  <LinkButton text=' Sign In' onPress={gotoSignInHandler} />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
