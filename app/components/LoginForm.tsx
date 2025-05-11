import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

interface LoginFormProps {
    onLoginSuccess: (name: string, timestamp: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Validasi jika username atau password kosong
        if (username.trim() === '' || password.trim() === '') {
            Alert.alert('Error', 'Username dan password tidak boleh kosong!');
            return;
        }

        // Simulasi login berhasil
        const found = { name: username };  // Misalnya, data pengguna ditemukan berdasarkan username
        const timestamp = new Date().toLocaleString();
        onLoginSuccess(found.name, timestamp);
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />
            {/* Checkbox untuk menampilkan password */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                <Switch value={showPassword} onValueChange={setShowPassword} />
                <Text style={{ marginLeft: 8 }}>Tampilkan Password</Text>
            </View>
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default LoginForm;
