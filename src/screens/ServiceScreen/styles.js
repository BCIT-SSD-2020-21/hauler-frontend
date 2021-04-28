import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root: {
        flex: 1,
        //alignItems: 'center',
        backgroundColor: 'white',
        
    },
    centerText: {
        textAlign: 'center',
        marginTop: 100,
        fontSize: 30,
        fontFamily: 'sans-serif-condensed',
    },
    text: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        fontWeight: 'bold'
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 125,
        flexDirection: 'column'
    },
    button: {

        borderRadius: 10,
        display: 'flex',
        margin: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
        textAlign: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }

});