import { StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MOCK_MEETINGS = [
  { id: '1', title: 'Café & Código', location: 'São Paulo, SP', date: 'Amanhã, 14h' },
  { id: '2', title: 'Trilha no Parque', location: 'Curitiba, PR', date: 'Sábado, 9h' },
  { id: '3', title: 'Board Games Night', location: 'Rio de Janeiro, RJ', date: 'Sexta, 19h' },
];

export default function FeedScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('MeetingDetails', { meetingId: item.id, title: item.title })}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardLocation}>📍 {item.location}</Text>
      <Text style={styles.cardDate}>📅 {item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.header}>🔥 Encontros</Text>
      <FlatList
        data={MOCK_MEETINGS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#16213E',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#0F3460',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardLocation: {
    fontSize: 14,
    color: '#AAAACC',
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 14,
    color: '#AAAACC',
  },
});
