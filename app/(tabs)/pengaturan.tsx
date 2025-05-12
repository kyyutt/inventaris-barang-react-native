import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'expo-router';

export default function Pengaturan() {
    const { logout, user } = useAuth();
    const router = useRouter();
    const handleLogout = async () => {
        await logout();
        router.replace('/auth/login');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Selamat datang, {user?.username}</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 24 },
    text: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
});