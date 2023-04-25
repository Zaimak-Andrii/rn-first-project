import { cloneElement } from 'react';
import { useController } from 'react-hook-form';
import { StyleSheet, TextInput, View } from 'react-native';

export const PostInput = ({ control, inputStyle, groupStyle, leftIcon, rightIcon, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });

  return (
    <View style={[styles.group, groupStyle]}>
      {leftIcon && cloneElement(leftIcon, { style: [leftIcon.props.style, styles.icon] })}
      <TextInput
        style={[styles.input, leftIcon && styles.inputLeftPadding, rightIcon && styles.inputRightPadding, inputStyle]}
        autoCapitalize='none'
        autoCorrect={false}
        inputMode='text'
        keyboardType='default'
        placeholderTextColor='#BDBDBD'
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        ref={field.ref}
        {...props}
      />
      {rightIcon && cloneElement(rightIcon, { style: [rightIcon.props.style, styles.icon, styles.iconRight] })}
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    position: 'relative',
    justifyContent: 'center',
  },

  input: {
    paddingVertical: 16,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',

    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#E8E8E8',
  },

  inputLeftPadding: {
    paddingLeft: 28,
  },

  inputRightPadding: {
    paddingRight: 50,
  },

  icon: {
    position: 'absolute',
  },

  iconRight: {
    right: 8,
  },
});
