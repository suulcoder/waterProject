import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

const Step4 = ({ back, go }) => (
    <View style={styles.item}
    >
        <View style={styles.step}>
            <Text style={styles.stepTitle}>Paso 4</Text>
        </View>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'1. '}</Text>
            {'Colocar el portaobjeto en el foldoscopio, asegurando que el sitio sobre el cual se fijó la muestra quede '}
            <Text style={styles.textBold}>
                {'hacia el lado donde se encuentra el lente.'}
            </Text>
        </Text>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'2. '}</Text>
            {'Colocar el foldoscopio en la extensión margnética previamente adherida a la cámara del dispositivo electrónico.'}
        </Text>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'3. '}</Text>
            {'Colocar el foldoscopio a unos '}
            <Text style={styles.textBold}>
                {'10cm de la fuente de luz.'}
            </Text>
        </Text>
        <Image
            source={require("../../../assets/pics/paso4.png")}
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

export default Step4;
