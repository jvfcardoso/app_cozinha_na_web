import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function ModalCursos(){
    return(
        <View style={styles.container}>
            <Text style={styles.curso}>{curso}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.tempo}>{tempo}</Text>
            <Text style={styles.preco}>{preco}</Text>
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
    curso:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "700"
    },
    descricao:{

    },
    tempo:{

    },
    preco:{
        
    }
})