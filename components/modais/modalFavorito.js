import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function ModalFavorito(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                <FontAwesome5 name="heart" size={22} color="#DB9600" />{'\n'}
                Adicionado aos favoritos!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "700"
    }
})