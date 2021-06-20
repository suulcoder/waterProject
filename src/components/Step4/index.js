import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles'
import { Actions } from 'react-native-router-flux';

const Step4 = ({ back, go }) => (
    <ScrollView style={styles.itemScroll}>
        <View style={styles.item}
        >
            <View style={styles.step}>
                <Text style={styles.stepTitle}>Paso 4</Text>
            </View>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'A. '}</Text>
                {'Elimine el exceso de agua sobre el portaobjeto con una toalla de papel.'}
            </Text>
            <View style={styles.subItems}>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'a. '}</Text>
                    {'Evite pasar el papel sobre la área con la muestra fijada.'}
                </Text>
            </View>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'B. '}</Text>
                {'Deje secar completamente la muestra al aire libre por al menos 5 minutos.'}
            </Text>
            <Image
                source={require("../../../assets/pics/paso4B.png")}
                resizeMode='contain'
                style={styles.imageResult}
            />
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'C. '}</Text>
                {'En lo que espera, con cinta adhesiva pegue el imán del foldoscopio a la cámara de su dispositivo móvil.'}
            </Text>
            <View style={styles.subItems}>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'a. '}</Text>
                    {'Asegúrese que '}
                    <Text style={styles.textBold}>
                        {'el lado negro vea hacia arriba, '}
                    </Text>
                    {'y que el agujero en medio del imán quede exactamente en el centro del lente del dispositivo.'}
                </Text>
            </View>
            <Image
                source={require("../../../assets/pics/paso4Ca.png")}
                resizeMode='contain'
                style={styles.imageResult}
            />
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'D. '}</Text>
                {'Cuando la muestra se haya secado, coloque el portaobjeto en el sostén del lado amarillo del foldoscopio, exponiéndolo al abrir la apertura hacia abajo.'}
            </Text>
            <Image
                source={require("../../../assets/pics/paso4D.png")}
                resizeMode='contain'
                style={styles.imageResult}
            />
            <View style={styles.subItems}>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'a. '}</Text>
                    {'Asegúrese que el sitio sobre el cual se colocó la muestra quede '}
                    <Text style={styles.textBold}>
                        {'viendo hacia el lado donde se encuentra el lente del foldoscopio.'}
                    </Text>
                </Text>
            </View>
            <Image
                source={require("../../../assets/pics/paso4Da.png")}
                resizeMode='contain'
                style={styles.imageResult}
            />
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'E. '}</Text>
                {'Coloque el lente del lado azul del foldoscopio junto la extensión magnética previamente adherida a la cámara del dispositivo móvil.'}
            </Text>
            <Image
                source={require("../../../assets/pics/paso4E.png")}
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
                <TouchableOpacity onPress={() => Actions.Demo4(false)}>
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

export default Step4;
