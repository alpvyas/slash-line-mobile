import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from './src/store';
import Landing from './src/screens/Landing';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();
const store = configureStore();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Landing" component={Landing}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};
