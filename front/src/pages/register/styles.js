import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 40,
        justifyContent: 'center',
    },
    divTitle: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 20,
        textAlign: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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
    logo:{
        width: 200,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
});

export { styles };
