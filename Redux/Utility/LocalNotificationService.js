/* eslint-disable prettier/prettier */
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Platform } from 'react-native';

/*
    This class receive the local notification
    and redirect to the specific screen
*/
class LocalNotificationService {
    configure = async onOpenNotification => {
        PushNotification.configure({
            onRegister: function (token) {

            },

            onNotification: async function (notification) {
                notification.userInteraction = true;
                onOpenNotification(
                    Platform.OS === 'ios' ? notification.data.item : notification.data,
                );
                if (Platform.OS === 'ios') {
                    console.log('notificationIOS----', notification);

                    // (required) Called when a remote is received or opened, or local notification is opened
                    notification.finish(PushNotificationIOS.FetchResult.NoData);
                }
            },

            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },
            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,
            /**
             * (optional) default: true
             * - Specified if permissions (ios) and token (android and ios) will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             * - if you are not using remote notification or do not have Firebase installed, use this:
             *     requestPermissions: Platform.OS === 'ios'
             */
            requestPermissions: true,
        });

    };

    unRegister = () => {
        PushNotification.unregister();
    };

    createChannelAndroid = () => {
        PushNotification.createChannel(
            {
                channelId: 'pushNotificationChannelId', // (required)
                channelName: 'My channel', // (required)
                channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
                playSound: true, // (optional) default: true
                soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
                importance: 4, // (optional) default: 4. Int value of the Android notification importance
                vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created) => {
                console.log(`createChannel returned '${created}'`); // (optional) callback returns whether the channel was created, false means it already existed.
            }
        );
    };
    showNotification = async (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            /* Android Only properties */
            ...this.buildAndroidNotification(id, title, message, data, options),
            /* IOS and Android properties */
            ...this.buildIOSNotification(id, title, message, data, options),
            /* IOS and Android properties */
            title: title || '',
            message: message || '',
            channelId: 'pushNotificationChannelId', // (required)
            playSound: options.playSound || true,
            soundName: options.soundName || 'default',
            userInteraction: false,
        });
    };

    buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id: id,
            autoCancel: true,
            largeIcon: options.largeIcon || 'ic_launcher',
            smallIcon: options.smallIcon || 'ic_notification',
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || true,
            vibration: options.vibration || 300,
            priority: options.priority || 'high',
            importance: options.importance || 'high',
            data: data,
        };
    };

    buildIOSNotification = (id, title, message, data = {}, options = {}) => {
        return {
            alertAction: options.alertAction || 'view',
            category: options.category || '',
            userInfo: {
                id: id,
                item: data,
            },
        };
    };

    cancelAllNotifications = () => {
        if (Platform.OS === 'ios') {
            PushNotificationIOS.removeAllDeliveredNotifications();
        } else {
            PushNotification.cancelAllLocalNotifications();
        }
    };

    removeDeliveredNotificationByID = notificationId => {
        PushNotification.cancelLocalNotifications({ id: `${notificationId}` });
    };
}

export const localNotificationService = new LocalNotificationService();
