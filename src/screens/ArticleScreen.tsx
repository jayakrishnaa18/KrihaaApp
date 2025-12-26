import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function ArticleScreen({ route }: any) {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.imageUrl }} style={styles.heroImage} />
      <View style={styles.content}>
        <Text style={styles.category}>{article.category.toUpperCase()}</Text>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.date}>
          {new Date(article.createdAt?.toDate()).toLocaleDateString()}
        </Text>
        <Text style={styles.body}>{article.content || article.excerpt}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroImage: {
    width: width,
    height: 250,
  },
  content: {
    padding: 16,
  },
  category: {
    fontSize: 12,
    color: '#dc2626',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    lineHeight: 32,
  },
  date: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
});
