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
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'Si la fuente es un grifo:'}</Text>
            </Text>
            <View style={styles.subItems}>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'a. '}</Text>
                    {'Coloque la bolsa debajo del grifo y llene hasta la línea indicada.'}
                </Text>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'b. Nunca deje que el interior de la bolsa haga contacto con sus manos o el grifo.'}</Text>
                </Text>
            </View>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'Si la fuente es un contenedor que se puede girar:'}</Text>
            </Text>
            <View style={styles.subItems}>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'a. '}</Text>
                    {'Gire el contenedor de agua, dejando que el agua caiga como si fuera chorro.'}
                </Text>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'b. '}</Text>
                    {'Coloque la bolsa debajo evitando que la bolsa toque el borde del contenedor.'}
                </Text>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'c. '}</Text>
                    {'Llene hasta la línea indicada.'}
                </Text>
            </View>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'Si la fuente es un contenedor que NO se puede girar:'}</Text>
            </Text>
            <View style={styles.subItems}>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'a. '}</Text>
                    {'Utilice el contenedor más pequeño que utilizan en el hogar para sacar agua.'}
                </Text>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'b. '}</Text>
                    {'Extraiga agua evitando que la bolsa toque el borde del contenedor.'}
                </Text>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'c. '}</Text>
                    {'Llene hasta la línea indicada.'}
                </Text>
            </View>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'Si la fuente es agua natural abierta (e.g. río, lago, etc.):'}</Text>
            </Text>
            <View style={styles.subItems}>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'a. '}</Text>
                    {'Sumerja la bolsa abierta, sostenida por las pestañas laterales, al menos 2 cm por debajo de la superficie del agua.'}
                </Text>
                <View style={styles.subItems}>
                    <Text
                        style={styles.textStep}
                    >
                        <Text style={styles.textBold}>{'i. '}</Text>
                        {'Si el agua está en movimiento, la boca de la bolsa debe de estar viendo en dirección contraria a la corriente.'}
                    </Text>
                    <Text
                        style={styles.textStep}
                    >
                        <Text style={styles.textBold}>{'ii. '}</Text>
                        {'La parte superior de la bolsa debe quedar inclinada hacia arriba.'}
                    </Text>
                </View>
                <Text
                    style={styles.textStep}
                >
                    <Text style={styles.textBold}>{'b. '}</Text>
                    {'Saque la bolsa del agua cuando haya alcanzado el volumen indicado.'}
                </Text>
                <View style={styles.subItems}>
                    <Text
                        style={styles.textStep}
                    >
                        <Text style={styles.textBold}>{'i. '}</Text>
                        {'Si el volumen de agua recolectado supera la línea indicada, descarte el exceso antes de cerrar.'}
                    </Text>
                </View>
            </View>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'D. '}</Text>
                {'Cierre la bolsa doblando hacia abajo varias veces el borde superior, alrededor del alambre, hasta la línea indicada.'}
            </Text>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'E. '}</Text>
                {'Doble las pestañas laterales hacia el centro de la bolsa.'}
            </Text>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'F. '}</Text>
                {'Coloque inmediatamente la bolsa en la lonchera refrigerada.'}
            </Text>
            <Text
                style={styles.textStep}
            >
                <Text style={styles.textBold}>{'Etiquetación de muestras'}</Text>
            </Text>
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
