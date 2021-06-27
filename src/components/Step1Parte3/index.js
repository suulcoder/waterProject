import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';

const Step1Parte3 = ({ back, go }) => (
    <ScrollView style={styles.itemScroll}>
        <View style={styles.item}
        >
            <View style={styles.step}>
                <Text style={styles.stepTitle}>{'Etiquetación de muestras'}</Text>
            </View>
            <View style={styles.subItems}>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'A. '}</Text>
                    {'Etiquete la bolsa apropiadamente, indicando la siguiente información sobre la calcomanía proveída:'}
                </Text>
                <View style={styles.subItems}>
                    <Text
                        style={styles.textStep}
                    >
                        <Text style={styles.textBold}>{'a. '}</Text>
                        {'Código o nombre del Departamento y Municipio de muestreo.'}
                    </Text>
                    <Text
                        style={styles.textStep}
                    >
                        <Text style={styles.textBold}>{'b. '}</Text>
                        {'Tipo de fuente de agua.'}
                    </Text>
                    <Text
                        style={styles.textStep}
                    >
                        <Text style={styles.textBold}>{'c. '}</Text>
                        {'Fecha y hora exacta de la toma de la muestra.'}
                    </Text>
                    <Text
                        style={styles.textStep}
                    >
                        <Text style={styles.textBold}>{'d. '}</Text>
                        {'Código asignado (iniciales de la persona que realiza el muestreo).'}
                    </Text>
                    <Text
                        style={styles.textStep}
                    >
                        <Text style={styles.textBold}>{'e. '}</Text>
                        {'Enumere las muestras: M1, M2, M3… según las vaya tomando .'}
                    </Text>
                    <View style={styles.subItems}>
                        <Text
                            style={styles.textStep}
                        >
                            <Text style={styles.textBold}>{'i. Ejemplo: CH, CH / Agua de grifo (CHO) / 24-5-2021, 9:46 am / J.P. / M1'}</Text>
                        </Text>
                    </View>
                </View>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'B. '}</Text>
                    {'Pegue la calcomanía sobre la bolsa de muestra a la cual le corresponde y mantengala dentro de la lonchera.'}
                </Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={back}>
                    <Image
                        source={require("../../../assets/pics/regresar.png")}
                        resizeMode='contain'
                        style={styles.arrows}
                    />
                </TouchableOpacity>
                <View style={styles.image}></View>
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

export default Step1Parte3;
