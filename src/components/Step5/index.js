import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

const Step5 = ({ back, go }) => (
    <View style={styles.item}
    >
        <View style={styles.step}>
            <Text style={styles.stepTitle}>Paso 5</Text>
        </View>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'1. '}</Text>
            {'Enfocar la muestra desplazando la rampa de enfoque hacia la izquierda o derecha, '}
            <Text style={styles.textBold}>
                {'según sea necesario.'}
            </Text>
        </Text>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'2. '}</Text>
            {'Aumentar la magnificación manualmente '}
            <Text style={styles.textBold}>
                {'del dispositivo móvil.'}
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

export default Step5;
