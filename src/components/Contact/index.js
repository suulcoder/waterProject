import { connect } from 'react-redux';
import { Text, View, Image, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native';
import Header from '../Header';
import React, { useState } from 'react';
import styles from './styles'
import email from 'react-native-email'
import * as selectors from '../../reducers'
import { validateEmail } from '../../utils/validate';
import { Linking } from 'react-native';
import moment from 'moment';
import { Audio } from 'expo-av';
//import Mailer from 'react-native-mail';
//import MailCompose from 'react-native-mail-compose';
// import RNSmtpMailer from "react-native-smtp-mailer";
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
            console.log('Requesting permissions..');
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            console.log('Starting recording..');
            const recording = new Audio.Recording();
            await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await recording.startAsync();
            setRecording(recording);
            console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const uri1 = recording.getURI();
        setUri(uri1);
        console.log('Recording stopped and stored at', uri1, uri);
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
                        onChangeText={changeName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#777777"
                        keyboardType={'numeric'}
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
                        !validateEmail(mail) && mail !== '' && <Text style={styles.error}> {'ESCRIBE UN CORREO VÁLIDO'} </Text>
                    }
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#777777"
                        placeholder="Ubicación/Municipio/Departamento"
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
                    <TextInput
                        style={styles.input_multiline}
                        placeholderTextColor="#777777"
                        multiline={true}
                        placeholder="Mensaje*"
                        value={message}
                        onChangeText={changeMessage}
                    />
                    <Button
                        title={recording ? 'Stop Recording' : 'Start Recording'}
                        onPress={recording ? stopRecording : startRecording}
                    />
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
            console.log("llego aca", uri.substr(8))
            if (phone !== '' || validateEmail(mail)) {
                options = {
                    recipients: ['info@ecofiltro.com'],
                    subject: "Ecofiltro-App Contact",
                    body: `name: ${name}\n 
                    phone: ${phone}\n 
                    email: ${mail}\n 
                    location: ${location}\n 
                    ecofiltro code: ${code}\n 
                    message: ${message}\n
                    consult date: ${moment().format('MMMM Do YYYY, h:mm:ss a')}`,
                    isHtml: false,
                    attachments: [uri]
                };
                const response = MailComposer.composeAsync(options);
            }
        }
    }),
)(Contact);
