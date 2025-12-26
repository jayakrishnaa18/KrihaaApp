import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#dc2626" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Krihaa News</Text>
        <Text style={styles.headerSubtitle}>Breaking News & Entertainment</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/300x150/dc2626/ffffff?text=Breaking+News' }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Movies</Text>
            </View>
            <Text style={styles.cardTitle}>Dhurandhar Crosses ₹1000 Crore Worldwide</Text>
            <Text style={styles.cardText}>Ranveer Singh's spy thriller enters elite club...</Text>
            <Text style={styles.cardDate}>Dec 26, 2025</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/300x150/1e40af/ffffff?text=Tech+News' }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Tech</Text>
            </View>
            <Text style={styles.cardTitle}>Google Gmail Username Change Coming 2026</Text>
            <Text style={styles.cardText}>Revolutionary feature after years of requests...</Text>
            <Text style={styles.cardDate}>Dec 26, 2025</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/300x150/059669/ffffff?text=Sports+News' }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Sports</Text>
            </View>
            <Text style={styles.cardTitle}>IPL 2026 Mega Auction Analysis</Text>
            <Text style={styles.cardText}>Dream squads for all 10 teams analyzed...</Text>
            <Text style={styles.cardDate}>Dec 25, 2025</Text>
          </View>
        </View>

        <View style={styles.successMessage}>
          <Text style={styles.successTitle}>🎉 App Working Successfully!</Text>
          <Text style={styles.successText}>
            This is your Krihaa News mobile app preview. In the production version:
            {'\n\n'}
            ✅ Connects to your Firebase database
            {'\n'}✅ Shows real articles from krihaa.me
            {'\n'}✅ Updates automatically when you publish
            {'\n'}✅ Full search and category features
            {'\n'}✅ Professional news reading experience
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#dc2626',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 16,
  },
  badge: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    lineHeight: 24,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  cardDate: {
    fontSize: 12,
    color: '#999',
  },
  successMessage: {
    backgroundColor: '#10b981',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
  },
  successTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  successText: {
    fontSize: 14,
    color: 'white',
    lineHeight: 20,
  },
});
