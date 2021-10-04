import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Perfil(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        color: '#FFF',
        fontSize: 30,
    }
})