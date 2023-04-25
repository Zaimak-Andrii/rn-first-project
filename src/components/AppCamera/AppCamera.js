import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './AppCamera.styles';

export default function AppCamera({ style, onSetPhoto }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);

  useEffect(() => {
    requestPermission();
  }, []);

  const toggleCameraType = () => {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const snapHandler = async () => {
    if (!cameraRef.current) return;

    try {
      const result = await cameraRef.current.takePictureAsync();
      onSetPhoto(result.uri);
    } catch (error) {
      console.error(error);
    }
  };

  const camera = (
    <Camera ref={cameraRef} style={styles.camera} type={type}>
      <View style={styles.cameraButtonsContainer}>
        <TouchableOpacity style={styles.cameraToggleButton} onPress={toggleCameraType} activeOpacity={0.8}>
          <Ionicons name='sync' size={24} color='#ffffff' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraSnapButton} onPress={snapHandler} activeOpacity={0.8}>
          <Ionicons name='ios-camera-sharp' size={24} color='#ffffff' />
        </TouchableOpacity>
      </View>
    </Camera>
  );

  const accessDenied = (
    <View style={styles.cameraAccessContainer}>
      <Text style={styles.cameraAccessText}>Access to camera is denided.</Text>
      <Text style={styles.cameraAccessText}>Allow access in your phone settings.</Text>
    </View>
  );

  return <View style={[styles.container, style]}>{permission && (permission.granted ? camera : accessDenied)}</View>;
}
