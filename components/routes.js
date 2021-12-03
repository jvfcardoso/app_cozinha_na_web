import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RoutesReceitas, TelaLogin } from '../components/CustomNavigator';
import Home from '../src/pages/Home';
import Cursos from '../src/pages/Cursos';
import Sobre from '../src/pages/Sobre';
import ButtonHome from '../components/buttonHome';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
            <Tab.Navigator
                borderTopColor='transparent'
                initialRouteName="Home"
                screenOptions={{
                    tabBarStyle:{
                        minHeight: 65,
                        backgroundColor: '#ffffff',
                        borderTopColor: 'transparent',
                        paddingBottom: 10,
                        paddingTop: 10,
                    },
                    tabBarLabelStyle:{
                        fontSize: 10
                    },
        
                    tabBarActiveTintColor: '#FAB111',
                    tabBarInactiveTintColor: '#0000005c',
                }}
            >
                <Tab.Screen
                    name="Receitas"
                    component={RoutesReceitas}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name="food-apple-outline" size={focused ? 30 : 26}  color={focused ? "#FAB111" : "#0000005c"} />                    )
                    }}
                />
                <Tab.Screen
                    name="Cursos"
                    component={Cursos}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name="book-outline" size={focused ? 30 : 26}  color={focused ? "#FAB111" : "#0000005c"} />                    )
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
                            <MaterialCommunityIcons name="information-outline" size={focused ? 30 : 26}  color={focused ? "#FAB111" : "#0000005c"} />                    )
                    }}
                    
                />
                <Tab.Screen
                    name="Perfil"
                    component={TelaLogin}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({focused}) => (
                            <MaterialCommunityIcons name="account-outline" size={focused ? 30 : 26}  color={focused ? "#FAB111" : "#0000005c"} />                    )
                    }}
                    
                />
            </Tab.Navigator>
    )
}

