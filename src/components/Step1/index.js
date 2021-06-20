import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles'

const Step1 = ({ back, go }) => (
    <ScrollView style={styles.itemScroll}>
        <View style={styles.item}
        >
            <View style={styles.step}>
                <Text style={styles.stepTitle}>Paso 1</Text>
            </View>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'A. '}</Text>
                {'Desinfecte sus manos antes de comenzar y frecuentemente durante el procedimiento.'}
            </Text>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'B. '}</Text>
                {'Quite con una mano el sello de la bolsa y abra el grifo.'}
            </Text>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'C. '}</Text>
                {'Abra la bolsa estirando las pestañas centrales hacia lados opuestos.'}
            </Text>
            <Image
                source={require("../../../assets/pics/paso1.png")}
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
    </ScrollView>
);

export default Step1;
