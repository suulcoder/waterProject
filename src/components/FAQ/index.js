import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import * as actions from '../../actions/FAQ'
import * as selectors from '../../reducers'
import Header from '../Header';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import { Audio } from 'expo-av';
import { normalize } from '../../utils/normalize';

const FAQ = ({questions, search, settings}) => {

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
  
    const [query, changeQuery] = useState('');
    const [selected, changeSelected] = useState();
    const [isPlaying, changeIsPlaying] = useState(false);
    const [soundObject, setSoundObject] = useState(new Audio.Sound());

    const searchQuery = (query) => {
        changeQuery(query)
        search(query)
    }

    const select = (id) => {
        if(selected===id){
            changeSelected(null)
        }
        else{
            changeSelected(id)
        }
        if(settings){
            play(id)
        }
    }

    /*For who anyone is going to read the next function im sorry
        but require didnt allow me to concatenate

    */

    const getFileByID = (id) => {
        switch (id) {
            case 0:
                return require(`../../public/audio/ecofiltro_faq_0.m4a`)
            case 1:
                return require(`../../public/audio/ecofiltro_faq_1.m4a`)
            case 2:
                return require(`../../public/audio/ecofiltro_faq_2.m4a`)
            case 3:
                return require(`../../public/audio/ecofiltro_faq_3.m4a`)
            case 4:
                return require(`../../public/audio/ecofiltro_faq_4.m4a`)
            case 5:
                return require(`../../public/audio/ecofiltro_faq_5.m4a`)
            case 6:
                return require(`../../public/audio/ecofiltro_faq_6.m4a`)
            case 7:
                return require(`../../public/audio/ecofiltro_faq_7.m4a`)
            case 8:
                return require(`../../public/audio/ecofiltro_faq_8.m4a`)
            case 9:
                return require(`../../public/audio/ecofiltro_faq_9.m4a`)
            case 10:
                return require(`../../public/audio/ecofiltro_faq_10.m4a`)
            case 11:
                return require(`../../public/audio/ecofiltro_faq_11.m4a`)
            case 12:
                return require(`../../public/audio/ecofiltro_faq_12.m4a`)
            default:
                break;
        }
    }

    async function play(file){ 
        try {
            if(isPlaying){
                await soundObject.pauseAsync()
                changeIsPlaying(false)
                await soundObject.unloadAsync();
                setSoundObject(soundObject)
            }
            else{
                await soundObject.loadAsync(file);
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
        <Header></Header>
        <View style={styles.content}>
            <Text style={styles.title}>
                {'Preguntas Frecuentes'}
            </Text>
            <TextInput
                style={styles.input}
                placeholderTextColor="#777777" 
                placeholder="Busca una pregunta aquí"
                value={query}
                onChangeText={searchQuery}   
            />
            <ScrollView style={styles.questions}>
                {Object.keys(questions).map(section=>
                        <View style={styles.section} >
                            <Text style={styles.title}>
                                {section}
                            </Text>
                            {questions[section].map(question=>
                                <View key={question.id}>
                                    <TouchableOpacity onPress={()=>select(question.id)}>
                                        <Text  style={styles.text}> {question.question} </Text> 
                                    </TouchableOpacity>
                                    {(selected===question.id) && 
                                        <View style={styles.answer}>
                                            <TouchableOpacity onPress={()=>play(getFileByID(question.id))}>
                                                <Image style={{
                                                    height:normalize(50),
                                                    width:normalize(50),
                                                }} source={isPlaying?require('../../public/icons/pause.png'):require('../../public/icons/sound.png')} ></Image>
                                            </TouchableOpacity>
                                            <Text style={styles.answerText} > {question.answer} </Text>
                                        </View> 
                                    }    
                                </View>
                            )}
                        </View>
                )}
                <TouchableOpacity>
                    <Text style={styles.link} onPress={()=>Actions.Contact(true)} > {'¿Tu pregunta no se encuentra en la lista? Contáctanos'} </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
)};

export default connect(
    state => ({
        questions: selectors.getQuestions(state),
        settings: selectors.getAutomatizedAudio(state),
    }),
    dispatch=>({
        search(query){
            dispatch(actions.search_question(query))
        }
    }),
)(FAQ);
