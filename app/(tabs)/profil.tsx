// Import AsyncStorage untuk mengakses data lokal yang disimpan sebelumnya
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import React hooks: useEffect untuk efek samping, useState untuk state lokal
import { use, useEffect, useState } from 'react';
// Import komponen dan styling dari React Native
import { StyleSheet, Text, View, Button } from 'react-native';
// Import komponen dari expo-router untuk navigasi
import { useRouter } from 'expo-router';
// Import komponen AuthContext untuk mengelola otentikasi pengguna
import {useAuth} from '../context/AuthContext';


// Komponen utama Profil
export default function Profil() {
  // State untuk menyimpan username pengguna yang login
  const { user } = useAuth(); // Menggunakan hook useAuth untuk mendapatkan informasi pengguna
  // Menggunakan hook useRouter untuk mendapatkan objek router
  const router = useRouter();



  // useEffect dipanggil sekali saat komponen dimuat (mount)
  useEffect(() => {
    if (!user) {
      // Jika tidak ada pengguna yang login, arahkan ke halaman login
      router.replace('/auth/login');
    }
  }, [user]); // Dependensi adalah user, jika user berubah maka efek ini akan dijalankan

  // Tampilan UI
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Pengguna</Text>
      {/* Tampilkan username */}
      <Text style={styles.subtitle}>Nama: {user?.username} </Text> 
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
