import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import api from '../hooks/useApi';

export default function SpotDetail({ route }) {
  const { id } = route.params;
  const [spot, setSpot] = useState<any>(null);

  useEffect(() => {
    api.get(`/spots/${id}`).then(res => setSpot(res.data));
  }, [id]);

  if (!spot) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: '600' }}>{spot.name}</Text>
      <Text style={{ marginTop: 8 }}>{spot.description}</Text>
    </View>
  );
}
