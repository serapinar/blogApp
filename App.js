import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateScreen from "./screens/CreateScreen";
import IndexScreen from "./screens/IndexScreen";
import ShowScreen from "./screens/ShowScreen";
import EditScreen from "./screens/EditScreen";
import {TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {EvilIcons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
import {Provider} from "./context/BlogContext";

export default function App() {
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerTitle: "MyBlog"}}>
                    <Stack.Screen name="Index" component={IndexScreen} options={({navigation}) => ({
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                                <AntDesign name="plus" size={24} color="black"/>
                            </TouchableOpacity>
                        )
                    })}
                    />
                    <Stack.Screen name="Show" component={ShowScreen} options={({navigation, route}) => ({
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate("Edit", {id: route.params.id})}>
                                <EvilIcons name="pencil" size={34} color="black"/>
                            </TouchableOpacity>
                        )
                    })}
                    />
                    <Stack.Screen name="Create" component={CreateScreen}/>
                    <Stack.Screen name="Edit" component={EditScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    );
};
