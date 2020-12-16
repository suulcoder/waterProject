import { connect } from 'react-redux';
import { Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, { useState, createRef } from 'react';
import styles from './styles'
import * as selectors from '../../reducers'
import { validateEmail } from '../../utils/validate';
import { Linking } from 'react-native';
import moment from 'moment';
import { Audio } from 'expo-av';
import * as MailComposer from "expo-mail-composer";

const Contact = ({ name_, phone_, mail_, code_, location_, submit }) => {

    const [name, changeName] = useState(name_);
    const [phone, changePhone] = useState(phone_);
    const [mail, changeEmail] = useState(mail_);
    const [code, changeCode] = useState(code_);
    const [location, changeLocation] = useState(location_);
    const [message, changeMessage] = useState('');
    const [recording, setRecording] = useState();
    const [uri, setUri] = useState('');

    async function startRecording() {
        try {
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            const recording = new Audio.Recording();
            await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await recording.startAsync();
            setRecording(recording);
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const uri1 = recording.getURI();
        setUri(uri1);
    }

    return (
        <View style={styles.container}>
            <Header></Header>
            <View style={styles.content}>
                <Text style={styles.title}>
                    {'¡Contáctanos!'}
                </Text>
                <ScrollView>
                    <View>
                        <Text style={styles.subtitle}>{'Puntos de Venta'}</Text>
                        <TouchableOpacity style={styles.viewLocation}
                            onPress={() => Linking.openURL('https://www.google.com.gt/maps/search/distribuidor+de+ecofiltro/@14.9099828,-90.7388792,8z')}>
                            <Text style={styles.submitText}> {'Haz click aquí para ver los puntos de distribuición'} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.circle}>
                            <Image style={styles.icon} source={require('../../public/icons/location.png')} ></Image>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.text}> {'Tel.: (+502) 7955-8555'} </Text>
                            <Text style={styles.text}> {'Email:  info@ecofiltro.com'} </Text>
                        </View>
                    </View>
                    <View style={styles.bar}></View>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre*"
                        value={name}
                        placeholderTextColor="#777777"
                        onChangeText={text => changeName(text)}
                        returnKeyType='next'
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#777777"
                        keyboardType={'numeric'}
                        placeholder="Teléfono*"
                        value={phone}
                        onChangeText={text => changePhone(text)}
                        returnKeyType='next'
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#777777"
                        keyboardType={'email-address'}
                        placeholder="Email"
                        value={mail}
                        onChangeText={text => changeEmail(text)}
                        returnKeyType='next'
                    />
                    {
                        !validateEmail(mail) && mail !== '' && <Text style={styles.error}> {'ESCRIBE UN CORREO VÁLIDO'} </Text>
                    }
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#777777"
                        placeholder="Ubicación/Municipio/Departamento"
                        value={location}
                        onChangeText={text => changeLocation(text)}
                        returnKeyType='next'
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#777777"
                        placeholder="Código de ecofiltro"
                        value={code}
                        onChangeText={text => changeCode(text)}
                        returnKeyType='next'
                    />
                    <TextInput
                        style={styles.input_multiline}
                        placeholderTextColor="#777777"
                        multiline={true}
                        placeholder="Mensaje*"
                        value={message}
                        onChangeText={text => changeMessage(text)}
                        returnKeyType='next'
                    />
                    <View style={styles.voicenote_section}>
                        <Text style={styles.text}>{'Presiona el botón para agregar mensaje de voz'}</Text>
                        <TouchableOpacity style={styles.record} onPress={recording ? stopRecording : startRecording}>
                            <Text style={styles.submitText}>{recording ? 'Detener grabación' : 'Iniciar grabación'}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.submit} onPress={() => submit({ name, phone, mail, code, message, location, uri })}>
                        <Text style={styles.submitText}> {'Enviar'} </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
};

export default connect(
    state => ({
        name_: selectors.getName(state),
        phone_: selectors.getPhone(state),
        code_: selectors.getCode(state),
        location_: selectors.getLocation(state),
        mail_: selectors.getMail(state),
    }),
    dispatch => ({
        submit({ name, phone, mail, code, message, location, uri }) {
            if (phone !== '' || validateEmail(mail)) {
                options = {
                    recipients: ['info@ecofiltro.com'],
                    subject: "Ecofiltro-App Contact",
                    body: `name: ${name} 
                    phone: ${phone} 
                    email: ${mail} 
                    location: ${location} 
                    ecofiltro code: ${code} 
                    message: ${message}
                    consult date: ${moment().format('MMMM Do YYYY, h:mm:ss a')}`,
                    isHtml: false,
                    attachments: [uri]
                };
                const response = MailComposer.composeAsync(options);
            }
        }
    }),
)(Contact);
