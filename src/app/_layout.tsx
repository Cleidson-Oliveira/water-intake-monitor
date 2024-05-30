import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function () {
    return (
        <>
            <Slot />
            <StatusBar style="auto" />
        </>
    )
}