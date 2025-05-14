import { View, TextInput, Button, StyleSheet, ScrollView, Text } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function TambahBarang() {
  const [kode, setKode] = useState('');
  const [nama, setNama] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [satuan, setSatuan] = useState(''); // Tambahkan satuan
  const router = useRouter();

  const simpan = async () => {
    if (!kode || !nama || !jumlah || !satuan) { //tambahin satuan disini
      alert('Semua field harus diisi');
      return;
    }
    const json = await AsyncStorage.getItem('barang');
    const lama = json ? JSON.parse(json) : [];
    const baru = [...lama, { kode, nama, jumlah, satuan }];
    await AsyncStorage.setItem('barang', JSON.stringify(baru));
    router.push('/(tabs)/barang');  // navigate back to the Barang tab tidak menggunakan router.back() karena tidak disimpan di stack
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <View style={styles.card}>
        <Text style={styles.title}>Tambah Barang</Text>
        <TextInput
          placeholder="Kode"
          value={kode}
          onChangeText={setKode}
          style={styles.input}
        />
        <TextInput
          placeholder="Nama"
          value={nama}
          onChangeText={setNama}
          style={styles.input}
        />
        <TextInput
          placeholder="Jumlah"
          value={jumlah}
          onChangeText={setJumlah}
          keyboardType="numeric"
          style={styles.input}
        />
          <TextInput
            placeholder="Satuan"
            value={satuan}
            onChangeText={setSatuan}
            style={styles.input}
          />
        <Button title="Simpan" onPress={simpan} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 6,
  },
});
