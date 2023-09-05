import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container : {
        flex: 1,
        backgroundColor: '#383535',
        padding: 36
    },
    title : {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    scoreboard: {   
        flexDirection: 'row',
        marginTop: 144
    },
    teamUs : {
        width: 120
    },
    titleUs: {
        color: '#4AA5F9',
        fontSize: 26,
        paddingLeft: 20
    },
    scoreUs: {
        color: '#4AA5F9',
        fontWeight: 'bold',
        fontSize: 84
    },
    teamThey: {
        width: 220,
        paddingLeft: 100
    },
    titleThey: {
        color: '#C08DF3',
        fontSize: 26,
        paddingLeft: 20
    },
    scoreThey: {
        color: '#C08DF3',
        fontWeight: 'bold',
        fontSize: 84
    },
    scorePadding: {
        paddingLeft: 25
    },
    buttons: {
        flexDirection: 'row'
    },
    buttonsThey: {
        paddingLeft: 150
    },
    buttonAdd : {
        backgroundColor: '#589D52',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 14,
        marginTop: 40,
        width: 65,
        height: 65
    },
    buttonDec : {
        backgroundColor: '#BD1010',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 14,
        marginTop: 20,
        width: 65,
        height: 65
    },
    buttonReset : {
        backgroundColor: '#DE9609',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 14,
        marginTop: 100,
        width: 300,
        height: 65
    },
    textButton : {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    }
})