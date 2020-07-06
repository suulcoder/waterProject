import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React from 'react';
import styles from './styles'

const Contact = ({}) => {
  return (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <Text style={styles.title}>
                <strong>{'Contact Us'}</strong>
            </Text>
            <View style={styles.row}>
                <Image style={styles.icon} source={require('../../public/icons/location.png')} ></Image>
                <View style={styles.info}>
                    <Text style={styles.text}> <strong>{'Location: '}</strong> {' KM 77, Aldea San Lorenzo El Cubo Ciudad Vieja,  Sacatepéquez.'} </Text>
                    <Text style={styles.text}> <strong>{'Phone: '}</strong> {'(+502) 7955-8555'} </Text>
                    <Text style={styles.text}> <strong>{'Email: '}</strong> {' info@ecofiltro.com'} </Text>
                </View>
            </View>
        </View>
    </View>
)};

export default connect(
    state => ({
        
    }),
    dispatch=>({
        
    }),
)(Contact);
