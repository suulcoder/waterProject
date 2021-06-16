import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Header';
import React, { useState } from 'react';
import styles from './styles'
import { normalize } from '../../utils/normalize';
import { Actions } from 'react-native-router-flux';
import { Video } from 'expo-av';

const Whyitworks = ({ }) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <ScrollView>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.element} onPress={() => Actions.Whyitworks(true)}>
                        <View style={styles.row1}>
                            <Image style={{
                                height: normalize(15),
                                width: normalize(15),
                                resizeMode: 'contain',
                            }}
                                source={require('../../../assets/icons/howWorks.png')}
                            ></Image>
                            <Text style={styles.text}> {'¿Cómo funciona Ecofiltro?'} </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <Video
                        source={require('../../../assets/video/comousar.mp4')}
                        shouldPlay
                        useNativeControls
                        style={styles.video}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.element} onPress={() => Actions.Whyitworks(true)}>
                        <View style={styles.row1}>
                            <Image style={{
                                height: normalize(15),
                                width: normalize(15),
                                resizeMode: 'contain',
                            }}
                                source={require('../../../assets/icons/howWorks.png')}
                            ></Image>
                            <Text style={styles.text}> {'¿Cómo funciona la empresa?'} </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <Video
                        source={require('../../../assets/video/empresa.mp4')}
                        shouldPlay
                        useNativeControls
                        style={styles.video}
                        resizeMode="contain"
                    />
                </View>
            </ScrollView>
        </View>
    </View>
);

export default connect(
    state => ({

    }),
    dispatch => ({

    }),
)(Whyitworks);
