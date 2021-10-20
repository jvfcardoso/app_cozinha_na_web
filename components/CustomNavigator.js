import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../src/pages/Perfil/perfilLogin';
import Cadastro from '../src/pages/Perfil/perfilCadastro';

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
            />
        </Stack.Navigator>
    )
}