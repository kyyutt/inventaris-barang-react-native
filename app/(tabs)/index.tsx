import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function Beranda() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halo, {user?.username}</Text>
      <Text style={styles.text}>Selamat datang di halaman beranda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
});




