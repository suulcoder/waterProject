import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, { useState } from 'react';
import { Video } from 'expo-av';
import { normalize } from '../../utils/normalize';
import styles from './styles'

const Demo2 = ({ }) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <View style={styles.row}>
                <View style={styles.element}>
                    <Text style={styles.welcome}>
                        {'Concentración de muestra'}
                    </Text>
                </View>
            </View>
            <Video
                source={require('../../../assets/video/paso2.mp4')}
                shouldPlay
                useNativeControls
                style={styles.video}
                resizeMode="contain"
            />
        </View>
    </View>
);

export default Demo2;
