import { connect } from 'react-redux';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import styles from './styles'
import { normalize } from '../../utils/normalize';
import { Actions } from 'react-native-router-flux';

import * as selectors from '../../reducers'
import { Audio } from 'expo-av';


const Bacterias = ({ settings, back, home }) => {

    useEffect(() => {
        // returned function will be called on component unmount 
        return () => {
            try {
                soundObject.pauseAsync()
            } catch (error) {
                //do nothing
            }
        }
    }, [])

    const [isPlaying, changeIsPlaying] = useState(false);
    const [soundObject, setSoundObject] = useState(new Audio.Sound());


    async function play() {
        try {
            if (isPlaying) {
                await soundObject.pauseAsync()
                changeIsPlaying(false)
                await soundObject.unloadAsync();
                setSoundObject(soundObject)
            }
            else {
                await soundObject.loadAsync(require(`../../../assets/audio/bacterias.m4a`));
                changeIsPlaying(true)
                await soundObject.playAsync();
                setSoundObject(soundObject)
            }
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={back}>
                    <Image style={styles.icon} source={require('../../../assets/icons/Regresar.png')} ></Image>
                </TouchableOpacity>
                <Image style={styles.logo} source={require('../../../assets/logo/Logoldpi.png')} ></Image>
                <TouchableOpacity onPress={home}>
                    <Image style={styles.icon} source={require('../../../assets/icons/Inicio.png')} ></Image>
                </TouchableOpacity>
            </View>
            <ScrollView
                contentContainerStyle={{ alignItems: 'center', }}>
                <View style={styles.row}>
                    <View style={{
                        marginLeft: normalize(250),
                        marginRight: normalize(100),
                    }}>
                        <Text style={styles.title}>{'Los microbios\nen el agua'}</Text>
                    </View>
                    <TouchableOpacity onPress={play}>
                        <Image style={styles.icon_sound} source={isPlaying ? require('../../../assets/icons/pauseB.png') : require('../../../assets/icons/sound.png')} ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <Image style={{
                        height: normalize(500),
                        width: normalize(800),
                        resizeMode: 'contain',
                    }}
                        source={require('../../../assets/pics/bacterias.png')}></Image>
                    <View style={{
                        width: normalize(700),
                    }}>
                        <Text style={styles.text}>
                            {'El agua puede verse limpia '}
                            <Text style={styles.textBlue}>{'a simple vista.'}</Text>
                        </Text>
                        <Text style={styles.text}>
                            {'Pero en ella pueden existir'}
                            <Text style={styles.textBlue}>{' microbios '}</Text>
                            {'muy pequeños.'}
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.textBlue}>{'¿Cómo nos podemos contagiar?'}</Text>
                        <Image style={{
                            alignSelf: 'center',
                            height: normalize(600),
                            width: normalize(1800),
                            resizeMode: 'contain',
                        }}
                            source={require('../../../assets/pics/contagio.png')}></Image>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.textBlue}>
                            {'¿Quieres saber como afecta esto a tu salud?'}
                        </Text>
                        <TouchableOpacity onPress={() => {
                            play()
                            Actions.Health(true)
                        }}>
                            <Text style={styles.submitText}>
                                {'Haz clic aquí'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.textBlue}>
                            {'¿Quieres aprender más sobre la contaminación del agua?'}
                        </Text>
                        <Text style={styles.submitText}
                            onPress={() => Linking.openURL('https://www.who.int/es/news-room/fact-sheets/detail/drinking-water')}>
                            {'Haz clic aquí'}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default connect(
    state => ({
        settings: selectors.getAutomatizedAudio(state),
    }),
    dispatch => ({
        back() {
            Actions.pop()
        },
        home() {
            Actions.replace('Home')
        },
    }),
)(Bacterias);
