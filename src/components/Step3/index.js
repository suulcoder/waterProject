import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

const Step3 = ({ back, go }) => (
    <View style={styles.item}
    >
        <View style={styles.step}>
            <Text style={styles.stepTitle}>Paso 3</Text>
        </View>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'1. '}</Text>
            {'Lavar con agua corriente, dejando deslizar el agua por el partaobjeto. '}
            <Text style={styles.textBold}>
                {' Evite dejar caer el agua directamente sobre la muestra.'}
            </Text>
        </Text>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'2. '}</Text>
            {'Eliminar el exceso de agua sobre el portaobjeto con una toalla de papel. '}
            <Text style={styles.textBold}>
                {'Evite pasar el papel sobre la muestra fijada.'}
            </Text>
        </Text>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'3. '}</Text>
            {'Dejar secar completamente la muestra al aire libre.'}
        </Text>
        <Image
            source={require("../../../assets/pics/paso3.png")}
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

export default Step3;
