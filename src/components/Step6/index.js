import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'
import { Actions } from 'react-native-router-flux';

const Step6 = ({ back, go }) => (
    <View style={styles.item}
    >
        <View style={styles.step}>
            <Text style={styles.stepTitle}>Paso 6</Text>
        </View>
        <Text
            style={styles.textStep}
        >
            <Text style={styles.textBold}>{'A. '}</Text>
            {'Tome la imagen y súbala a la aplicación utilizando el botón que se encuentra abajo, lo cual dejará que sea analizada por el algoritmo con la capacidad de identificar contaminación bacteriana.'}
        </Text>
        <View style={styles.row}>
            <TouchableOpacity onPress={() => Actions.TakePicture(false)}>
                <Image
                    source={require("../../../assets/pics/load.png")}
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
