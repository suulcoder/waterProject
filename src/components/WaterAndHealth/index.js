import { connect } from 'react-redux';
import {Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React from 'react';
import { Linking } from 'react-native';
import styles from './styles'
import { normalize } from '../../utils/normalize';


const Health = ({}) => (
    <View style={styles.container}>
        <Header></Header>
            <ScrollView
            contentContainerStyle={{alignItems: 'center', backgroundColor:'#D8D8D8'}}>
                <Image
                source={require('../../public/img/aguaYSalud.png')}
                resizeMode='stretch'
                style={{width: '100%',
                height: undefined,
                aspectRatio: 0.4}}
                />
                <Text style={{color: 'black',  textDecorationLine: 'underline', marginBottom: normalize(1)}}
                    onPress={() => Linking.openURL('https://www.who.int/es/news-room/fact-sheets/detail/drinking-water')}>
                Haz click aquí para visitar el sitio web
                </Text>
            </ScrollView>
    </View>
);

export default Health;
