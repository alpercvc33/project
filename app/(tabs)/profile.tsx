import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, ChevronRight, Award, TrendingUp, Bell, LogOut } from 'lucide-react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Custom chart component that only renders on native platforms
const PlatformLineChart = (props) => {
  if (Platform.OS === 'web') {
    // Simple placeholder for web to avoid responder warnings
    return (
      <View style={[styles.chart, { height: 220, backgroundColor: '#f5f5f5', borderRadius: 16, justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: '#666666' }}>Chart visualization (not available on web)</Text>
      </View>
    );
  }
  
  return <LineChart {...props} />;
};

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('progress');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Ahmet Yılmaz</Text>
              <Text style={styles.profileEmail}>ahmet@example.com</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.settingsButton}>
            <Settings color="#333333" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>28</Text>
            <Text style={styles.statLabel}>Egzersiz</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>14</Text>
            <Text style={styles.statLabel}>Meditasyon</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Başarı</Text>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'progress' && styles.tabButtonActive]}
            onPress={() => setActiveTab('progress')}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'progress' && styles.tabButtonTextActive,
              ]}
            >
              İlerleme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'achievements' && styles.tabButtonActive]}
            onPress={() => setActiveTab('achievements')}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'achievements' && styles.tabButtonTextActive,
              ]}
            >
              Başarılar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'settings' && styles.tabButtonActive]}
            onPress={() => setActiveTab('settings')}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'settings' && styles.tabButtonTextActive,
              ]}
            >
              Ayarlar
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'progress' && (
          <View style={styles.progressContainer}>
            <View style={styles.chartContainer}>
              <View style={styles.chartHeader}>
                <Text style={styles.chartTitle}>Fitness İlerlemesi</Text>
                <TouchableOpacity>
                  <Text style={styles.chartPeriod}>Son 4 Hafta</Text>
                </TouchableOpacity>
              </View>
              <PlatformLineChart
                data={{
                  labels: ['Hafta 1', 'Hafta 2', 'Hafta 3', 'Hafta 4'],
                  datasets: [
                    {
                      data: [20, 45, 28, 80],
                      color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
                      strokeWidth: 2,
                    },
                  ],
                }}
                width={width - 48}
                height={220}
                chartConfig={{
                  backgroundColor: '#FFFFFF',
                  backgroundGradientFrom: '#FFFFFF',
                  backgroundGradientTo: '#FFFFFF',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(102, 102, 102, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#007AFF',
                  },
                }}
                bezier
                style={styles.chart}
              />
            </View>

            <View style={styles.progressStatsContainer}>
              <View style={styles.progressStatCard}>
                <View style={styles.progressStatHeader}>
                  <Text style={styles.progressStatTitle}>Kilo</Text>
                  <TrendingUp color="#28A745" size={20} />
                </View>
                <Text style={styles.progressStatValue}>78 kg</Text>
                <Text style={styles.progressStatChange}>-2.5 kg (30 gün)</Text>
              </View>

              <View style={styles.progressStatCard}>
                <View style={styles.progressStatHeader}>
                  <Text style={styles.progressStatTitle}>Vücut Yağ Oranı</Text>
                  <TrendingUp color="#28A745" size={20} />
                </View>
                <Text style={styles.progressStatValue}>18%</Text>
                <Text style={styles.progressStatChange}>-1.2% (30 gün)</Text>
              </View>
            </View>
          </View>
        )}

        {activeTab === 'achievements' && (
          <View style={styles.achievementsContainer}>
            <TouchableOpacity style={styles.achievementCard}>
              <View style={styles.achievementIconContainer}>
                <Award color="#007AFF" size={24} />
              </View>
              <View style={styles.achievementContent}>
                <Text style={styles.achievementTitle}>7 Gün Kesintisiz</Text>
                <Text style={styles.achievementDescription}>7 gün boyunca her gün egzersiz yaptınız</Text>
                <View style={styles.achievementDate}>
                  <Text style={styles.achievementDateText}>15 Mayıs 2025</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.achievementCard}>
              <View style={[styles.achievementIconContainer, { backgroundColor: '#E6F9EE' }]}>
                <TrendingUp color="#28A745" size={24} />
              </View>
              <View style={styles.achievementContent}>
                <Text style={styles.achievementTitle}>İlk 5 kg</Text>
                <Text style={styles.achievementDescription}>İlk 5 kg kilo verme hedefinize ulaştınız</Text>
                <View style={styles.achievementDate}>
                  <Text style={styles.achievementDateText}>2 Mayıs 2025</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.achievementCard}>
              <View style={[styles.achievementIconContainer, { backgroundColor: '#FFF3E0' }]}>
                <Award color="#FF9800" size={24} />
              </View>
              <View style={styles.achievementContent}>
                <Text style={styles.achievementTitle}>Meditasyon Ustası</Text>
                <Text style={styles.achievementDescription}>10 meditasyon seansı tamamladınız</Text>
                <View style={styles.achievementDate}>
                  <Text style={styles.achievementDateText}>28 Nisan 2025</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}

        {activeTab === 'settings' && (
          <View style={styles.settingsContainer}>
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingItemLeft}>
                <View style={[styles.settingIconContainer, { backgroundColor: '#E6F2FF' }]}>
                  <Settings color="#007AFF" size={20} />
                </View>
                <Text style={styles.settingText}>Hesap Ayarları</Text>
              </View>
              <ChevronRight color="#999999" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingItemLeft}>
                <View style={[styles.settingIconContainer, { backgroundColor: '#E6F9EE' }]}>
                  <Bell color="#28A745" size={20} />
                </View>
                <Text style={styles.settingText}>Bildirim Ayarları</Text>
              </View>
              <ChevronRight color="#999999" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingItemLeft}>
                <View style={[styles.settingIconContainer, { backgroundColor: '#FFEBEE' }]}>
                  <LogOut color="#DC3545" size={20} />
                </View>
                <Text style={[styles.settingText, { color: '#DC3545' }]}>Çıkış Yap</Text>
              </View>
              <ChevronRight color="#999999" size={20} />
            </TouchableOpacity>
          </View>
        )}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileInfo: {
    justifyContent: 'center',
  },
  profileName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 4,
  },
  profileEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
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
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  statValue: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: '#333333',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tabButton: {
    paddingVertical: 12,
    marginRight: 24,
  },
  tabButtonActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabButtonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#666666',
  },
  tabButtonTextActive: {
    color: '#007AFF',
  },
  progressContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  chartContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#333333',
  },
  chartPeriod: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#007AFF',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  progressStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressStatCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  progressStatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressStatTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#666666',
  },
  progressStatValue: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: '#333333',
    marginBottom: 4,
  },
  progressStatChange: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#28A745',
  },
  achievementsContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  achievementCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
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
    backgroundColor: '#E6F2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },
  achievementDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  achievementDate: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  achievementDateText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#666666',
  },
  settingsContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  settingText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
  },
});