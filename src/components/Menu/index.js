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
            <TouchableOpacity style={styles.element} onPress={contact}>
                <Image style={{
                    alignSelf: 'center',
                    height:normalize(20),
                    width:normalize(20),
                }} source={require('../../public/icons/test.png')} ></Image>
                <Text style={styles.text}> {'Evalúa el agua'} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.element} onPress={about}>
                <Image style={{
                    alignSelf: 'center',
                    height:normalize(15),
                    width:normalize(20),
                }} source={require('../../public/icons/eco.png')} ></Image>
                <Text style={styles.text}> {'Sobre Ecofiltro'} </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.element} onPress={info}>
                <Image style={{
                    alignSelf: 'center',
                    height:normalize(20),
                    width:normalize(20),}}
                source={require('../../public/icons/water.png')} ></Image>
                <Text style={styles.text}> {'Agua contaminada y salud'} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.element} onPress={contact}>
                <Image style={{
                    alignSelf: 'center',
                    height:normalize(15),
                    width:normalize(25),
                }} source={require('../../public/icons/contactus.png')} ></Image>
                <Text style={styles.text}> {'Contáctanos'} </Text>
            </TouchableOpacity>
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
