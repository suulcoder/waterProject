import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Header';
import React, { useState } from 'react';
import styles from './styles'
import { normalize } from '../../utils/normalize';
import { Actions } from 'react-native-router-flux';

const Stories = ({ }) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <ScrollView>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.element} onPress={() => Actions.Whyitworks(true)}>
                        <View style={styles.row1}>
                            <Image style={{
                                height: normalize(15),
                                width: normalize(15),
                                resizeMode: 'contain',
                            }}
                                source={require('../../../assets/icons/Testimonials.png')}
                            ></Image>
                            <Text style={styles.welcomeText}> {'Testimoniales'} </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => Actions.Story1(false)}>
                        <Image style={{
                            alignSelf: 'center',
                            height: normalize(200),
                            width: normalize(270),
                            borderRadius: normalize(10),
                        }} source={require('../../../assets/img/luis.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'La historia de Don Luis'} </Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => Actions.Story2(false)}>
                        <Image style={{
                            alignSelf: 'center',
                            height: normalize(270),
                            width: normalize(270),
                            borderRadius: normalize(10),
                        }} source={require('../../../assets/img/story.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'Testimonial familiar anónimo'} </Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => Actions.Story3(false)}>
                        <Image style={{
                            alignSelf: 'center',
                            height: normalize(270),
                            width: normalize(270),
                            borderRadius: normalize(10),
                        }} source={require('../../../assets/img/catalina.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'La historia de Doña Catalina Pop'} </Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => Actions.Story4(false)}>
                        <Image style={{
                            alignSelf: 'center',
                            height: normalize(270),
                            width: normalize(270),
                            borderRadius: normalize(10),
                        }} source={require('../../../assets/img/eldurazno.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'La comunidad de El Durazno'} </Text>
                </View>
            </ScrollView>
        </View>
    </View>
);

export default connect(
    state => ({

    }),
    dispatch => ({

    }),
)(Stories);
