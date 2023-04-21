import { ImageBackground, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';
import styles from './Registration.styles';
import { EmailInput, Input, PasswordInput, TitleText, AuthButton, LinkButton } from 'components/common';
import useKeyboard from '../../../hooks/useKeyboard';
import { Avatar } from 'components/common/Avatar';
import { useForm } from 'react-hook-form';

const bg = require('@images/auth-bg.jpg');
const defaultValues = {
  username: '',
  email: '',
  password: '',
};

export default function RegistrationScreen() {
  const isKeyboardOpen = useKeyboard();
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const touchHandler = () => {
    Keyboard.dismiss();
  };

  const submitFormHandler = (data) => {
    console.log('Registration data: ', data);
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
                <Avatar source={bg} style={styles.avatar} />
              </View>
              <TitleText title='Sign up' style={styles.title} />
              <View style={styles.form}>
                <Input name='username' placeholder='Username' control={control} />
                <EmailInput name='email' placeholder='Email' control={control} />
                <PasswordInput name='password' placeholder='Password' control={control} />
                <AuthButton text='Sign up' style={{ marginTop: 27 }} onPress={handleSubmit(submitFormHandler)} />
                <LinkButton text='Already have an account? Sign in' />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
