import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export default () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    let keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardOpen(true));
    let keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardOpen(false));

    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, []);

  return isKeyboardOpen;
};
