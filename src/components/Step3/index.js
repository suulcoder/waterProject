import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles'
import { Actions } from 'react-native-router-flux';

const Step3 = ({ back, go }) => (
    <ScrollView style={styles.itemScroll}>
        <View style={styles.item}
        >
            <View style={styles.step}>
                <Text style={styles.stepTitle}>Paso 3</Text>
            </View>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'A. '}</Text>
                {'Deje secar la gota al aire libre al menos 15 minutos.'}
            </Text>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'B. '}</Text>
                {'Aplique calor con una llama pequeña (puede ser encendedor o vela) en la parte inferior del portaobjeto '}
                <Text style={styles.textBold}>
                    {'durante 5 segundos.'}
                </Text>
            </Text>
            <View style={styles.subItems}>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'a. '}</Text>
                    {'Evite pasarse de este límite de tiempo ya que afectará la calidad de la imagen.'}
                </Text>
            </View>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'C. '}</Text>
                {'Coloque una gota de cristal violeta sobre la muestra y déjela actuar durante 1 minuto.'}
            </Text>
            <Image
                source={require("../../../assets/pics/paso3C.png")}
                resizeMode='contain'
                style={styles.imageResult}
            />
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'D. '}</Text>
                {'Lave con agua corriente, dejando deslizar el agua desde el extremo superior del portaobjeto inclinado.'}
            </Text>
            <View style={styles.subItems}>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'a. '}</Text>
                    {'Evite dejar caer el agua directamente sobre la área de la muestra.'}
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
                <TouchableOpacity onPress={() => Actions.Demo3(false)}>
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

export default Step3;
