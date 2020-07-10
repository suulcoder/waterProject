import { connect } from 'react-redux';
import {Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, {useState} from 'react';
import styles from './styles'
import MapView, {Marker} from 'react-native-maps';
import Menu from '../Menu';
import { normalize } from '../../utils/normalize';

const Info = ({option}) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <Text style={styles.welcomeText}>
                {'Agua contaminada y salud'}
            </Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.element} onPress={option}>
                    <Image style={{
                        alignSelf: 'center',
                        height:normalize(20),
                        width:normalize(20),
                    }} source={require('../../public/icons/test.png')} ></Image>
                    <Text style={styles.text}> {'Coliformes, ¿Cómo se transmiten?'} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.element} onPress={option}>
                    <Image style={{
                        alignSelf: 'center',
                        height:normalize(15),
                        width:normalize(20),
                    }} source={require('../../public/icons/eco.png')} ></Image>
                    <Text style={styles.text}> {'Efectos en la salud'} </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.element} onPress={option}>
                    <Image style={{
                        alignSelf: 'center',
                        height:normalize(20),
                        width:normalize(20),}}
                    source={require('../../public/icons/water.png')} ></Image>
                    <Text style={styles.text}> {'Otros métodos de configuración'} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.element} onPress={option}>
                    <Image style={{
                        alignSelf: 'center',
                        height:normalize(15),
                        width:normalize(25),
                    }} source={require('../../public/icons/contactus.png')} ></Image>
                    <Text style={styles.text}> {'Otras formas de contaminación'} </Text>
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
)(Info);
