import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

const InconclusiveResult = ({ home }) => (
    <View style={styles.item}
    >
        <Image
            source={require("../../../assets/pics/resultadoNoConcluyente.png")}
            resizeMode='contain'
            style={styles.imageResult}
        />
        <Text
            style={styles.textResult}
        >
            {'La imagen analizada quizás se encuentra muy borrosa, con mucha luz, o la muestra contiene otro tipo de contaminante.'}
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
)(InconclusiveResult);