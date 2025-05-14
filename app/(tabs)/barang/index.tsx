import { useCallback, useState } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, useFocusEffect } from 'expo-router';

export default function BarangList() {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  const loadData = async () => {
    const json = await AsyncStorage.getItem('barang');
    setData(json ? JSON.parse(json) : []);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  const hapus = async (kode: string) => {
    Alert.alert('Konfirmasi', 'Yakin ingin menghapus?', [
      { text: 'Batal' },
      {
        text: 'Hapus',
        onPress: async () => {
          const baru = data.filter((item) => item.kode !== kode);
          await AsyncStorage.setItem('barang', JSON.stringify(baru));
          setData(baru);
        },
      },
    ]);
  };

  return (
    <View style={{ padding: 24 }}>
      <Button title="Tambah Barang" onPress={() => router.push('../../barang/tambah')} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.kode}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>
              {item.nama} ({item.kode}) - {item.jumlah} {item.satuan ?? ''}
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Button
                title="Edit"
                onPress={() =>
                  router.push({ pathname: '../../barang/edit', params: item })
                }
              />
              <View style={{ width: 10 }} />
              <Button title="Hapus" color="red" onPress={() => hapus(item.kode)} />
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={{ marginTop: 20, textAlign: 'center', color: '#888' }}>Belum ada data barang.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
  },
});
