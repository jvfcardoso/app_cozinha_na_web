import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ModalLogin(){
    return(
        <View style={styles.container}>
            <Ionicons name="warning-outline" size={35} color="#FAB111" />
            <Text style={styles.Texto}>Ops, está funcionalidade ainda está em desenvolvimento!</Text>
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
    Texto:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "700"
    }
})