import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, { useState } from 'react';
import styles from './styles'
import { Video } from 'expo-av';

const Story4 = ({ }) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <View style={styles.row}>
                <View style={styles.element}>
                    <Text style={styles.welcome}>
                        {'La comunidad de El Durazno'}
                    </Text>
                </View>
            </View>
            <Video
                source={require('../../../assets/video/experiencias4.mp4')}
                shouldPlay
                useNativeControls
                style={styles.video}
                resizeMode="contain"
            />
        </View>
    </View>
);

export default Story4;