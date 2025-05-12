import { Slot } from 'expo-router';
import { AuthProvider, useAuth } from './context/AuthContext';
import { View, ActivityIndicator } from 'react-native';

// Komponen pembungkus utama
function AppContent() {
  const { isLoading } = useAuth();

  // Saat AuthContext masih loading, tampilkan spinner
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Jika sudah selesai loading, tampilkan konten
  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
