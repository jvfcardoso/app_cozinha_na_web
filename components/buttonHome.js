import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function ButtonHome({icone, size}){
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name={icone} size={size} color={'#ffffff'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fab111',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        elevation: 10,
    }
})