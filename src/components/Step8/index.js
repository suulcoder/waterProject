import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

const Step8 = ({ back, go }) => (
    <View style={styles.item}
    >
        <View style={styles.step}>
            <Text style={styles.stepTitle}>Paso 8</Text>
        </View>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'1. '}</Text>
            {'Sube la imagen al '}
            <Text style={styles.textBold}>
                {'enlace proveído abajo '}
            </Text>
            {'para que sea analizada con un algoritmo con la capacidad de identificar contaminación.'}
        </Text>
        <View style={styles.row}>
            <TouchableOpacity>
                <Image
                    source={require("../../../assets/pics/load.png")}
                    resizeMode='contain'
                    style={styles.imageResult}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity onPress={back}>
                <Image
                    source={require("../../../assets/pics/regresar.png")}
                    resizeMode='contain'
                    style={styles.arrows}
                />
            </TouchableOpacity>
            <View style={styles.space} />
            <TouchableOpacity onPress={go}>
                <Image
                    source={require("../../../assets/pics/avanzar.png")}
                    resizeMode='contain'
                    style={styles.arrows}
                />
            </TouchableOpacity>
        </View>
    </View>
);

export default Step8;
