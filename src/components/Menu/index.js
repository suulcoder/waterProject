import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const Menu = ({radius, elements}) => {

  const angle = 365/radius;

  return (
    <View style={styles.container} >
        <Text style={styles.welcomeText}>
            <strong>{'Welcome'}</strong>
        </Text>
        <View style={styles.row}>
            <TouchableOpacity style={styles.element} onClick={console.log("")}>
                <Image style={{
                    alignSelf: 'center',
                    height:normalize(20),
                    width:normalize(20),
                }} source={require('../../public/icons/test.png')} ></Image>
                <Text style={styles.text}> {'Test your water'} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.element} onClick={console.log("")}>
                <Image style={{
                    alignSelf: 'center',
                    height:normalize(15),
                    width:normalize(20),
                }} source={require('../../public/icons/eco.png')} ></Image>
                <Text style={styles.text}> {'About Ecofiltro'} </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.element} onClick={console.log("")}>
                <Image style={{
                    alignSelf: 'center',
                    height:normalize(20),
                    width:normalize(20),}}
                source={require('../../public/icons/water.png')} ></Image>
                <Text style={styles.text}> {'Contaminated water and your health'} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.element} onClick={console.log("")}>
                <Image style={{
                    alignSelf: 'center',
                    height:normalize(15),
                    width:normalize(25),
                }} source={require('../../public/icons/contactus.png')} ></Image>
                <Text style={styles.text}> {'Contact us'} </Text>
            </TouchableOpacity>
        </View>
    </View>
)};

export default connect(
    state => ({
        
    }),
    dispatch=>({
        
    }),
)(Menu);
