import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, { useState } from 'react';
import styles from './styles'
import { Video } from 'expo-av';
import { normalize } from '../../utils/normalize';

const HowtoUse = ({ }) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <View style={styles.row}>
                <View style={styles.element}>
                    <Image style={{
                        height: normalize(40),
                        width: normalize(40),
                        resizeMode: 'contain',
                        alignSelf: 'center',
                    }}
                        source={require('../../../assets/icons/aboutEco.png')}
                    ></Image>
                    <Text style={styles.welcome}>
                        {'¿Cómo usar el Ecofiltro?'}
                    </Text>
                </View>
            </View>
            <Video
                source={require('../../../assets/video/comousar.mp4')}
                shouldPlay
                useNativeControls
                style={styles.video}
                resizeMode="contain"
            />
        </View>
    </View>
);

export default HowtoUse;
