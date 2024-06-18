import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import BACKSVG from '../assets/img.svg'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { StatusBar } from 'expo-status-bar';
import Backsvg from './Backsvg';
import { Accelerometer } from 'expo-sensors';
import { useState, useEffect } from 'react';
import { Axios } from 'axios';
import * as Location from 'expo-location';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { useFonts } from "expo-font";
import { useQuery } from '@tanstack/react-query';
export const Search = ({route, navigation}) => {
    const [fontsLoaded, fontError] = useFonts({
      "Inter_400Regular" : require('../assets/Inter-Regular.ttf'),
    })
    const [{x,y,z}, setData ] = useState({x:0, y:0,z:0})
    const [shakes, setShakes] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [restaurents, setRestaurents] = useState([])
    const [menu, setMenus] = useState([])
    const [curLocation, setCurLocation] = useState({})
    const {item, curRestaurent} = route.params
       // shirota:curLocation['coords']["latitude"],
          // dolgota:curLocation["coords"]["longitude"]
    const getRestaurents = async () =>{
      let longitude = await String(curLocation["coords"]["longitude"])
      let latitude = await String(curLocation['coords']["latitude"])
      // console.log(latitude)
      const geodata = await {shirota:latitude, dolgota:longitude} 
      console.log(await geodata)
      const response = await fetch("https://e746-5-141-224-24.ngrok-free.app/api/v1/restParse",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(geodata),
        redirect: "follow"
      })
      const json = await response.json()
      setIsLoading(false)
      await setRestaurents(await json["restaurents"]).then(getRandomItem())      
    }
    const renderScreen = () =>{
      if (isLoading==true){
        return <View style={styles.conteiner_flex}> 
                <Text style={styles.text_random_food}>RandomFood</Text>
                <View style={styles.pustota}></View>
                <ImageBackground source={require('../assets/scooter2.png')} resizeMode="contain" style={styles.img_random_food}></ImageBackground>
        </View>
      }
      else{
        return <View style={styles.conteiner_flex}>
                <Text style={styles.text_random_food}>Потряси телефон</Text>
                <View style={styles.container_flex_imgs}>
                    <ImageBackground style={styles.images} source={require('../assets/burg.png')}></ImageBackground>
                    <ImageBackground style={styles.images} source={require('../assets/donut.png')}></ImageBackground>
                    <ImageBackground style={styles.images} source={require('../assets/hotdog.png')}></ImageBackground>
                </View>
                <View style={styles.pustota}></View>
                <View style={styles.container_shake}>
                    <ImageBackground style={styles.img_shake} resizeMode="cover" source={require('../assets/phone.png')}></ImageBackground>
                </View>
                </View> 
      }
    }
    const getRandom = (items) => {
        const min = 0; 
        const max = items.length-1; 
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return items[randomNumber]
    }
    Accelerometer.setUpdateInterval(500)
    const getRandomItem = () =>{
      console.log(isLoading)
      if (!isLoading){
          let randomItem      
        if (item=="ресторан"){
          randomItem = getRandom(restaurents)
        }
        else{
          randomItem = getRandom(curRestaurent["dishes"])
        }
        setShakes(0)
        navigation.navigate("Find", {randomItem:randomItem, item:item})}
    }
    useEffect(()=>{
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
          setCurLocation(location);
        })();
        
        const subsciption = Accelerometer.addListener(setData);
        return ()=> subsciption.remove();
    },[]);
    useEffect(()=>{
        const vectorLength = Math.sqrt(x*x+y*y+z*z)
        if (vectorLength>=1.4){
        console.log("shake")    
        setShakes(shakes+1)
        }
    },[x,y,z,])
    useEffect(()=>{
      if (shakes>=3){
        if (restaurents.length==0){
          (async () => {
            await Location.requestForegroundPermissionsAsync();
            let location = await Location.getCurrentPositionAsync({});
            setCurLocation(location);
            if (isLoading==false){
            getRestaurents()}
          })()
          setIsLoading(true)
        }
        else {getRandomItem()}
      }
    },[shakes])
    const styles = StyleSheet.create({
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
    images:{
        maxWidth: "100%",
        height: vh(16),
        minWidth: vh(20),            
    },
    container_flex_imgs:{
        minWidth: "50%",
        display: "flex",
        flexDirection: "row",
    },
    pustota:{
      height: vw(10),
    },
    img_shake :{
        width: vh(22),
        height: vh(22),
        minHeight: "30%",
        height: "auto",
    },
    container_shake:{
        display: "flex",
        height: vh(30),
        alignItems: "center",
        justifyContent: "center",
    },
  })
    
return(
    <View style={styles.container}>
    <Backsvg style={{position:"absolute",  top:"-30%", left:"-75%"}}></Backsvg>
      {renderScreen()}   
    </View> 
)
}