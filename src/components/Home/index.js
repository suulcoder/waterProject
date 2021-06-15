import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import Menu from '../Menu';
import React from 'react';
import styles from './styles'
import { Actions } from 'react-native-router-flux';

const Home = ({}) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../../assets/logo/Logoldpi.png')} ></Image>
            </View>
            <TouchableOpacity onPress={()=>Actions.Settings(true)} >
                <Image style={styles.icon} source={require('../../../assets/icons/Configuracionldpi.png')} ></Image>
            </TouchableOpacity>  
        </View>
        <Menu></Menu>
    </View>
);

export default connect(
    state => ({
        
    }),
    dispatch=>({
        
    }),
)(Home);
