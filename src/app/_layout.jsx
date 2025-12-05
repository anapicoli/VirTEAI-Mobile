import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled, { ThemeProvider } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import theme from '../ui/theme';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
`;

const Center = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const fonts = {
    MarmeladRegular: require('../assets/fonts/Marmelad/Marmelad-Regular.ttf'),
    ComfortaaBold: require('../assets/fonts/Comfortaa/static/Comfortaa-Bold.ttf'),
    ComfortaaRegular: require('../assets/fonts/Comfortaa/static/Comfortaa-Regular.ttf'),
};

export default function RootLayout() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const preventedRef = useRef(false);

    // chama preventAutoHideAsync uma vez, de forma segura
    useEffect(() => {
        let mounted = true;
        async function prepare() {
            if (preventedRef.current) return;
            try {
                await SplashScreen.preventAutoHideAsync();
                preventedRef.current = true;
            } catch (e) {
                console.warn('preventAutoHideAsync error (safe):', e);
            }
        }
        if (mounted) prepare().then(() => {});
        return () => {
            mounted = false;
        };
    }, []);

    useEffect(() => {
        let mounted = true;

        async function load() {
            try {
                console.log('Resolving fonts require() results:', {
                    Marmelad: fonts.MarmeladRegular,
                    ComfortaaB: fonts.ComfortaaBold,
                    ComfortaaR: fonts.ComfortaaRegular,
                });

                await Font.loadAsync(fonts);
                if (!mounted) return;
                setFontsLoaded(true);

                try {
                    await SplashScreen.hideAsync();
                } catch (e) {
                    console.warn('SplashScreen.hideAsync error:', e);
                }
            } catch (e) {
                console.error('Font.loadAsync error:', e);
                try {
                    await SplashScreen.hideAsync();
                } catch (e2) {
                    console.warn('SplashScreen.hideAsync after font error also failed:', e2);
                }
            }
        }

        load().then(() => {});

        return () => {
            mounted = false;
        };
    }, []);

    if (!fontsLoaded) {
        return (
            <SafeAreaProvider>
                <Center>
                    <ActivityIndicator size="large" />
                </Center>
            </SafeAreaProvider>
        );
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <ThemeProvider theme={theme}>
                    <Container>
                        <StatusBar hidden={true} />
                        <Slot />
                    </Container>
                </ThemeProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
