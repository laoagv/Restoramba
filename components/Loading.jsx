    import { ImageBackground, StyleSheet, Text, View } from 'react-native';
    import BACKSVG from '../assets/img.svg'
    import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
    import { StatusBar } from 'expo-status-bar';
    import { useState, useEffect } from 'react';
    import { Inter_400Regular } from '@expo-google-fonts/inter';
    import { useFonts } from "expo-font";
    import Backsvg from './Backsvg';


export const Loading = ({route, navigation}) => {
    const [fontsLoaded, fontError] = useFonts({
      "Inter_400Regular" : require('../assets/Inter-Regular.ttf'),
    })
    const styles =StyleSheet.create({
      container: {
        top: 0,
        left: 0,
        width: vw(100),
        height: vh(130),
      },
      conteiner_flex: {
        minWidth: '50%',
        minHeight: '70%',
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      },
        text_random_food:{
          // fontFamily: "Inter_400Regular",
          color: "#FFEDED",
          fontSize: 34,
        },
        img_random_food:{
          minHeight: vh(30),
          minWidth: vh(50),
          height: "auto",
          maxWidth: "100%",
        },
        pustota:{
          height: vw(10),
        }
      })
    const {isLoading,item} = route.params
    useEffect(()=>{
      if (!isLoading){
        navigation.navigate("Find", {item:item})
      }
    }, [isLoading])
    return(
    <View style={styles.container}>
            <Backsvg style={{position:"absolute", top:"-30%", left:"-75%"}}></Backsvg>
        <View style={styles.conteiner_flex}>
            <Text style={styles.text_random_food}>RandomFood</Text>
             <View style={styles.pustota}></View>
             <ImageBackground source={require('../assets/scooter2.png')} resizeMode="contain" style={styles.img_random_food}></ImageBackground>
         </View>
      <StatusBar style="auto" />
    </View>
    )
  }