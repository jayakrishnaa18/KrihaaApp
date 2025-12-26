import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🗞️ Krihaa News</Text>
        <Text style={styles.headerSubtitle}>Your Mobile News App is Working!</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.emoji}>📰</Text>
          <Text style={styles.category}>POLITICS</Text>
          <Text style={styles.title}>Breaking Political News</Text>
          <Text style={styles.excerpt}>Latest updates from the political world</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>🏏</Text>
          <Text style={styles.category}>SPORTS</Text>
          <Text style={styles.title}>Cricket Match Highlights</Text>
          <Text style={styles.excerpt}>Exciting cricket match results</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>🎬</Text>
          <Text style={styles.category}>MOVIES</Text>
          <Text style={styles.title}>Bollywood Updates</Text>
          <Text style={styles.excerpt}>Latest from the film industry</Text>
        </View>

        <View style={styles.success}>
          <Text style={styles.successText}>✅ Your React Native App is Working!</Text>
          <Text style={styles.successSubtext}>Built with 27 credits - Mission Accomplished!</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#dc2626',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fecaca',
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  category: {
    fontSize: 12,
    color: '#dc2626',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
    textAlign: 'center',
  },
  excerpt: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  success: {
    backgroundColor: '#10b981',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  successSubtext: {
    fontSize: 14,
    color: '#d1fae5',
  },
});
