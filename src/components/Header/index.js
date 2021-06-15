import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

const Header = ({home, back}) => (
    <View style={styles.header}>
        <TouchableOpacity onPress={back}>
            <Image style={styles.icon} source={require('../../../assets/icons/Regresar.png')} ></Image>
        </TouchableOpacity>  
        <Image style={styles.logo} source={require('../../../assets/logo/Logoldpi.png')} ></Image>
        <TouchableOpacity onPress={home}>
            <Image style={styles.icon} source={require('../../../assets/icons/Inicio.png')} ></Image>
        </TouchableOpacity>  
    </View>
);

export default connect(
    state => ({
        
    }),
    dispatch=>({
        back(){
            Actions.pop()
        },
        home(){
            Actions.replace('Home')
        },
    }),
)(Header);
