import { useState } from 'react';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { signUpThunk } from 'redux/auth/auth.thunk';
import styles from './Registration.styles';
import { EmailInput, Input, PasswordInput, TitleText, LinkButton, Avatar, AppButton } from 'components/common';
import useKeyboard from '../../../hooks/useKeyboard';
import { screen } from 'constants';

const bg = require('@images/auth-bg.jpg');
const defaultValues = {
  username: 'Andrii Zaimak',
  email: 'dev.andrii.zaimak@gmail.com',
  password: '1234567890',
};

export default function RegistrationScreen() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const isKeyboardOpen = useKeyboard();
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });
  const [avatar, setAvatar] = useState(null);

  const touchHandler = () => {
    Keyboard.dismiss();
  };

  const gotoSignInHandler = () => {
    navigate(screen.SIGN_IN);
  };

  const chooseAvatarHandler = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setAvatar(result.assets[0].uri);
      }
    } catch (error) {}
  };

  const pressAvatarButtonHandler = async () => {
    if (avatar) {
      setAvatar(null);
    } else {
      chooseAvatarHandler();
    }
  };

  const submitFormHandler = async (data) => {
    await dispatch(signUpThunk({ ...data, avatar }));
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
                <Avatar source={avatar && { uri: avatar }} style={styles.avatar} />
                <TouchableOpacity style={styles.avatarAddButton} activeOpacity={0.8} onPress={pressAvatarButtonHandler}>
                  {avatar ? (
                    <AntDesign name='closecircleo' size={25} color='#BDBDBD' />
                  ) : (
                    <AntDesign name='pluscircleo' size={25} color='#FF6C00' />
                  )}
                </TouchableOpacity>
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
