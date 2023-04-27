import { useCallback, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { AppButton } from 'components/common';
import AppCamera from 'components/AppCamera';
import { PostInput } from 'components/common/PostInput';
import { useLocation } from 'hooks/useLocation';
import styles from './CreatePost.styles';
import { screen } from 'constants';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth.selectors';
import { addPostService } from 'firebase/service';

const schema = object({
  title: string().min(3).max(30).required(),
  locationTitle: string().min(3).max(30).required(),
});

export default function CreatePostScreen() {
  const user = useSelector(selectUser);
  const { navigate } = useNavigation();
  const [photo, setPhoto] = useState(null);
  const { location } = useLocation();
  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      title: '',
      locationTitle: '',
    },
    resolver: yupResolver(schema),
  });
  const isFormValid = isValid && photo && location && !isSubmitting;

  const choosePhotoHandler = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setPhoto(result.assets[0].uri);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const publishPostHandler = async (data) => {
    try {
      const post = { ...data, photo, location: location.coords, owner: user };
      await addPostService(post);

      navigate(screen.POSTS);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const clearPost = () => {
    setPhoto(null);
    reset();
  };

  useFocusEffect(useCallback(() => clearPost, []));

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        {photo ? (
          <Image style={styles.photoImage} source={{ uri: photo }} />
        ) : (
          <AppCamera style={styles.photoCamera} onSetPhoto={setPhoto} />
        )}
      </View>
      <TouchableOpacity style={styles.photoLoadButton} activeOpacity={0.8} onPress={choosePhotoHandler}>
        <Text style={styles.photoLoadButtonText}>Choose photo</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <PostInput control={control} name='title' placeholder='Title...' />
        <PostInput
          control={control}
          name='locationTitle'
          placeholder={'Location...'}
          leftIcon={<Feather name='map-pin' size={24} color='#BDBDBD' />}
        />

        <AppButton
          style={[styles.formButton, isFormValid ? {} : styles.formButtonDisabled]}
          textStyle={isFormValid ? {} : styles.formButtonTextDisabled}
          activeOpacity={isFormValid ? 0.7 : 1}
          text='Publish post'
          onPress={handleSubmit(publishPostHandler)}
        />
      </View>
    </View>
  );
}
