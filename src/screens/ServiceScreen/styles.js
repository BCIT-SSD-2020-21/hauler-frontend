import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root: {
        flex: 1,
        marginHorizontal: '10%',
    },
    centerText: {
        textAlign: 'center',
    },
    text: {
        height: 40,
        margin: 15,
        borderWidth: 1,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    button: {
        backgroundColor: 'pink',
        borderRadius: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
    },

});