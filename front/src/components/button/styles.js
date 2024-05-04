import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonSolid: {
        backgroundColor: '#21aaf1',
        padding: 16,
        width: '100%',
        borderRadius: 12,
        color: '#fff',
        textAlign: 'center',
    },
    buttonOutline: {
        backgroundColor: 'transparent',
        padding: 16,
        width: '100%',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#21aaf1',
        textAlign: 'center',
    },
    buttonSolidRed: {
        backgroundColor: '#f31938',
        padding: 16,
        width: '100%',
        borderRadius: 12,
        color: '#fff',
        textAlign: 'center',
    },
    buttonOutlineRed:{
        backgroundColor: 'transparent',
        padding: 16,
        width: '100%',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#f31938',
        textAlign: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#DDE4E8',
        padding: 16,
        width: '100%',
        borderRadius: 12,
        color: '#324858',
        textAlign: 'center',
    },
});

export { styles };
