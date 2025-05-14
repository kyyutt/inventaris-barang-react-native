import { Tabs, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function BarangLayout() {
  const router = useRouter();

  return (
    <Tabs>
      <Tabs.Screen
        name="tambah"
        options={{
          title: 'Tambah Barang',
          headerLeft: () => (
            <Pressable onPress={() => router.push('/(tabs)/barang')} style={{ marginLeft: 12 }}>
              <Ionicons name="arrow-back" size={24} />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="edit"
        options={{
          title: 'Edit Barang',
          headerLeft: () => (
            <Pressable onPress={() => router.push('/(tabs)/barang')} style={{ marginLeft: 12 }}>
              <Ionicons name="arrow-back" size={24} />
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}
