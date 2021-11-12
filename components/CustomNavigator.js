import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../src/pages/Perfil/perfilLogin';
import Cadastro from '../src/pages/Perfil/perfilCadastro';
import TelaReceitas from '../src/pages/Receitas/TelaReceitas';
import Receitas from '../src/pages/Receitas';

const Stack = createStackNavigator();

export function TelaLogin({navigation}){
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerStyle:{
                        backgroundColor: '#fab111',
                        
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    cardShadowEnabled: true
                }}
            />
        </Stack.Navigator>
    )
}

export function RoutesReceitas({navigation}){
    return(
        <Stack.Navigator initialRouteName="Receitas">
            <Stack.Screen
                name="TelaReceitas"
                component={TelaReceitas}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="Receitas"
                component={Receitas}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    )
}