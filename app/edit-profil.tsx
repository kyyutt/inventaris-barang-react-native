import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function EditProfil() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profil</Text>
      {/* Tambahkan form atau input sesuai kebutuhan */}
      <Button title="Kembali" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  title: {
    fontSize: 24, fontWeight: 'bold',
  },
});
