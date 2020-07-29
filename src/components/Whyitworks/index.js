import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, {useState} from 'react';
import styles from './styles'
import { normalize } from '../../utils/normalize';
import { Actions } from 'react-native-router-flux';

const Whyitworks = ({}) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <Text style={styles.welcomeText}>
                {'¿Cómo funciona ecofiltro?'}
            </Text>
            <View style={styles.row}>
                <View>
                    <TouchableOpacity style={styles.element} onPress={()=>Actions.HowEcofiltroWorks(false)}>
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(200),
                            width:normalize(100),
                            borderRadius: normalize(50),
                        }} source={require('../../public/icons/about.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'¿Cómo funciona un ecofiltro?'} </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.element} onPress={()=>Actions.HowTheCompanyWorks(false)}>
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(20),
                            width:normalize(250),
                            borderRadius: normalize(50),
                        }} source={require('../../public/logo/logo.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'¿Cómo funciona la empresa?'} </Text>
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
)(Whyitworks);
