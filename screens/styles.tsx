import { StyleSheet } from "react-native";
import { StatusBar, Platform } from 'react-native'

export const stylesGlobal = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 150,
        height: 12,
        backgroundColor: '#f9f9f9',
        flex: 1,
        justifyContent: "center"
    },

})
