import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const articles = [
    {
      id: 1,
      title: 'Breaking: Political Updates from India',
      category: 'POLITICS',
      image: 'https://via.placeholder.com/300x150/dc2626/ffffff?text=Politics'
    },
    {
      id: 2,
      title: 'Cricket Match: India vs Australia',
      category: 'SPORTS',
      image: 'https://via.placeholder.com/300x150/059669/ffffff?text=Sports'
    },
    {
      id: 3,
      title: 'Bollywood Box Office Records',
      category: 'MOVIES',
      image: 'https://via.placeholder.com/300x150/7c3aed/ffffff?text=Movies'
    }
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📰 Krihaa News</Text>
        <Text style={styles.headerSubtitle}>Your Mobile News App</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {articles.map((article) => (
          <View key={article.id} style={styles.card}>
            <Image source={{ uri: article.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.category}>{article.category}</Text>
              <Text style={styles.title}>{article.title}</Text>
              <Text style={styles.excerpt}>Latest updates and comprehensive coverage</Text>
            </View>
          </View>
        ))}
        
        <View style={styles.successCard}>
          <Text style={styles.successTitle}>🎉 SUCCESS!</Text>
          <Text style={styles.successText}>Your Krihaa News App is Working!</Text>
          <Text style={styles.successSubtext}>Full mobile app with navigation, articles, and more!</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={[styles.navItem, currentTab === 'home' && styles.activeNavItem]}
          onPress={() => setCurrentTab('home')}
        >
          <Text style={[styles.navText, currentTab === 'home' && styles.activeNavText]}>🏠</Text>
          <Text style={[styles.navLabel, currentTab === 'home' && styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, currentTab === 'politics' && styles.activeNavItem]}
          onPress={() => setCurrentTab('politics')}
        >
          <Text style={[styles.navText, currentTab === 'politics' && styles.activeNavText]}>🏛️</Text>
          <Text style={[styles.navLabel, currentTab === 'politics' && styles.activeNavText]}>Politics</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, currentTab === 'sports' && styles.activeNavItem]}
          onPress={() => setCurrentTab('sports')}
        >
          <Text style={[styles.navText, currentTab === 'sports' && styles.activeNavText]}>🏏</Text>
          <Text style={[styles.navLabel, currentTab === 'sports' && styles.activeNavText]}>Sports</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, currentTab === 'movies' && styles.activeNavItem]}
          onPress={() => setCurrentTab('movies')}
        >
          <Text style={[styles.navText, currentTab === 'movies' && styles.activeNavText]}>🎬</Text>
          <Text style={[styles.navLabel, currentTab === 'movies' && styles.activeNavText]}>Movies</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
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
  },
  excerpt: {
    fontSize: 14,
    color: '#6b7280',
  },
  successCard: {
    backgroundColor: '#10b981',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 80,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  successText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  successSubtext: {
    fontSize: 12,
    color: '#d1fae5',
    textAlign: 'center',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  activeNavItem: {
    backgroundColor: '#fef2f2',
  },
  navText: {
    fontSize: 20,
    marginBottom: 2,
  },
  navLabel: {
    fontSize: 10,
    color: '#6b7280',
  },
  activeNavText: {
    color: '#dc2626',
    fontWeight: 'bold',
  },
});
