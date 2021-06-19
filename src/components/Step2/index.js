import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles'

const Step2 = ({ back, go }) => (
    <View style={styles.item}>
        <ScrollView style={styles.itemScroll}>
            <View style={styles.step}>
                <Text style={styles.stepTitle}>Paso 2</Text>
            </View>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'A. '}</Text>
                {'Prepare la jeringa, el filtro pequeño, el portaobjeto, y abra la bolsa con la muestra.'}
            </Text>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'B. '}</Text>
                {'Extraiga no más de 10 mL de la muestra utilizando la jeringa, llenándola.'}
            </Text>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'C. '}</Text>
                {'Proceda a enroscar el filtro sobre la punta de la jeringa, asegurando que quede firmemente colocado.'}
            </Text>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'D. '}</Text>
                {'Filtre la cantidad dentro de la jeringa.'}
            </Text>
            <View style={styles.subItems}>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'a. '}</Text>
                    {'Descarte la mayoría del agua que sale del filtro.'}
                </Text>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'b. Deje exactamente una gota sin filtrar.'}</Text>
                </Text>
            </View>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'E. '}</Text>
                {'Quite el filtro y deposite la gota restante sobre la área indicada en el portaobjeto.'}
            </Text>
            <Image
                source={require("../../../assets/pics/paso2.png")}
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
        </ScrollView>
    </View>
);

export default Step2;
