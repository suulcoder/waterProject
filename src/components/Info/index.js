import { connect } from 'react-redux';
import { Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, { useState } from 'react';
import styles from './styles'
import MapView, { Marker } from 'react-native-maps';
import Menu from '../Menu';
import { normalize } from '../../utils/normalize';
import { Actions } from 'react-native-router-flux';

const Info = ({ }) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <View style={styles.row}>
                <Image style={{
                    alignSelf: 'center',
                    height: normalize(1200),
                    width: '100%',
                    resizeMode: 'cover',
                    borderRadius: normalize(10),
                    marginBottom: normalize(5),
                }}
                    source={require('../../../assets/pics/Info.jpg')}
                >
                </Image>
                <View style={{ position: 'absolute', top: 0, left: 0, width: 200, height: 300, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.welcomeText}>{'Agua\ncontaminada\ny salud'}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <TouchableOpacity style={styles.element} onPress={() => Actions.Bacterias(true)}>
                        <Image style={{
                            alignSelf: 'center',
                            height: normalize(100),
                            width: normalize(100),
                            resizeMode: 'contain',
                        }} source={require('../../../assets/icons/bacterias.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'Microbios\nen el agua'} </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.element} onPress={() => Actions.Health(true)}>
                        <Image style={{
                            alignSelf: 'center',
                            height: normalize(100),
                            width: normalize(100),
                            resizeMode: 'contain',
                        }} source={require('../../../assets/icons/HealthB.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'Agua y\ntu salud'} </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.element} onPress={() => Actions.Pollution(true)}>
                        <Image style={{
                            alignSelf: 'center',
                            height: normalize(100),
                            width: normalize(100),
                            resizeMode: 'contain',
                        }} source={require('../../../assets/icons/PollutionB.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'Otros\ncontaminantes'} </Text>
                </View>
            </View>
        </View>
    </View>
);

export default connect(
    state => ({

    }),
    dispatch => ({

    }),
)(Info);
