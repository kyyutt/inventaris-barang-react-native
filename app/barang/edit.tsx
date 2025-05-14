import { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ScrollView, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';


export default function EditBarang() {
  const route = useRoute();
  const { kode } = (route.params as { kode: string }) || {};
  const [nama, setNama] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [satuan, setSatuan] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loadBarang = async () => {
      const data = JSON.parse(await AsyncStorage.getItem('barang') || '[]');
      const barang = data.find((item: { kode : any }) => item.kode === kode);
      if (barang) {
        setNama(barang.nama);
        setJumlah(barang.jumlah);
        setSatuan(barang.satuan || '');
      }
    };
    loadBarang();
  }, [kode]);

  const simpanPerubahan = async () => {
    if (!nama || !jumlah || !satuan) {
      Alert.alert('Validasi', 'Semua field harus diisi');
      return;
    }

    const data = JSON.parse(await AsyncStorage.getItem('barang') || '[]');
    const index = data.findIndex((item: { kode : any }) => item.kode === kode);
    if (index !== -1) {
      data[index] = { kode, nama, jumlah, satuan };
      await AsyncStorage.setItem('barang', JSON.stringify(data));
      router.push('/(tabs)/barang');
    }
  };

  return (  
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <View style={styles.card}>
        <Text style={styles.title}>Edit Barang</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama Barang"
          value={nama}
          onChangeText={setNama}
        />
        <TextInput
          style={styles.input}
          placeholder="Jumlah Barang"
          value={jumlah}
          onChangeText={setJumlah}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Satuan Barang"
          value={satuan}
          onChangeText={setSatuan}
        />
        <Button title="Simpan Perubahan" onPress={simpanPerubahan} />
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


