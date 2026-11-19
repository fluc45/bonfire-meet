import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MeetingDetailsScreen({ route, navigation }) {
  const { meetingId, title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎯</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>📍 Local a definir</Text>
      <Text style={styles.detail}>📅 Data a definir</Text>
      <Text style={styles.detail}>👥 5 participantes confirmados</Text>
      <Text style={styles.id}>ID: {meetingId}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Participar do Encontro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </View>
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
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 24,
  },
  detail: {
    fontSize: 16,
    color: '#AAAACC',
    marginBottom: 8,
  },
  id: {
    fontSize: 12,
    color: '#555577',
    marginTop: 8,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#FF6B35',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    paddingVertical: 12,
  },
  backText: {
    color: '#AAAACC',
    fontSize: 16,
  },
});
