import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { firestore } from '../config/firebase';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  createdAt: any;
}

interface CategoryScreenProps {
  category: string;
  navigation?: any;
}

export default function CategoryScreen({ category, navigation }: CategoryScreenProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchArticles = async () => {
    try {
      const snapshot = await firestore()
        .collection('posts')
        .where('status', '==', 'published')
        .where('category', '==', category)
        .orderBy('createdAt', 'desc')
        .limit(20)
        .get();

      const articlesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Article[];

      setArticles(articlesData);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [category]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchArticles();
  };

  const renderArticle = ({ item }: { item: Article }) => (
    <TouchableOpacity
      style={styles.articleCard}
      onPress={() => navigation?.navigate('Article', { article: item })}>
      <Image source={{ uri: item.imageUrl }} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.excerpt} numberOfLines={3}>
          {item.excerpt}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderArticle}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
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
  },
  articleImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  articleContent: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  excerpt: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});
