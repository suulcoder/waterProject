import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

const Step2 = ({ back, go }) => (
    <View style={styles.item}
    >
        <View style={styles.step}>
            <Text style={styles.stepTitle}>Paso 2</Text>
        </View>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'1. '}</Text>
            {'Aplicar calor con un encendedor en la parte inferior del portaobjeto durante '}
            <Text style={styles.textBold}>
                {'3 segundos.'}
            </Text>
        </Text>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'2. '}</Text>
            {'Colocar '}
            <Text style={styles.textBold}>
                {'una gota '}
            </Text>
            {'de cristal violeta en la muestra y dejar actuar durante '}
            <Text style={styles.textBold}>
                {'1 minuto.'}
            </Text>
        </Text>
        <Image
            source={require("../../../assets/pics/paso2.png")}
            resizeMode='contain'
            style={styles.imageResult}
        />
        <View style={styles.row}>
            <TouchableOpacity onPress={back}>
                <Image
                    source={require("../../../assets/pics/regresar.png")}
                    resizeMode='contain'
                    style={styles.arrows}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require("../../../assets/pics/more.png")}
                    resizeMode='contain'
                    style={styles.image}
                />
            </TouchableOpacity>
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

export default Step2;
