import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const Home: React.FC = () => {
  const router = useRouter();
  const { name, time } = useLocalSearchParams();  // Terima data dari Login

  const handleLogout = () => {
    router.replace('/login'); // Pindah kembali ke halaman login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Selamat datang, {name}!</Text>
      <Text style={styles.timestamp}>Login pada: {time}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  welcome: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  timestamp: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
    marginTop: 8,
  },
});

export default Home;
