import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Clock, Play, ChevronRight, Brain, Moon, Zap } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const mindCategories = [
  { id: 'all', name: 'Tümü' },
  { id: 'meditation', name: 'Meditasyon' },
  { id: 'sleep', name: 'Uyku' },
  { id: 'focus', name: 'Odaklanma' },
  { id: 'stress', name: 'Stres' },
  { id: 'cognitive', name: 'Bilişsel' },
];

const mindActivities = [
  {
    id: '1',
    title: 'Sabah Meditasyonu',
    category: 'meditation',
    duration: '10 dk',
    level: 'Başlangıç',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '2',
    title: 'Derin Uyku Rehberi',
    category: 'sleep',
    duration: '20 dk',
    level: 'Orta',
    image: 'https://images.unsplash.com/photo-1455642305367-68834a9d4712?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '3',
    title: 'Odaklanma Egzersizi',
    category: 'focus',
    duration: '15 dk',
    level: 'Orta',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '4',
    title: 'Stres Azaltma',
    category: 'stress',
    duration: '12 dk',
    level: 'Başlangıç',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '5',
    title: 'Hafıza Geliştirme',
    category: 'cognitive',
    duration: '15 dk',
    level: 'İleri',
    image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

export default function MindScreen() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredActivities = selectedCategory === 'all'
    ? mindActivities
    : mindActivities.filter(activity => activity.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Zihinsel Gelişim</Text>
        </View>

        <View style={styles.featuredContainer}>
          <LinearGradient
            colors={['#007AFF', '#28A745']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.featuredCard}
          >
            <View style={styles.featuredContent}>
              <View>
                <Text style={styles.featuredTitle}>Günlük Meditasyon</Text>
                <Text style={styles.featuredSubtitle}>Zihinsel dinginlik için 10 dakika</Text>
                <View style={styles.featuredDetail}>
                  <Clock color="#FFFFFF" size={16} />
                  <Text style={styles.featuredDetailText}>10 dk</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Play color="#FFFFFF" size={24} />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Brain color="#007AFF" size={24} />
            </View>
            <Text style={styles.statValue}>15</Text>
            <Text style={styles.statLabel}>Meditasyon</Text>
          </View>
          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: '#E6F9EE' }]}>
              <Moon color="#28A745" size={24} />
            </View>
            <Text style={styles.statValue}>7.5</Text>
            <Text style={styles.statLabel}>Uyku (saat)</Text>
          </View>
          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: '#FFF3E0' }]}>
              <Zap color="#FF9800" size={24} />
            </View>
            <Text style={styles.statValue}>85%</Text>
            <Text style={styles.statLabel}>Odaklanma</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {mindCategories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                selectedCategory === category.id && styles.categoryButtonActive,
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === category.id && styles.categoryButtonTextActive,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.activitiesContainer}>
          {filteredActivities.map(activity => (
            <TouchableOpacity key={activity.id} style={styles.activityCard}>
              <Image source={{ uri: activity.image }} style={styles.activityImage} />
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <View style={styles.activityDetails}>
                  <View style={styles.activityDetail}>
                    <Clock color="#666666" size={14} />
                    <Text style={styles.activityDetailText}>{activity.duration}</Text>
                  </View>
                  <View style={styles.activityLevelContainer}>
                    <Text style={styles.activityLevel}>{activity.level}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Bilişsel Oyunlar</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.gamesContainer}
        >
          <TouchableOpacity style={styles.gameCard}>
            <View style={[styles.gameIconContainer, { backgroundColor: '#E6F2FF' }]}>
              <Brain color="#007AFF" size={24} />
            </View>
            <Text style={styles.gameTitle}>Hafıza Oyunu</Text>
            <Text style={styles.gameSubtitle}>Hafızanızı geliştirin</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gameCard}>
            <View style={[styles.gameIconContainer, { backgroundColor: '#E6F9EE' }]}>
              <Zap color="#28A745" size={24} />
            </View>
            <Text style={styles.gameTitle}>Hızlı Matematik</Text>
            <Text style={styles.gameSubtitle}>Zihinsel aritmetik</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gameCard}>
            <View style={[styles.gameIconContainer, { backgroundColor: '#FFF3E0' }]}>
              <Moon color="#FF9800" size={24} />
            </View>
            <Text style={styles.gameTitle}>Kelime Bulmaca</Text>
            <Text style={styles.gameSubtitle}>Kelime dağarcığı</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
  },
  headerTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 28,
    color: '#333333',
  },
  featuredContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  featuredCard: {
    borderRadius: 16,
    padding: 20,
  },
  featuredContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  featuredSubtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 12,
  },
  featuredDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredDetailText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 6,
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E6F2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#666666',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 8,
  },
  categoryButtonActive: {
    backgroundColor: '#007AFF',
  },
  categoryButtonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#666666',
  },
  categoryButtonTextActive: {
    color: '#FFFFFF',
  },
  activitiesContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activityImage: {
    width: '100%',
    height: 160,
  },
  activityContent: {
    padding: 16,
  },
  activityTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#333333',
    marginBottom: 8,
  },
  activityDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activityDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityDetailText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
    marginLeft: 6,
  },
  activityLevelContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#E6F2FF',
  },
  activityLevel: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: '#007AFF',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: '#333333',
  },
  seeAllText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#007AFF',
  },
  gamesContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  gameCard: {
    width: 140,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  gameIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  gameTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 4,
  },
  gameSubtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
});