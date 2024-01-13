import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 40,
        justifyContent: 'center',
    },
    logo: {
        width: '100%',
        height: 130,
        top: -20,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    inputContainer: {
        width: '100%',
        marginTop: 20,
    },
    divBtn: {
        marginTop: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    divInputs: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 10,
        textAlign: 'center',
    },
    divTitle: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#324858',
    },
    subtitle:{
        fontSize: 14,
        color: '#546E7A',
    },
    divForgotPass: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        gap: 8,
    },
    forgotPass: {
        fontSize: 14,
        color: '#2F80ED',
    },
});

export { styles };