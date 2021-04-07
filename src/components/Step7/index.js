import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

const Step7 = ({ back, go }) => (
    <View style={styles.item}
    >
        <View style={styles.step}>
            <Text style={styles.stepTitle}>Paso 7</Text>
        </View>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'1. '}</Text>
            {'Si es necesario mejorar la calidad de la imagen, cambiar sutilmente '}
            <Text style={styles.textBold}>
                {'la posición del foldoscopio '}
            </Text>
            {'respecto al dispositivo móvil y/o '}
            <Text style={styles.textBold}>
                {'moviendo la rampa de enfoque.'}
            </Text>
        </Text>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'2. '}</Text>
            {'Tomar la imagen.'}
        </Text>
        <View style={styles.row}>
            <TouchableOpacity>
                <Image
                    source={require("../../../assets/pics/moreInfo.png")}
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

export default Step7;
