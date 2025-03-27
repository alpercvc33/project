import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight, MessageCircle, Bell, Award, TrendingUp, Brain } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const [greeting, setGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const hour = currentTime.getHours();
    if (hour < 12) {
      setGreeting('Günaydın');
    } else if (hour < 18) {
      setGreeting('İyi günler');
    } else {
      setGreeting('İyi akşamlar');
    }
  }, [currentTime]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.userName}>Ahmet</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Bell color="#333333" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <MessageCircle color="#333333" size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <LinearGradient
            colors={['#007AFF', '#28A745']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.statsCard}
          >
            <View style={styles.statsContent}>
              <View>
                <Text style={styles.statsTitle}>Günlük Hedefler</Text>
                <Text style={styles.statsSubtitle}>Bugün için 3 aktiviteniz var</Text>
              </View>
              <View style={styles.progressCircle}>
                <Text style={styles.progressText}>75%</Text>
              </View>
            </View>
            <View style={styles.statsDetails}>
              <View style={styles.statItem}>
                <View style={[styles.statDot, { backgroundColor: '#FFFFFF' }]} />
                <Text style={styles.statText}>2/3 Egzersiz</Text>
              </View>
              <View style={styles.statItem}>
                <View style={[styles.statDot, { backgroundColor: '#FFFFFF' }]} />
                <Text style={styles.statText}>1/1 Meditasyon</Text>
              </View>
              <View style={styles.statItem}>
                <View style={[styles.statDot, { backgroundColor: '#FFFFFF' }]} />
                <Text style={styles.statText}>5/8 Su (bardak)</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Günün Önerileri</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recommendationsContainer}
        >
          <TouchableOpacity style={styles.recommendationCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
              style={styles.recommendationImage}
            />
            <View style={styles.recommendationContent}>
              <Text style={styles.recommendationTitle}>Sabah Egzersizi</Text>
              <Text style={styles.recommendationSubtitle}>15 dakika • Başlangıç</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.recommendationCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
              style={styles.recommendationImage}
            />
            <View style={styles.recommendationContent}>
              <Text style={styles.recommendationTitle}>Sağlıklı Kahvaltı</Text>
              <Text style={styles.recommendationSubtitle}>Protein Ağırlıklı • 350 kcal</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.recommendationCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
              style={styles.recommendationImage}
            />
            <View style={styles.recommendationContent}>
              <Text style={styles.recommendationTitle}>Akşam Meditasyonu</Text>
              <Text style={styles.recommendationSubtitle}>10 dakika • Stres Azaltma</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Yapay Zeka Koçunuz</Text>
        </View>

        <TouchableOpacity style={styles.aiCoachCard}>
          <View style={styles.aiCoachContent}>
            <View style={styles.aiCoachIconContainer}>
              <Brain color="#007AFF" size={24} />
            </View>
            <View style={styles.aiCoachTextContainer}>
              <Text style={styles.aiCoachTitle}>ZekaKoç ile Sohbet Et</Text>
              <Text style={styles.aiCoachSubtitle}>
                Sorularınızı sorun, kişiselleştirilmiş tavsiyeler alın
              </Text>
            </View>
          </View>
          <ChevronRight color="#007AFF" size={20} />
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Başarılarınız</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.achievementsContainer}>
          <TouchableOpacity style={styles.achievementCard}>
            <View style={[styles.achievementIconContainer, { backgroundColor: '#E6F2FF' }]}>
              <Award color="#007AFF" size={24} />
            </View>
            <Text style={styles.achievementTitle}>7 Gün Kesintisiz</Text>
            <Text style={styles.achievementSubtitle}>Egzersiz Serisi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.achievementCard}>
            <View style={[styles.achievementIconContainer, { backgroundColor: '#E6F9EE' }]}>
              <TrendingUp color="#28A745" size={24} />
            </View>
            <Text style={styles.achievementTitle}>%15 İlerleme</Text>
            <Text style={styles.achievementSubtitle}>Fitness Hedefi</Text>
          </TouchableOpacity>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  greeting: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#666666',
  },
  userName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: '#333333',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  statsContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  statsCard: {
    borderRadius: 16,
    padding: 20,
  },
  statsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statsTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  statsSubtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  progressCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  statsDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.9,
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
  recommendationsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  recommendationCard: {
    width: 200,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  recommendationImage: {
    width: '100%',
    height: 120,
  },
  recommendationContent: {
    padding: 12,
  },
  recommendationTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },
  recommendationSubtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#666666',
  },
  aiCoachCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 24,
    marginBottom: 24,
  },
  aiCoachContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  aiCoachIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E6F2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  aiCoachTextContainer: {
    flex: 1,
  },
  aiCoachTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },
  aiCoachSubtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
  },
  achievementsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  achievementCard: {
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
  achievementIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  achievementTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 4,
  },
  achievementSubtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
});