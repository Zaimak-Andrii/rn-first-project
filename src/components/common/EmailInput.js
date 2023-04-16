import { Input } from './Input';

export const EmailInput = (props) => {
  return <Input inputMode='email' keyboardType='email-address' placeholder='Email' {...props} />;
};
