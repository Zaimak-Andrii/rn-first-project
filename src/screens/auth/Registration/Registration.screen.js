import { ImageBackground, KeyboardAvoidingView, Text, View } from 'react-native';
import styles from './Registration.styles';
import { EmailInput, Input, PasswordInput, TitleText } from 'components/common';

const bg = require('@images/auth-bg.jpg');

export default function RegistrationScreen() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground source={bg} style={styles.background}>
        <View style={styles.content}>
          <TitleText title='Registration' style={styles.title} />
          <View style={styles.form}>
            <Input placeholder='Login' />
            <EmailInput placeholder='Email' />
            <PasswordInput placeholder='Password' />
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
