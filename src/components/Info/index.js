import { connect } from 'react-redux';
import {Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, {useState} from 'react';
import styles from './styles'
import MapView, {Marker} from 'react-native-maps';
import Menu from '../Menu';
import { normalize } from '../../utils/normalize';
import { Actions } from 'react-native-router-flux';

const Info = ({}) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <Text style={styles.welcomeText}>
                {'Agua contaminada y salud'}
            </Text>
            <View style={styles.row}>
                <View>
                    <TouchableOpacity style={styles.element} onPress={()=>Actions.Bacterias(true)}>
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(100),
                            width:normalize(180),
                        }} source={require('../../public/icons/coliform.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'Microbios en el agua'} </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.element} onPress={()=>Actions.Health(true)}>
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(150),
                            width:normalize(150),
                        }} source={require('../../public/icons/health.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'Agua y tu salud'} </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <TouchableOpacity style={styles.element} onPress={()=>Actions.Pollution(true)}>
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(140),
                            width:normalize(140),
                            borderRadius: normalize(50),
                        }} source={require('../../public/icons/pollution.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'Otros contaminantes'} </Text>
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
)(Info);
