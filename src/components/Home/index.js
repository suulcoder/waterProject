import { connect } from 'react-redux';
import {Text, View, Image } from 'react-native';
import React from 'react';
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';

const Home = ({}) => {
  return (
    <View style={styles.container}>
        <LinearGradient
            colors={[colors.primaryB, 'transparent']}
            style={styles.gradient}
        >    
    </LinearGradient>
</View>
)};

export default connect(
    state => ({
    
    }),
    dispatch=>({
        
    }),
)(Home);
