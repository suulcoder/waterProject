import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

const Header = ({home, back}) => (
    <View style={styles.header}>
        <TouchableOpacity onPress={back}>
            <Image style={styles.icon} source={require('../../public/icons/back.png')} ></Image>
        </TouchableOpacity>  
        <Image style={styles.logo} source={require('../../public/logo/logo.png')} ></Image>
        <TouchableOpacity onPress={home}>
            <Image style={styles.icon} source={require('../../public/icons/home.png')} ></Image>
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
