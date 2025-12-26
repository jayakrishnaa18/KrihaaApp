import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Krihaa News</Text>
        <Text style={styles.headerSubtitle}>Breaking News & Entertainment</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Movies</Text>
            </View>
            <Text style={styles.cardTitle}>Dhurandhar Crosses ₹1000 Crore Worldwide</Text>
            <Text style={styles.cardText}>Ranveer Singh's spy thriller enters elite club with exceptional performance.</Text>
            <Text style={styles.cardDate}>Dec 26, 2025</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Tech</Text>
            </View>
            <Text style={styles.cardTitle}>Google Gmail Username Change Coming 2026</Text>
            <Text style={styles.cardText}>Revolutionary feature after years of user requests announced by Google.</Text>
            <Text style={styles.cardDate}>Dec 26, 2025</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Sports</Text>
            </View>
            <Text style={styles.cardTitle}>IPL 2026 Mega Auction Analysis</Text>
            <Text style={styles.cardText}>Complete analysis of dream squads for all 10 teams in upcoming season.</Text>
            <Text style={styles.cardDate}>Dec 25, 2025</Text>
          </View>
        </View>

        <View style={styles.successMessage}>
          <Text style={styles.successTitle}>🎉 Krihaa News App Working!</Text>
          <Text style={styles.successText}>
            Your mobile app is now functional. This demonstrates the UI and features that will connect to your website's database in the full version.
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
