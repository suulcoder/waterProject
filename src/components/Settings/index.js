import { connect } from 'react-redux';
import {Text, View, Picker, ScrollView, TextInput, TouchableOpacity, Switch } from 'react-native';
import Header from '../Header';
import React, {useState} from 'react';
import styles from './styles'
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';
import * as selectors from '../../reducers'
import * as actions from '../../actions/settings'
import { Actions } from 'react-native-router-flux';
import { validateEmail } from '../../utils/validate';

const Settings = ({name_,phone_,mail_,code_,language_,location_,automatizedAudio,submit, setLanguage, setAudio}) => {
  
    const [name, changeName] = useState(name_);
    const [phone, changePhone] = useState(phone_);
    const [mail, changeEmail] = useState(mail_);
    const [code, changeCode] = useState(code_);
    const [location, changeLocation] = useState(location_);
    const [language, changeLanguage] = useState(language_)
    const [audio, changeAudio] = useState(automatizedAudio)

    const setLanguage_ = (language) => {
        changeLanguage(language)
        setLanguage(language)
    }

    const toggleSwitch = (previousState) => {
        setAudio(!previousState)
        changeAudio(!previousState)
    };

    return (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <Text style={styles.title}>
                {'Configuración:'}
            </Text>
            <ScrollView>
                <View style={styles.row}>
                    <Text style={styles.text}>{'Idioma: '} </Text>
                    <Picker
                        selectedValue={language}
                        style={{ height: normalize(50), width: normalize(550), color:colors.black }}
                        onValueChange={(itemValue, itemIndex) => setLanguage_(itemValue)}
                    >
                        <Picker.Item label="Español" value="Español" color='black' />
                    </Picker>
                </View>
                <View style={styles.bar}></View>
                <Text style={styles.text_}>{'Ajustes de usuario:'} </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre*"
                    value={name}
                    placeholderTextColor="#777777" 
                    onChangeText={changeName}   
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#777777" 
                    keyboardType={'numeric'}x
                    placeholder="Teléfono*"
                    value={phone}
                    onChangeText={changePhone}   
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#777777" 
                    keyboardType={'email-address'}
                    placeholder="Email"
                    value={mail}
                    onChangeText={changeEmail}   
                />
                {
                    !validateEmail(mail) && mail!=='' && <Text style={styles.error}> {'ESCRIBE UN CORREO VÁLIDO'} </Text>
                }
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#777777" 
                    placeholder="Ubicación/Municipio/Departemento"
                    value={location}
                    onChangeText={changeLocation}   
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#777777" 
                    placeholder="Código de ecofiltro"
                    value={code}
                    onChangeText={changeCode}   
                />
                <TouchableOpacity style={styles.submit} onPress={() => submit({name,phone,mail,code,location})}>
                    <Text style={styles.submitText}> {'Guardar'} </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
)};

export default connect(
    state => ({
        language_:selectors.getLanguage(state),
        name_: selectors.getName(state),
        phone_: selectors.getPhone(state),
        code_: selectors.getCode(state),
        location_: selectors.getLocation(state),
        mail_: selectors.getMail(state),
        automatizedAudio: selectors.getAutomatizedAudio(state)
    }),
    dispatch=>({
        submit({name,phone,mail,code,location}){
            if(phone!=='' || validateEmail(mail)){
                dispatch(actions.set_name(name))
                dispatch(actions.set_code(code))
                dispatch(actions.set_phone(phone))
                dispatch(actions.set_mail(mail))
                dispatch(actions.set_location(location))
                Actions.pop(true)
            }
        },
        setLanguage({language}){
            dispatch(actions.setLanguage(language))
        },
        setAudio(value){
            dispatch(actions.set_automatized_audio(value))
        }
    }),
)(Settings);
