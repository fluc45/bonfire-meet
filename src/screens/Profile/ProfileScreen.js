import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>🧑</Text>
      </View>
      <Text style={styles.name}>Usuário Bonfire</Text>
      <Text style={styles.email}>usuario@bonfire.app</Text>

      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Encontros</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>48</Text>
          <Text style={styles.statLabel}>Conexões</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>4.8</Text>
          <Text style={styles.statLabel}>Avaliação</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] })}
      >
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#16213E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#FF6B35',
  },
  avatarText: {
    fontSize: 48,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#AAAACC',
    marginBottom: 32,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 48,
  },
  stat: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  statLabel: {
    fontSize: 12,
    color: '#AAAACC',
    marginTop: 4,
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: '#FF4444',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  logoutText: {
    color: '#FF4444',
    fontSize: 16,
    fontWeight: '600',
  },
});
