import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';

export function useNotification () {

    const [ notificationPermissions, setNotificationsPermission ] = useState<boolean | undefined>(undefined);
    
    const setNotification = () => {
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: false,
            }),
        });

        Notifications.scheduleNotificationAsync({
            content: {
                title: "Não quer morrer seco, né?",
                body: "Então vá beber água!!!"
            },
            trigger: {
                seconds: 60 * 60,
                repeats: true
            },
        });
    }

    const handleGetNotificationsPermission = async () => {
        const settings = await Notifications.getPermissionsAsync();
        
        const isPermissionGranted = settings.granted ||
            settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL;
        
        setNotificationsPermission(isPermissionGranted);
          
    }

    const cancelNotifications = () => {
        Notifications.cancelAllScheduledNotificationsAsync();
    }

    useEffect(() => {
        handleGetNotificationsPermission();
    }, [])

    return {
        setNotification,
        cancelNotifications,
        notificationPermissions,
        getNotificationsPermission: handleGetNotificationsPermission
    }
}