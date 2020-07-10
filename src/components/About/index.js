import { connect } from 'react-redux';
import {Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, {useState} from 'react';
import styles from './styles'
import MapView, {Marker} from 'react-native-maps';
import Menu from '../Menu';
import { normalize } from '../../utils/normalize';

const About = ({option}) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <Text style={styles.welcomeText}>
                {'Sobre Ecofiltro'}
            </Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.element} onPress={option}>
                    <Image style={{
                        alignSelf: 'center',
                        height:normalize(20),
                        width:normalize(20),
                    }} source={require('../../public/icons/test.png')} ></Image>
                    <Text style={styles.text}> {'¿Cómo cuidar el Ecofiltro?'} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.element} onPress={option}>
                    <Image style={{
                        alignSelf: 'center',
                        height:normalize(15),
                        width:normalize(20),
                    }} source={require('../../public/icons/eco.png')} ></Image>
                    <Text style={styles.text}> {'Historias'} </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.element} onPress={option}>
                    <Image style={{
                        alignSelf: 'center',
                        height:normalize(20),
                        width:normalize(20),}}
                    source={require('../../public/icons/water.png')} ></Image>
                    <Text style={styles.text}> {'¿Porqué Ecofiltro?'} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.element} onPress={option}>
                    <Image style={{
                        alignSelf: 'center',
                        height:normalize(15),
                        width:normalize(25),
                    }} source={require('../../public/icons/contactus.png')} ></Image>
                    <Text style={styles.text}> {'Preguntas frecuentes'} </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

export default connect(
    state => ({
        
    }),
    dispatch=>({
        
    }),
)(About);
