import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-8bc70.cloudfunctions.net";
const localHost = "http://284e-89-10-132-15.ngrok.io";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;