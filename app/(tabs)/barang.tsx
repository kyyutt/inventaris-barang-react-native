import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router'; //tambahin import useRouter

export default function BarangForm() {
  const [nama, setNama] = useState('');
  const [kode, setKode] = useState('');
  const [jumlah, setJumlah] = useState('');
  const router = useRouter();

  const simpanData = async () => {
    // Validasi: semua field harus diisi
    if (!nama || !kode || !jumlah) {
      Alert.alert('Validasi', 'Semua field wajib diisi!');
      return;
    }

    // Tambahkan  validasi jumlah harus angka dan minimal 1 disini
    const jumlahAngka = parseInt(jumlah);
    if (isNaN(jumlahAngka) || jumlahAngka < 1) {
      Alert.alert('Validasi', 'Jumlah harus berupa angka dan minimal 1!');
      return;
    }

    // Ambil data lama dari AsyncStorage
    const barangBaru = { nama, kode, jumlah: jumlahAngka };
    const dataLama = await AsyncStorage.getItem('barang');
    const data = dataLama ? JSON.parse(dataLama) : [];

    // kemudian tambahkan validasi kode tidak boleh duplikat
    const isDuplicate = data.some((item: any) => item.kode === kode);
    if (isDuplicate) {
      Alert.alert('Validasi', 'Kode barang sudah ada!');
      return;
    }

    // Tambah data baru ke array lama dan simpan lagi
    data.push(barangBaru);
    await AsyncStorage.setItem('barang', JSON.stringify(data));
    Alert.alert('Sukses', 'Data barang berhasil disimpan');

    // Reset form input
    setNama('');
    setKode('');
    setJumlah('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Data Barang</Text>

      {/* Label dan input nama */}
      <Text style={styles.label}>Nama Barang</Text>
      <TextInput value={nama} onChangeText={setNama} style={styles.input} />

      {/* Label dan input kode */}
      <Text style={styles.label}>Kode Barang</Text>
      <TextInput value={kode} onChangeText={setKode} style={styles.input} />

      {/* Label dan input jumlah */}
      <Text style={styles.label}>Jumlah</Text>
      <TextInput
        value={jumlah}
        onChangeText={setJumlah}
        keyboardType="numeric"
        style={styles.input}
      />

      {/* Tombol simpan */}
      <Button title="Simpan" onPress={simpanData} />

      {/* Navigasi ke daftar barang */}
      <View style={{ marginTop: 16 }}>
        <Button
          title="Lihat Daftar Barang"
          onPress={() => router.push('/(tabs)/barang-list')}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
});

