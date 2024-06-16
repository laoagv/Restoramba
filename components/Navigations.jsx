import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Choose } from "./Choose";
import { Search } from "./Search";
import { Find } from "./Find";
import { Loading } from "./Loading";
import { Inter_400Regular } from '@expo-google-fonts/inter';


const Stack = createNativeStackNavigator();

export const Navigations = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
              }}>
                <Stack.Screen name="Choose" component={Choose} ></Stack.Screen>
                <Stack.Screen name="Search" component={Search} ></Stack.Screen>
                <Stack.Screen name="Find" component={Find}></Stack.Screen>
                <Stack.Screen name="Loading" component={Loading}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}