import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, {useState} from 'react';
import styles from './styles'
import { Video } from 'expo-av';

const HowEcofiltroWorks = ({}) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
        
        <Text style={styles.welcomeText}>
            {'¿Cómo funciona la empresa?'}
        </Text>
        <Video
            source={require('../../../assets/video/empresa.mp4')}
            shouldPlay
            useNativeControls
            style={styles.video}
            resizeMode="contain"
        />
        </View>
    </View>
);

export default HowEcofiltroWorks;


