import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

const Step1Parte2 = ({ back, go }) => {
    const [fuente, changeFuente] = useState(0);
    return (
        <ScrollView style={styles.itemScroll}>
            <View style={styles.item}
            >
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => changeFuente(1)}>
                        <View>
                            <Image
                                source={require("../../../assets/icons/grifo-de-agua.png")}
                                style={styles.icon}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => changeFuente(2)}>
                        <View>
                            <Image
                                source={require("../../../assets/icons/botella-de-agua.png")}
                                style={styles.icon}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => changeFuente(3)}>
                        <View>
                            <Image
                                source={require("../../../assets/icons/pozo.png")}
                                style={styles.icon}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => changeFuente(4)}>
                        <View>
                            <Image
                                source={require("../../../assets/icons/lago.png")}
                                style={styles.icon}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                {
                    fuente === 1 && (
                        <>
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
                            <Image
                                source={require("../../../assets/pics/paso1Grifo.png")}
                                resizeMode='contain'
                                style={styles.imageResult}
                            />
                        </>
                    )
                }
                {
                    fuente === 2 && (
                        <>
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
                        </>
                    )
                }
                {
                    fuente === 3 && (
                        <>
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
                        </>
                    )
                }
                {
                    fuente === 4 && (
                        <>
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
                        </>
                    )
                }
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
}

export default Step1Parte2;
