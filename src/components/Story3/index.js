import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, {useState} from 'react';
import styles from './styles'
import { Video } from 'expo-av';

const Story3 = ({}) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
        
        <Text style={styles.welcomeText}>
            {'La historia de Doña Catalina Pop'}
        </Text>
        <Video
            source={require('../../public/video/experiencias3.mp4')}
            shouldPlay
            useNativeControls
            style={styles.video}
            resizeMode="contain"
        />
        </View>
    </View>
);

export default Story3;