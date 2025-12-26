import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Mock data for testing (replace with Firebase later)
const mockArticles = [
  {
    id: '1',
    title: 'Breaking: Dhurandhar Crosses ₹1000 Crore Worldwide',
    excerpt: 'Ranveer Singh\'s spy thriller enters elite club...',
    category: 'Movies',
    image: 'https://via.placeholder.com/300x200',
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Google to Finally Let You Change Gmail Username in 2026',
    excerpt: 'A game-changer for millions of users worldwide...',
    category: 'Tech',
    image: 'https://via.placeholder.com/300x200',
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'IPL 2026 Mega Auction: Dream Squads Analysis',
    excerpt: 'Analyzing the dream squads for all 10 teams...',
    category: 'Sports',
    image: 'https://via.placeholder.com/300x200',
    createdAt: new Date(),
  },
];

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = () => {
    setTimeout(() => {
      setArticles(mockArticles);
      setLoading(false);
      setRefreshing(false);
    }, 1000);
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadArticles();
  };

  const renderArticle = ({ item }) => (
    <TouchableOpacity style={styles.articleCard}>
      <Image source={{ uri: item.image }} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleExcerpt}>{item.excerpt}</Text>
        <Text style={styles.articleDate}>
          {item.createdAt.toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#dc2626" />
        <Text style={styles.loadingText}>Loading Krihaa News...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#dc2626" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Krihaa News</Text>
        <Text style={styles.headerSubtitle}>Breaking News & Entertainment</Text>
      </View>

      {/* Articles List */}
      <FlatList
        data={articles}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
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
  listContainer: {
    padding: 16,
  },
  articleCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  articleImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  articleContent: {
    padding: 16,
  },
  categoryBadge: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  categoryText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    lineHeight: 24,
  },
  articleExcerpt: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  articleDate: {
    fontSize: 12,
    color: '#999',
  },
});
