import { useCallback, useEffect, useState } from 'react';
import * as Location from 'expo-location';

const defaultOptions = {
  advancedInfo: false,
};

export const useLocation = (options = defaultOptions) => {
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  const getLocation = useCallback(async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      if (!location) {
        setError('Location not found');
        return;
      }

      setLocation({
        coords: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      });

      if (!options.advancedInfo) return;

      const [advancedLocation] = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (!advancedLocation) return;

      setLocation((prev) => ({
        ...prev,
        advanced: { city: advancedLocation.city, country: advancedLocation.country },
      }));
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  return { location, error };
};
