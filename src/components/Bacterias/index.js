import { connect } from 'react-redux';
import {Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Linking } from 'react-native';
import styles from './styles'
import { normalize } from '../../utils/normalize';
import { Actions } from 'react-native-router-flux';

import * as selectors from '../../reducers'
import { Audio } from 'expo-av';


const Bacterias = ({settings, back}) => {

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
  

    async function play(){ 
        try {
            if(isPlaying){
                await soundObject.pauseAsync()
                changeIsPlaying(false)
                await soundObject.unloadAsync();
                setSoundObject(soundObject)
            }
            else{
                await soundObject.loadAsync(require(`../../public/audio/bacterias.m4a`));
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
                <Image style={styles.icon} source={require('../../public/icons/back.png')} ></Image>
            </TouchableOpacity>  
            <Image style={styles.logo} source={require('../../public/logo/logo.png')} ></Image>
            <TouchableOpacity onPress={play}>
                <Image style={styles.icon} source={isPlaying?require('../../public/icons/pause.png'):require('../../public/icons/sound.png')} ></Image>
            </TouchableOpacity>  
        </View>
            <ScrollView
            contentContainerStyle={{alignItems: 'center', backgroundColor:'#44AFFD'}}>
                <Image
                source={require('../../public/img/bacterias.png')}
                resizeMode='stretch'
                style={{width: '100%',
                height: undefined,
                aspectRatio: 0.4}}
                />
                <Text>
                    ¿Quieres saber como afecta esto a tu salud? 
                </Text>
                <TouchableOpacity onPress={()=>{
                    play()
                    Actions.Health(true)
                    }}>
                    <Text style={{color: 'black',  textDecorationLine: 'underline', marginBottom: normalize(1)}}>
                        Selecciona aquí
                    </Text>
                </TouchableOpacity>
                <Text style={{alignItems: 'center'}}>
                    ¿Quieres aprender más sobre la contaminación del agua?
                </Text>
                <Text style={{color: 'black',  textDecorationLine: 'underline', marginBottom: normalize(1)}}
                    onPress={() => Linking.openURL('https://www.who.int/es/news-room/fact-sheets/detail/drinking-water')}>
                Haz click aquí para visitar el sitio web
                </Text>
            </ScrollView>
    </View>
)};

export default connect(
    state => ({
        settings: selectors.getAutomatizedAudio(state),
    }),
    dispatch=>({
        back(){
            Actions.pop()
        },
    }),
)(Bacterias);
