import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React from 'react';
import styles from './styles'
import { normalize } from '../../utils/normalize';
import { Actions } from 'react-native-router-flux';
import { colors } from '../../../configuration';

const About = ({}) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <Text style={styles.welcomeText}>
                {'Sobre Ecofiltro'}
            </Text>
            <View style={styles.row}>
                <View>
                    <TouchableOpacity style={styles.element} >
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(250),
                            width:normalize(250),
                            borderRadius: normalize(50),
                        }} source={require('../../public/img/howToUse.jpg')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'¿Cómo usar el Ecofiltro?'} </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.element} >
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(250),
                            width:normalize(250),
                            borderRadius: normalize(50),
                        }} source={require('../../public/img/stories.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'Experiencias'} </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <TouchableOpacity style={styles.element} onPress={()=>Actions.Whyitworks(true)}>
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(130),
                            width:normalize(60),}}
                        source={require('../../public/icons/about.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'¿Cómo funciona Ecofiltro?'} </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.element}>
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
