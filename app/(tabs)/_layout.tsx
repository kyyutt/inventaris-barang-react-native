    import { Tabs } from 'expo-router';
    import { Ionicons } from '@expo/vector-icons';

    export default function TabLayout() {
        return (
            <Tabs>
                <Tabs.Screen name="index" options={{
                    title: 'Beranda',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size}
                        color={color} />
                }} />
                <Tabs.Screen name="profil" options={{
                    title: 'Profil',
                    tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size}
                        color={color} />
                }} />
                <Tabs.Screen name="pengaturan" options={{
                    title: 'Pengaturan',
                    tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size}
                        color={color} />
                }} />
                <Tabs.Screen name="barang/index" options={{
                    title: 'Barang',
                    tabBarIcon: ({ color, size }) => <Ionicons name="cube" size={size}
                        color={color} />
                }} />
            </Tabs>
        );
    } 
