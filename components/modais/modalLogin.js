import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function modalLogin(){
    return(
        <View style={styles.container}>
            <Text>Funcionalidade em Desenvolvimento</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fab111',
    },
    Texto:{
        fontSize: 20,

    }
})