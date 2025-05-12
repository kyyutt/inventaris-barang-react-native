// Import AsyncStorage untuk mengakses data lokal yang disimpan sebelumnya
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import React hooks: useEffect untuk efek samping, useState untuk state lokal
import { useEffect, useState } from 'react';
// Import komponen dan styling dari React Native
import { StyleSheet, Text, View, Button } from 'react-native';
// Import komponen dari expo-router untuk navigasi
import { useRouter } from 'expo-router';


// Komponen utama Profil
export default function Profil() {
  // State untuk menyimpan username pengguna yang login
  const [username, setUsername] = useState('');
  // Menggunakan hook useRouter untuk mendapatkan objek router
  const router = useRouter();


  // useEffect dipanggil sekali saat komponen dimuat (mount)
  useEffect(() => {
    // Fungsi async untuk mengambil data pengguna dari AsyncStorage
    const fetchUser = async () => {
      const user = await AsyncStorage.getItem('user'); // Ambil data dengan key 'user'
      if (user) {
        const parsed = JSON.parse(user);              // Parse dari string JSON ke object
        setUsername(parsed.username);                 // Simpan username ke state
      }
    };
    fetchUser(); // Panggil fungsi
  }, []);

  // Tampilan UI
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Pengguna</Text>
      {/* Tampilkan username */}
      <Text style={styles.subtitle}>Nama: {username}</Text> 
      <Button title="Edit Profil" onPress={() => router.push('/edit-profil')} />
    </View>
  );
}

// StyleSheet untuk styling tampilan komponen
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }, // Pusatkan konten
  title: { fontSize: 24, fontWeight: 'bold' },                            // Judul besar dan bold
  subtitle: { fontSize: 18, marginTop: 8 },                               // Teks tambahan dengan margin
});
