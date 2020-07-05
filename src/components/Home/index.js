import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import CircularMenu from '../CircularMenu';

const Home = ({}) => {

  const test = () => {console.log("test")}

  return (
    <View style={styles.container}>
        <LinearGradient
            colors={[colors.white, colors.primaryB]}
            style={styles.gradient}
        >
            <View style={styles.header}>
                <Image style={styles.icon} source={require('../../public/logo/icon.png')} ></Image>
                <Image style={styles.logo} source={require('../../public/logo/logo.png')} ></Image>
                <TouchableOpacity onClick={() => home}>
                    <Image style={styles.icon} source={require('../../public/icons/settings.png')} ></Image>
                </TouchableOpacity>  
            </View>
            <CircularMenu radius={5} elements={[
                {onClick: test, icon: require('../../public/icons/settings.png'), title: 'LALALA'},
                {onClick: test, icon: require('../../public/icons/settings.png'), title: 'LALALA'}
            ]} ></CircularMenu>s
    </LinearGradient>
</View>
)};

export default connect(
    state => ({
        
    }),
    dispatch=>({
        
    }),
)(Home);
