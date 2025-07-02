import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import api from '../hooks/useApi';

export default function MapScreen({ navigation }) {
  const [region, setRegion] = useState<any>(null);
  const [spots, setSpots] = useState<any[]>([]);

  const fetchSpots = useCallback(async (lat: number, lng: number) => {
    const { data } = await api.get('/spots', { params: { lat, lng, radius: 8000 } });
    setSpots(data);
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      const loc = await Location.getCurrentPositionAsync({});
      const reg = { latitude: loc.coords.latitude, longitude: loc.coords.longitude, latitudeDelta: 0.05, longitudeDelta: 0.05 };
      setRegion(reg);
      fetchSpots(reg.latitude, reg.longitude);
    })();
  }, []);

  if (!region) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <MapView style={styles.map} initialRegion={region}>
      {spots.map(s => (
        <Marker
          key={s._id}
          coordinate={{ latitude: s.location.coordinates[1], longitude: s.location.coordinates[0] }}
          title={s.name}
          pinColor={s.category === 'Romantic' ? 'pink' : s.category === 'Serene' ? 'teal' : 'purple'}
          onPress={() => navigation.navigate('Detail', { id: s._id })}
        />
      ))}
    </MapView>
  );
}
const styles = StyleSheet.create({ map: { flex: 1 } });
