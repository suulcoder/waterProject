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
                <View>
                    <TouchableOpacity style={styles.element} onPress={option}>
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(180),
                            width:normalize(180),
                            borderRadius: normalize(50),
                        }} source={require('../../public/img/howToUse.jpg')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'¿Cómo usar el Ecofiltro?'} </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.element} onPress={option}>
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(150),
                            width:normalize(150),
                        }} source={require('../../public/icons/stories.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'Experiencias'} </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <TouchableOpacity style={styles.element} onPress={option}>
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(130),
                            width:normalize(60),}}
                        source={require('../../public/icons/about.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'¿Porqué Ecofiltro?'} </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.element} onPress={option}>
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(90),
                            width:normalize(95),
                        }} source={require('../../public/icons/question.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'Preguntas frecuentes'} </Text>
                </View>
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
