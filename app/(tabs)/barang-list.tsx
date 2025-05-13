import React, { useState, useCallback } from 'react'; // tambahkan import useState dan useCallback
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router'; // Import useRouter dari expo-router
import { useFocusEffect } from '@react-navigation/native';

// Tambahkan interface
interface Barang {
    nama: string;
    kode: string;
    jumlah: number;
}
export default function BarangList() {
    const [data, setData] = useState<Barang[]>([]); // Inisialisasi state data dari interface Barang
    const router = useRouter(); //tambahin router

    // Fungsi untuk mengambil data dari AsyncStorage
    useFocusEffect( //ganti useEffect jadi useFocusEffect untuk mengambil data saat layar fokus
        useCallback(() => { // gunakan useCallback untuk menghindari pembuatan fungsi baru setiap render
            const loadData = async () => {
                const hasil = await AsyncStorage.getItem('barang'); // ambil data dari AsyncStorage
                const barang: Barang[] = hasil ? JSON.parse(hasil) : []; // parsing data
                setData(barang); // set data ke state
            };

            loadData(); // jalankan fungsi async di dalamnya
        }, [])
    );

    // Fungsi untuk merender setiap item dalam FlatList
    // Menggunakan destructuring untuk mendapatkan item dari props
    const renderItem = ({ item }: { item: Barang }) => (
        <View style={styles.item}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text>Kode: {item.kode}</Text>
            <Text>Jumlah: {item.jumlah}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Daftar Barang</Text>

            {data.length === 0 ? (
                <Text style={{ textAlign: 'center', marginTop: 20 }}>
                    Belum ada data barang.
                </Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.kode}
                    renderItem={renderItem}
                />
            )}

            <View style={{ marginTop: 20 }}>
                <Button title="Kembali ke Form" onPress={() => router.replace('/(tabs)/barang')} />
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
    item: {
        backgroundColor: '#f2f2f2',
        padding: 12,
        borderRadius: 6,
        marginBottom: 10,
    },
    nama: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
