import { useCallback } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './Comments.styles';
import { useForm } from 'react-hook-form';
import { PostInput } from 'components/common';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = object({
  message: string().required(),
});

export default function CommentsScreen() {
  const { params } = useRoute();
  const { photo, comments } = params;
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const sendMessageHandler = (data) => {
    console.log('Message', data);
    reset();
  };

  // clear message input when screen inactive
  useFocusEffect(useCallback(() => reset, []));

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: photo }} />
      </View>
      <FlatList style={styles.list} />
      <View style={styles.form}>
        <PostInput
          name='message'
          placeholder='Comment...'
          control={control}
          rightIcon={
            <TouchableOpacity style={styles.formButton} activeOpacity={0.8} onPress={handleSubmit(sendMessageHandler)}>
              <Feather name='arrow-up' size={20} color='#FFFFFF' />
            </TouchableOpacity>
          }
          inputStyle={styles.formInput}
        />
      </View>
    </View>
  );
}
