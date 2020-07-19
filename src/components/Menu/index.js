import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { normalize } from '../../utils/normalize';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import {URL} from '../../../configuration'
import React from 'react';
import styles from './styles'

const Menu = ({about, contact, info}) => (
    <View style={styles.container} >
        <Text style={styles.welcomeText}>
            {'¡Bienvenido!'}
        </Text>
        <View style={styles.row}>
            <View>
                <TouchableOpacity style={styles.element}>
                    <Image style={{
                        alignSelf: 'center',
                        height:normalize(100),
                        width:normalize(100),
                    }} source={require('../../public/icons/test.png')} ></Image>
                </TouchableOpacity>    
                <Text style={styles.text}> {'Evalúa el agua'} </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.element} onPress={about}>
                    <Image style={{
                        alignSelf: 'center',
                        height:normalize(120),
                        width:normalize(70),
                    }} source={require('../../public/icons/about.png')} ></Image>
                </TouchableOpacity>
                <Text style={styles.text}> {'Sobre Ecofiltro'} </Text>
            </View>
        </View>
        <View style={styles.row}>
            <View>
                <TouchableOpacity style={styles.element} onPress={info}>
                    <Image style={{
                        alignSelf: 'center',
                        height:normalize(100),
                        width:normalize(100),}}
                    source={require('../../public/icons/water.png')} ></Image>
                </TouchableOpacity>
                <Text style={styles.text}> {'Agua contaminada y tu salud'} </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.element} onPress={contact}>
                    <Image style={{
                        alignSelf: 'center',
                        height:normalize(80),
                        width:normalize(120),
                    }} source={require('../../public/icons/contactus.png')} ></Image>
                </TouchableOpacity>
                <Text style={styles.text}> {'Contáctanos'} </Text>
            </View>
        </View>
    </View>
);

export default connect(
    state => ({
        
    }),
    dispatch=>({
        contact(){
            Actions.Contact()
        },
        about(){
            Actions.About()
        },
        info(){
            Actions.Info()
        }
    }),
)(Menu);
