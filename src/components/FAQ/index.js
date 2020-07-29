import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import * as actions from '../../actions/FAQ'
import * as selectors from '../../reducers'
import Header from '../Header';
import React, {useState} from 'react';
import styles from './styles';
import SoundPlayer from 'react-native-sound-player';
import { normalize } from '../../utils/normalize';

const FAQ = ({questions, search, settings}) => {
  
    const [query, changeQuery] = useState('');
    const [selected, changeSelected] = useState()

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

    const play = (id) => { 
        try {
            SoundPlayer.playSoundFile(`ecofiltro_faq_${id}`, 'm4a')
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
                                            <TouchableOpacity onPress={()=>play(question.id)}>
                                                <Image style={{
                                                    height:normalize(50),
                                                    width:normalize(50),
                                                }} source={require('../../public/icons/sound.png')} ></Image>
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
