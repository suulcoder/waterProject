import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

const Step1 = () => (
    <View style={styles.item}
    >
        <View style={styles.step}>
            <Text style={styles.stepTitle}>Paso 1</Text>
        </View>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'1. '}</Text>
            {'Tomar una muestra '}
            <Text style={styles.textBold}>
                {'de 100ml del agua que se desea analizar '}
            </Text>
            {'en una botella de agua limpia o jeringa marcada.'}
        </Text>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'2. '}</Text>
            {'Colocar '}
            <Text style={styles.textBold}>
                {'una gota '}
            </Text>
            {'de la muestra en un cubre objeto.'}
        </Text>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'3. '}</Text>
            {'Dejar seca la gota al aire libre.'}
        </Text>
        <Image
            source={require("../../../assets/pics/paso1.png")}
            resizeMode='contain'
            style={styles.imageResult}
        />
        <View style={styles.row}>
            <TouchableOpacity>
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
            <TouchableOpacity>
                <Image
                    source={require("../../../assets/pics/avanzar.png")}
                    resizeMode='contain'
                    style={styles.arrows}
                />
            </TouchableOpacity>
        </View>
    </View>
);

export default Step1;
