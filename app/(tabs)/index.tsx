import { View, Text, StyleSheet } from 'react-native';

export default function Beranda() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ini halaman Beranda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20 },
});
