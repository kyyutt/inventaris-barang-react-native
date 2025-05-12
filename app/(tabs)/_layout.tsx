// Import komponen Tabs dari expo-router
import { Tabs } from 'expo-router';
// Import ikon dari pustaka Ionicons yang disediakan oleh @expo/vector-icons
import { Ionicons } from '@expo/vector-icons';

// Komponen utama untuk mengatur layout navigasi tab
export default function TabLayout() {
  return (
    <Tabs>
      {/* Tab pertama: Beranda */}
      <Tabs.Screen
        name="index" // Mengarah ke file app/(tabs)/index.tsx
        options={{
          title: 'Beranda', // Judul yang tampil di tab
          tabBarIcon: ({ color, size }) => (
            // Menampilkan ikon dengan nama "home-outline"
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      {/* Tab kedua: Profil */}
      <Tabs.Screen
        name="profil" // Mengarah ke file app/(tabs)/profil.tsx
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => (
            // Ikon "person-circle-outline" untuk profil
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      {/* Tab ketiga: Pengaturan */}
      <Tabs.Screen
        name="pengaturan" // Mengarah ke file app/(tabs)/pengaturan.tsx
        options={{
          title: 'Pengaturan',
          tabBarIcon: ({ color, size }) => (
            // Ikon "settings-outline" untuk pengaturan
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
