import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import React from "react";
import {ThemeProvider} from "styled-components/native";
import * as firebase from "firebase";

import {
    useFonts as useOswald,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato";

import {theme} from "./src/infastructure/theme";
import {Navigation} from "./src/infastructure/navigation";


import {AuthenticationContextProvider} from "./src/services/authentication/authentication.context";

const firebaseConfig = {
    apiKey: "AIzaSyAtpPIQ1z2peFlJpOK-GVmIxy7kGAlWLzk",
    authDomain: "mealstogo-8bc70.firebaseapp.com",
    projectId: "mealstogo-8bc70",
    storageBucket: "mealstogo-8bc70.appspot.com",
    messagingSenderId: "762954165384",
    appId: "1:762954165384:web:d6083afc1bc2812816433d"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function App() {
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });

    const [latoLoaded] = useLato({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthenticationContextProvider>
                    <Navigation/>
                </AuthenticationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>
    );
}