/* eslint-disable prettier/prettier */
import { Platform, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';
/*
    This class used for firebase push notification
    received on android and ios device
*/
class FCMService {
    register = (onNotification, onOpenNotification) => {
        this.checkPermission(onNotification, onOpenNotification);
    };

    registerAppWithFCM = (onNotification, onOpenNotification) => {
        if (Platform.OS === 'ios') {
            this.getToken(onNotification, onOpenNotification);
        } else {
            this.getToken(onNotification, onOpenNotification);
        }
    };

    checkPermission = (onNotification, onOpenNotification) => {
        messaging()
            .hasPermission()
            .then((enabled) => {
                if (enabled) {
                    this.registerAppWithFCM(onNotification, onOpenNotification);
                    //user has permission
                } else {
                    //user don't have permission
                    this.requestPermission(onNotification, onOpenNotification);
                }
            })
            .catch((error) => {
                this.requestPermission(onNotification, onOpenNotification);
                let err = `check permission error${error}`;
                Alert.alert(err);
            });
    };

    getToken = async (onNotification, onOpenNotification) => {
        let AfcmToken = await AsyncStorage.getItem('fcmToken');
        if (!AfcmToken) {
            messaging()
                .getToken()
                .then((fcmToken) => {
                    console.log('fcmToken', fcmToken);
                    if (fcmToken) {
                        this.setToken(fcmToken);
                        this.createNoitificationListeners(
                            onNotification,
                            onOpenNotification,
                        );
                    } else {
                        console.log('[FCMService] User does not have a device token');
                    }
                })
                .catch((error) => {
                    let err = `FCm token get error${error}`;
                    console.log('[FCMService] getToken rejected ', err);
                });
        } else {
            this.createNoitificationListeners(onNotification, onOpenNotification);
        }
    };

    requestPermission = (onNotification, onOpenNotification) => {
        messaging()
            .requestPermission()
            .then(() => {
                this.registerAppWithFCM(onNotification, onOpenNotification);
            })
            .catch((error) => {
                console.log('[FCMService] Requested persmission rejected ', error);
            });
    };

    deletedToken = async () => {
        await messaging()
            .deleteToken()
            .catch((error) => {
                console.log('Delected token error ', error);
            });
    };


    createNoitificationListeners = (onNotification, onOpenNotification) => {
        messaging().onNotificationOpenedApp((remoteMessage) => {
            if (remoteMessage) {
                onOpenNotification(remoteMessage);
            }
        });

        // when the application is opened form a quit state
        messaging()
            .getInitialNotification()
            .then((remoteMessage) => {

                if (remoteMessage) {

                    onOpenNotification(remoteMessage);
                }
            });

        // Foreground state messages
        this.messageListener = messaging().onMessage(async (remoteMessage) => {
            // Alert.alert(remoteMessage);
            if (remoteMessage) {
                onNotification(remoteMessage);
            }
        });

        // Triggered when have new token
        messaging().onTokenRefresh((fcmToken) => {
            this.setToken(fcmToken);
        });
    };

    async setToken(token) {
        await AsyncStorage.setItem('fcmToken', token);
    }

    unRegister = () => {
        this.messageListener();
    };
}

export const fcmService = new FCMService();
