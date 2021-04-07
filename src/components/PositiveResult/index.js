import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

const PositiveResult = ({ home }) => (
    <View style={styles.item}
    >
        <Image
            source={require("../../../assets/pics/resultadoPositivo.png")}
            resizeMode='contain'
            style={styles.imageResult}
        />
        <Text
            style={styles.textResult}
        >
            {'Esta muestra de agua contiene una cantidad problemática de microbios y no se debería consumir.'}
        </Text>
        <TouchableOpacity style={styles.submit}>
            <Text style={styles.submitText}> {'Analizar otra imagen'} </Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.submit} onPress={home}>
            <Text style={styles.submitText}> {'Página Principal'} </Text>
        </TouchableOpacity>
    </View>
);

export default connect(
    undefined,
    dispatch => ({
        home() {
            Actions.replace('Home')
        },
    }),
)(PositiveResult);