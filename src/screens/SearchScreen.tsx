import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { firestore } from '../config/firebase';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
}

export default function SearchScreen({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const searchArticles = async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const snapshot = await firestore()
        .collection('posts')
        .where('status', '==', 'published')
        .orderBy('createdAt', 'desc')
        .limit(50)
        .get();

      const allArticles = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Article[];

      // Simple client-side search
      const filtered = allArticles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filtered);
    } catch (error) {
      console.error('Error searching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderArticle = ({ item }: { item: Article }) => (
    <TouchableOpacity
      style={styles.articleCard}
      onPress={() => navigation.navigate('Article', { article: item })}>
      <Image source={{ uri: item.imageUrl }} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <Text style={styles.category}>{item.category.toUpperCase()}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.excerpt} numberOfLines={2}>
          {item.excerpt}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search articles..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={() => searchArticles(searchQuery)}
        />
      </View>
      <FlatList
        data={results}
        renderItem={renderArticle}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          searchQuery ? (
            <Text style={styles.emptyText}>No articles found</Text>
          ) : (
            <Text style={styles.emptyText}>Enter search term to find articles</Text>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  articleCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
  },
  articleImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  articleContent: {
    flex: 1,
    padding: 12,
  },
  category: {
    fontSize: 10,
    color: '#dc2626',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  excerpt: {
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#6b7280',
    marginTop: 50,
    fontSize: 16,
  },
});
