import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ModalFavorito(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                <Ionicons name="warning-outline" size={24} color="black" />
                Acesse sua conta para favoritar
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    texto:{
        fontWeight: "700",
        fontSize: 20,
        textAlign: 'center',
    }
})