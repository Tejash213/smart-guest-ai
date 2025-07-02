import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import SpotDetail from './screens/SpotDetail';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Hidden Spots' }} />
        <Stack.Screen name="Detail" component={SpotDetail} options={{ title: 'Spot Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
