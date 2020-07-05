import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';

const Menu = ({radius, elements}) => {

  const angle = 365/radius;

  return (
    <View styles={styles.container} >
        {elements&&
            elements.map(
                element => (
                    <TouchableOpacity style={styles.element} onClick={element.onClick}>
                        <Image style={styles.icon} source={element.icon} ></Image>
                        <Text style={styles.text}> {element.title} </Text>
                    </TouchableOpacity>
                )
            )
        }
    </View>
)};

export default connect(
    (state, {radius, elements}) => ({
        radius,
        elements
    }),
    dispatch=>({
        
    }),
)(Menu);
