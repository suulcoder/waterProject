import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

const Step6 = ({ back, go }) => (
    <View style={styles.item}
    >
        <View style={styles.step}>
            <Text style={styles.stepTitle}>Paso 6</Text>
        </View>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'1. '}</Text>
            {'Cuando observe claramente '}
            <Text style={styles.textBold}>
                {'la sección teñida de violeta, '}
            </Text>
            {'gire el foldoscopio alrededor de la fuente de luz '}
            <Text style={styles.textBold}>
                {'con el fin de oscurecer el fondo de la imagen.'}
            </Text>
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

export default Step6;
