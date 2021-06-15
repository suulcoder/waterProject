import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { normalize } from '../../utils/normalize';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { URL } from '../../../configuration'
import React from 'react';
import styles from './styles'

const Menu = ({ about, contact, info, evaluate }) => (
    <View style={styles.container} >
        <Text style={styles.welcomeText}>
            {'¡Hola!'}
        </Text>
        <Text style={styles.introText}>
            {'Hagamos Eco, el cambio está en ti'}
        </Text>
        <View style={styles.row}>
            <View>
                <TouchableOpacity style={styles.element} onPress={evaluate}>
                    <Image style={{
                        alignSelf: 'center',
                        height: normalize(80),
                        width: normalize(80),
                        resizeMode: 'contain',
                    }} source={require('../../../assets/icons/evaluate.png')} ></Image>
                </TouchableOpacity>
                <Text style={styles.text}> {'Evalúa el agua'} </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.element} onPress={info}>
                    <Image style={{
                        alignSelf: 'center',
                        height: normalize(80),
                        width: normalize(80),
                        resizeMode: 'contain',
                    }}
                        source={require('../../../assets/icons/contaminated.png')} ></Image>
                </TouchableOpacity>
                <Text style={styles.text}> {'Agua contaminada y tu salud'} </Text>
            </View>
        </View>
        <View style={styles.row}>
            <View>
                <TouchableOpacity style={styles.element} onPress={about}>
                    <Image style={{
                        alignSelf: 'center',
                        height: normalize(80),
                        width: normalize(80),
                        resizeMode: 'contain',
                    }} source={require('../../../assets/icons/aboutEco.png')} ></Image>
                </TouchableOpacity>
                <Text style={styles.text}> {'Sobre Ecofiltro'} </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.element} onPress={contact}>
                    <Image style={{
                        alignSelf: 'center',
                        height: normalize(80),
                        width: normalize(80),
                        resizeMode: 'contain',
                    }} source={require('../../../assets/icons/contact.png')} ></Image>
                </TouchableOpacity>
                <Text style={styles.text}> {'Contacto'} </Text>
            </View>
        </View>
    </View>
);

export default connect(
    state => ({

    }),
    dispatch => ({
        contact() {
            Actions.Contact()
        },
        about() {
            Actions.About()
        },
        info() {
            Actions.Info()
        },
        evaluate() {
            Actions.Evaluate()
        }
    }),
)(Menu);
