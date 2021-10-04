import React from 'react';
import Home from '../src/pages/Home';
import Cursos from '../src/pages/Cursos';
import Perfil from '../src/pages/Perfil';
import Receitas from '../src/pages/Receitas';
import Sobre from '../src/pages/Sobre';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import ButtonHome from '../components/buttonHome';


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#fef5e0',
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
                        <MaterialCommunityIcons name="food-variant" size={24} color="#121212" />                    )
                }}
            />
            <Tab.Screen
                name="Cursos"
                component={Cursos}
                options={{
                    headerShown:false,
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="book" size={24} color="#121212" />                    )
                }}
            />
            <Tab.Screen
                name="Home" 
                component={Home}
                options={{
                    headerShown:false,
                    tabBarLabel:'',
                    tabBarIcon:() => (
                        <ButtonHome/>
                    )
                }}
            />
            <Tab.Screen 
                name="Sobre"
                component={Sobre}
                options={{
                    headerShown:false,
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="information" size={24} color="#121212" />                    )
                }}
                
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerShown:false,
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="account" size={24} color="#121212" />                    )
                }}
            />
        </Tab.Navigator>
    )
}

