import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './components/LoginForm';

const Login: React.FC = () => {
    const [loggedName, setLoggedName] = useState('');
    const [loginTime, setLoginTime] = useState('');
    const router = useRouter();

    const handleLoginSuccess = (name: string, time: string) => {
        setLoggedName(name);
        setLoginTime(time);
        // Pindah ke halaman Home setelah login berhasil
        router.push({
            pathname: '/home',
            params: { name, time },  // Kirim data ke halaman Home
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default Login;
