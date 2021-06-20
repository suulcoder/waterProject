import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles'
import { Actions } from 'react-native-router-flux';

const Step5 = ({ back, go }) => (
    <ScrollView style={styles.itemScroll}>
        <View style={styles.item}
        >
            <View style={styles.step}>
                <Text style={styles.stepTitle}>Paso 5</Text>
            </View>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'A. '}</Text>
                {'Adherir la lámpara LED al microscopio entre el teléfono y el foldscopio, y encender.'}
            </Text>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'a. Esta puede causar más interferencia en ciertas ocasiones, por lo cual no es siempre necesario utilizarla.'}</Text>
            </Text>
            <Image
                source={require("../../../assets/pics/paso5Aa.png")}
                resizeMode='contain'
                style={styles.imageResult}
            />
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'B. '}</Text>
                {'Puede enfocar la muestra desplazando la rampa de enfoque hacia la izquierda o derecha, según sea necesario.'}
            </Text>
            <Image
                source={require("../../../assets/pics/paso5B.png")}
                resizeMode='contain'
                style={styles.imageResult}
            />
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'C. '}</Text>
                {'Para explorar la muestra, puede mover la lámina y platina de desplazamiento más exteriores.'}
            </Text>
            <Image
                source={require("../../../assets/pics/paso5C.png")}
                resizeMode='contain'
                style={styles.imageResult}
            />
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'D. '}</Text>
                {'También puede aumentar la magnificación manualmente, haciendo zoom desde el dispositivo móvil, según sea necesario.'}
            </Text>
            <View style={styles.row}>
                <TouchableOpacity onPress={back}>
                    <Image
                        source={require("../../../assets/pics/regresar.png")}
                        resizeMode='contain'
                        style={styles.arrows}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.Demo5(false)}>
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

export default Step5;
