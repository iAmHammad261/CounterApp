import { StyleSheet } from "react-native";

const stylesForCounterScreen = StyleSheet.create({
    counterScreenBackground: {
        flex: 1,
        backgroundColor: '#222222', 
        padding: '5%',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    textOfValueOfCounter: {
        color: '#ffffff',
        fontSize: 30,
        textAlign: 'center'
    },
    viewForPressable: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    pressableForIncrement: {
        backgroundColor:'#4CAF50',
        paddingHorizontal: '10%',
        paddingVertical: '3%',
        borderRadius:12,
    },
    pressableOfReset: {
        padding: '3%',
    },
    textForPressable : {
        fontSize: 18,
        // letterSpacing: 0.5,
        color: 'white',
        fontFamily: 'bold'
    }

});

export default stylesForCounterScreen;