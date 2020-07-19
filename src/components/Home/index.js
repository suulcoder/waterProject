import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import Menu from '../Menu';
import React from 'react';
import styles from './styles'
import { Actions } from 'react-native-router-flux';

const Home = ({}) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.icon} source={require('../../public/logo/icon.png')} ></Image>
            <Image style={styles.logo} source={require('../../public/logo/logo.png')} ></Image>
            <TouchableOpacity onPress={()=>Actions.Settings(true)} >
                <Image style={styles.icon} source={require('../../public/icons/settings.png')} ></Image>
            </TouchableOpacity>  
        </View>
        <Text style={styles.title}>
            {'Aplicación Móvil'}
        </Text>
        <Menu></Menu>
    </View>
);

export default connect(
    state => ({
        
    }),
    dispatch=>({
        
    }),
)(Home);
