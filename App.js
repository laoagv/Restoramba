import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import BACKSVG from './assets/img.svg'
import { Loading } from './components/Loading';
import { Choose } from './components/Choose';
import { Find } from './components/Find';
import { Search } from './components/Search';
import { Navigations } from './components/Navigations';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { useFonts } from "expo-font";
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter_400Regular" : require('./assets/Inter-Regular.ttf'),
  })
  
  return (
    <Navigations/>    
  );
}


