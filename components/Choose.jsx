import { Button, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import Backsvg from './Backsvg';

export const Choose = ({navigation}) =>{
    const [fontsLoaded, fontError] = useFonts({
        "Inter_400Regular" : require('../assets/Inter-Regular.ttf'),
      })
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
            zIndex:1,
        },
        
        button :{
            justifyContent:"center",
            padding: 4,
            alignContent:"center"
        },
        button_text:{
            fontSize: 20,
            color: "aliceblue",
            lineHeight: 25,
            // fontFamily: "Inter_400Regular",
            fontWeight: "500",
            textAlign:"center",
            
        },
        button_wrapper:{
            backgroundColor: "#EF3124",
            width: vh(18),
            borderBottomLeftRadius: 23,
            borderBottomRightRadius: 23,
            borderTopLeftRadius:23,
            borderTopRightRadius:23,
        },
        text_random_food:{
            // fontFamily: "Inter_400Regular",
            color: "#FFEDED",
            fontSize: 34,
        },
        container_flex_button:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
        container_zindex:{
            zIndex:-1,
        }
})
    return(
        <View style={styles.container}>
        <Backsvg style={{position:"absolute", top:"-30%", left:"-75%"}}></Backsvg>
        <View style={styles.conteiner_flex}>
            <Text style={styles.text_random_food}>Выбери функцию
             </Text>
             <View style={styles.container_flex_imgs}>
                <View style={styles.container_flex_button}>
                    <ImageBackground style={styles.images} resizeMode="contain" source={require('../assets/cafe.png')}></ImageBackground>
                    <View style={styles.button_wrapper}>
                        <Pressable style={styles.button} onPress={()=>navigation.navigate("Search", {item:"ресторан"})}>
                            <Text style={styles.button_text}>Найти{"\n"}ресторан</Text>
                        </Pressable>
                    </View>
                 </View>
                <View style={styles.container_flex_button}>
                    <ImageBackground style={styles.images} resizeMode="contain" source={require('../assets/bludo.png')}></ImageBackground>
                    <View style={styles.button_wrapper}>
                        <Pressable style={styles.button} onPress={()=>navigation.navigate("Search", {item:"блюдо"})}>
                            <Text style={styles.button_text}>Найти{"\n"}блюдо</Text>
                        </Pressable>
                    </View>
                </View>
             </View>
         </View>
     </View>
    )
}