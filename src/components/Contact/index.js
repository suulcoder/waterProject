import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React from 'react';
import styles from './styles'
import MapView from 'react-native-maps';

const Contact = ({}) => {
  return (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <Text style={styles.title}>
                <strong>{'Contact Us'}</strong>
            </Text>
            <View style={styles.row}>
                <View style={styles.circle}>
                    <Image style={styles.icon} source={require('../../public/icons/location.png')} ></Image>
                </View>
                <View style={styles.info}>
                    <Text style={styles.text}> <strong>{'Location: '}</strong> {' KM 77, Aldea San Lorenzo El Cubo Ciudad Vieja,  Sacatepéquez.'} </Text>
                    <Text style={styles.text}> <strong>{'Phone: '}</strong> {'(+502) 7955-8555'} </Text>
                    <Text style={styles.text}> <strong>{'Email: '}</strong> {' info@ecofiltro.com'} </Text>
                </View>
            </View>
            <MapView
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
        </View>
    </View>
)};

export default connect(
    state => ({
        
    }),
    dispatch=>({
        
    }),
)(Contact);
