import { ImageBackground, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import BACKSVG from '../assets/img.svg'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { useFonts } from "expo-font";
import Backsvg from './Backsvg';


export const Find = ({route, navigation}) => {
    const [fontsLoaded, fontError] = useFonts({
        "Inter_400Regular" : require('../assets/Inter-Regular.ttf'),
      })
    const {randomItem, item} = route.params
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
    //   fontFamily: "Inter_400Regular",
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
    container_flex_button:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    button :{
        justifyContent: "center",
        padding: 4,
        alignContent:"center",
    },
    button_text:{
        fontSize: 20,
        color: "aliceblue",
        lineHeight: 25,
        // fontFamily: "Inter_400Regular",
        fontWeight: "500",
        textAlign:"center",
        
    },
    button_wrapper: {
        backgroundColor: "#EF3124",
        width: vh(18),
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 23,
        borderTopLeftRadius:23,
        borderTopRightRadius:23,
        margin: 15,
        minHeight: 60,
        justifyContent:"center"
    },
    imageContainer :{
        maxWidth: "50%",
        height: "auto",
        maxHeight: vh(17),      
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        overflow:"hidden"
    },
    text_area :{
        backgroundColor:"#F0F8FF",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        margin: vh(5),
        maxWidth: "100%",
        height: "auto",
        fontSize: 30,
        // fontFamily: "Inter_400Regular", 
    },
    text_item:{
        textAlign:"left",
        padding:10,
        
    },
    imageItem:{
        maxHeight:"100%",
        maxWidth:"100%"
    },
    flex_container_find:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:30,
    }
  })

    renderMenuButton = () =>{
        if (item=="ресторан"){
            if (randomItem["dishes"].length==0){
                return <Pressable style={styles.button} >
                <Text style={styles.button_text} >Меню отсутствует</Text>
            </Pressable>
            }
            return  <Pressable style={styles.button} >
                        <Text style={styles.button_text} onPress={()=>navigation.navigate("Search", {item:"блюдо", curRestaurent:randomItem})}>Найти блюдо</Text>
                    </Pressable>}
        return  <Pressable style={styles.button} onPress={()=>navigation.navigate("Search", {item:"ресторан"})}>
                    <Text style={styles.button_text}>Выбрать другой ресторан</Text>
                </Pressable>
    }
    renderItem = () => {
        if (item=="ресторан"){
            return     <View style={styles.flex_container_find}>
            <View style={styles.imageContainer}>
            <Image style={{width: 200, height: 200}} source={{uri : randomItem["picture"]}} ></Image>
            </View>
            <View style={styles.text_area}>
                <Text style={styles.text_item}>{randomItem["name"]}</Text>
                <Text style={styles.text_item}>Описание ресторана</Text>
            </View>
            <View style={styles.container_flex_button}>
                <View style={styles.button_wrapper}>
                    {this.renderMenuButton()}
                </View>
                <View style={styles.button_wrapper}>
                    <Pressable style={styles.button} >
                        <Text style={styles.button_text}>Маршрут</Text>
                    </Pressable>
                </View>
            </View>
        </View>
        }
        else{
            return     <View style={styles.flex_container_find}>
            <View style={styles.imageContainer}>
            <Image style={styles.imageItem} source={require('../assets/bludo.png')}></Image>
            </View>
            <View style={styles.text_area}>
                <Text style={styles.text_item}>{randomItem["name"]}</Text>
                <Text style={styles.text_item}>{randomItem["price"]} рублей</Text>
                <Text style={styles.text_item}>Описание блюда</Text>
            </View>
            <View style={styles.container_flex_button}>
                <View style={styles.button_wrapper}>
                    <Pressable style={styles.button} >
                        <Text style={styles.button_text}>Заказать</Text>
                    </Pressable>
                </View>
                <View style={styles.button_wrapper}>
                    <Pressable style={styles.button} onPress={()=>navigation.navigate("Search", {item:"ресторан"})}>
                        <Text style={styles.button_text}>Выбрать другой ресторан</Text>
                    </Pressable>
                </View>
            </View>
        </View>
        }
    }
return(
    <View style={styles.container}>
        <Backsvg style={{position:"absolute", top:"-30%", left:"-75%"}}></Backsvg>
        <View style={styles.conteiner_flex}>
            <Text style={styles.text_random_food}>Мы нашли</Text>
            {this.renderItem()}
        </View>
    </View>
)
}