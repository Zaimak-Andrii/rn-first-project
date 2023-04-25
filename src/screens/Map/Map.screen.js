import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './Map.styles';
import { useRoute } from '@react-navigation/native';

export default function MapScreen() {
  const { params } = useRoute();

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={{ ...params.location, latitudeDelta: 0.01, longitudeDelta: 0.01 }}>
        <Marker title={params.title} coordinate={params.location} />
      </MapView>
    </View>
  );
}
