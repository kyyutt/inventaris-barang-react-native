import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Pengaturan() {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    router.replace('/auth/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pengaturan</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  text: { fontSize: 20, marginBottom: 16, textAlign: 'center' },
});
