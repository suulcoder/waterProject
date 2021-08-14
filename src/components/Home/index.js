import { connect } from 'react-redux';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Menu from '../Menu';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles'
import { Actions } from 'react-native-router-flux';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

const Home = ({ }) => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../../assets/logo/Logoldpi.png')} ></Image>
                </View>
                <TouchableOpacity onPress={() => Actions.Settings(true)} >
                    <Image style={styles.icon} source={require('../../../assets/icons/Configuracionldpi.png')} ></Image>
                </TouchableOpacity>
            </View>
            <Menu></Menu>
        </View>
    );
}

Notifications.scheduleNotificationAsync({
    content: {
        title: "You've got mail 1! 📬",
        body: 'Here is the notification body',
        data: { data: 'goes here' },
    },
    trigger: {
        seconds: 8,
    },
});
Notifications.scheduleNotificationAsync({
    content: {
        title: "You've got mail 2! 📬",
        body: 'Here is the notification body',
        data: { data: 'goes here' },
    },
    trigger: {
        seconds: 10,
    },
});

async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}


export default connect(
    state => ({

    }),
    dispatch => ({

    }),
)(Home);
