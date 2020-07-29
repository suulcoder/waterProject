import { connect } from 'react-redux';
import {Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, {useState} from 'react';
import styles from './styles'
import MapView, {Marker} from 'react-native-maps';
import email from 'react-native-email'
import * as selectors from '../../reducers'
import { validateEmail } from '../../utils/validate';

const Bacterias = ({name_,phone_,mail_,code_,submit}) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <Text style={styles.title}>
                {'Bacterias en el agua'}
            </Text>
            <ScrollView>
                <View style={styles.row}>
                    <View style={styles.row}>
                        <Text style={styles.text}> {'Bacterias no se pueden ver con solo el ojo humano. En muchos casos, aunque un vaso de agua se mire generalmente claro y limpio, hay criaturas muy pequeñas llamadas bacterias que pueden vivir en el agua que tomamos y usamos. Es por eso que no siempre podemos confiar en agua que parece estar limpia a simple vista.'} </Text>
                        <Image style={styles.img} source={require('../../public/img/bacteria1.png')} ></Image>
                    </View>
                </View>
                <View style={styles.row}>
                    <Image style={styles.img} source={require('../../public/img/bacteria2.png')} ></Image>
                    <Text style={styles.text}> {'Una de las bacterias más conocidas es Escherichia coli (E.coli). E. coli es una bacteria que se encuentra en el popo. Uno se puede contagiar al tomar agua contaminada con popo, al comer alimentos contaminados, al tener contacto con otra persona infectada y al tener contacto con animales infectados. La imagen abajo de una muestra de agua bajo un microscopio enseña E. coli.'} </Text>
                </View>
            </ScrollView>
        </View>
    </View>
);

export default Bacterias;
