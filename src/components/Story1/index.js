import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Header from '../Header';
import React, { useState } from 'react';
import styles from './styles'
import { Video } from 'expo-av';

const Story1 = ({ }) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <View style={styles.row}>
                <View style={styles.element}>
                    <Text style={styles.welcome}>
                        {'La historia de Don Luis'}
                    </Text>
                </View>
            </View>
            <Video
                source={require('../../../assets/video/experiencias1.mp4')}
                shouldPlay
                useNativeControls
                style={styles.video}
                resizeMode="contain"
            />
        </View>
    </View>
);

export default Story1;
