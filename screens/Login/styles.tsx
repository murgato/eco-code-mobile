import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        height: 46,
        width: 250,
        textAlign: "center",
        marginHorizontal: 75,
        
    },
    button: {
        fontSize: 20,
        color: 'black',
        width: 250,
        marginHorizontal: 75,
        backgroundColor: '#8BAAB4',
        borderRadius: 5,

    },
    buttonRegister: {
        marginTop: 12,
        fontSize: 20,
        color: 'black',
        width: 250,
        marginHorizontal: 75,
        backgroundColor: '#C7D4E2',
        borderRadius: 5,
    }
})
