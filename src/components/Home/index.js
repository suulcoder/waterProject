import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import Menu from '../Menu';

const Home = ({}) => {

  const test = () => {console.log("test")}

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.icon} source={require('../../public/logo/icon.png')} ></Image>
            <Image style={styles.logo} source={require('../../public/logo/logo.png')} ></Image>
            <TouchableOpacity onClick={() => home}>
                <Image style={styles.icon} source={require('../../public/icons/settings.png')} ></Image>
            </TouchableOpacity>  
        </View>
        <Text style={styles.title}>
            <strong>{'Mobile App'}</strong>
        </Text>
        <Menu></Menu>
        <View style={styles.bottom}>
        </View>
    </View>
)};

export default connect(
    state => ({
        
    }),
    dispatch=>({
        
    }),
)(Home);
