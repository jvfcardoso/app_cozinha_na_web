import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TelaLogin } from '../components/CustomNavigator';
import Home from '../src/pages/Home';
import Cursos from '../src/pages/Cursos';
import Receitas from '../src/pages/Receitas';
import Sobre from '../src/pages/Sobre';
import ButtonHome from '../components/buttonHome';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
            <Tab.Navigator
                borderTopColor='transparent'
                initialRouteName="Receitas"
                screenOptions={{
                    tabBarStyle:{
                        backgroundColor: '#FCF3C2',
                        borderTopColor: 'transparent',
                        paddingBottom: 5,
                        paddingTop: 5,
                    },
                    tabBarLabelStyle:{
                        fontSize: 12
                    },
        
                    tabBarActiveTintColor: '#090909',
                    tabBarInactiveTintColor: '#121212',
                }}
            >
                <Tab.Screen
                    name="Receitas"
                    component={Receitas}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name={focused ? "food-apple" : "food-apple-outline"} size={focused ? 30 : 26} color="#121212" />                    )
                    }}
                />
                <Tab.Screen
                    name="Cursos"
                    component={Cursos}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name={focused ? "book" : "book-outline"} size={focused ? 30 : 26} color="#121212" />                    )
                    }}
                />
                <Tab.Screen
                    name="Home" 
                    component={Home}
                    options={{
                        headerShown:false,
                        tabBarLabel:'',
                        tabBarIcon:({focused}) => (
                            <ButtonHome icone={focused ? "home" : "home-outline"} size={focused ? 30 : 26}/>
                        )
                    }}
                />
                <Tab.Screen 
                    name="Sobre"
                    component={Sobre}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name={focused ? "information" : "information-outline"} size={focused ? 30 : 26} color="#121212" />                    )
                    }}
                    
                />
                <Tab.Screen
                    name="Perfil"
                    component={TelaLogin}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name={focused ? "account" : "account-outline"} size={focused ? 30 : 26} color="#121212" />                    )
                    }}
                    
                />
            </Tab.Navigator>
    )
}

