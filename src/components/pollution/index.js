import { connect } from 'react-redux';
import {Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Linking } from 'react-native';
import styles from './styles'
import { normalize } from '../../utils/normalize';
import { Actions } from 'react-native-router-flux';
import * as selectors from '../../reducers'
import { Audio } from 'expo-av';


const Pollution = ({settings, back}) => {

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
                await soundObject.loadAsync(require(`../../../assets/audio/otros_cont.m4a`));
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
                <Image style={styles.icon} source={require('../../../assets/icons/back.png')} ></Image>
            </TouchableOpacity>  
            <Image style={styles.logo} source={require('../../../assets/logo/logo.png')} ></Image>
            <TouchableOpacity onPress={play}>
                <Image style={styles.icon_sound} source={isPlaying?require('../../../assets/icons/pause.png'):require('../../../assets/icons/sound.png')} ></Image>
            </TouchableOpacity>  
        </View>
            <ScrollView
            contentContainerStyle={{alignItems: 'center', backgroundColor:'#48D7F7'}}>
                <Image
                source={require('../../../assets/img/otrosContaminantes.png')}
                resizeMode='stretch'
                style={{width: '100%',
                height: undefined,
                aspectRatio: 0.4}}
                />
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
)(Pollution);