import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft, Check, X, Crown } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSubscriptionStore } from '../store/subscription';

export default function SubscriptionScreen() {
  const router = useRouter();
  const { subscription, setPremium } = useSubscriptionStore();

  const handleSubscribe = (plan: 'monthly' | 'annual') => {
    // Burada gerçek bir ödeme işlemleyicisi kullanılacak
    // Şimdilik sadece premium durumunu değiştireceğiz
    
    Alert.alert(
      "Premium Abonelik",
      `${plan === 'monthly' ? 'Aylık' : 'Yıllık'} aboneliğiniz başarıyla aktifleştirildi!`,
      [
        { 
          text: "Tamam", 
          onPress: () => {
            setPremium(true);
            router.back();
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ChevronLeft color="#007AFF" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Premium Abonelik</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
          style={styles.heroImage}
          imageStyle={{ borderRadius: 16, opacity: 0.7 }}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}
            style={styles.gradient}
          >
            <View style={styles.heroContent}>
              <View style={styles.crownContainer}>
                <Crown color="#FFD700" size={32} />
              </View>
              <Text style={styles.heroTitle}>ZekaKoç Premium</Text>
              <Text style={styles.heroSubtitle}>
                Sınırsız yapay zeka koçluğu ve özelleştirilmiş planlar ile hedeflerinize ulaşın
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>

        <Text style={styles.sectionTitle}>Premium Avantajları</Text>

        <View style={styles.featuresList}>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Check color="#28A745" size={20} />
            </View>
            <Text style={styles.featureText}>Sınırsız AI koçluk sohbeti</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Check color="#28A745" size={20} />
            </View>
            <Text style={styles.featureText}>Özelleştirilmiş beslenme ve fitness planları</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Check color="#28A745" size={20} />
            </View>
            <Text style={styles.featureText}>Gelişmiş ilerleme takibi ve analiz</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Check color="#28A745" size={20} />
            </View>
            <Text style={styles.featureText}>Özel meditasyon ve zihinsel egzersizler</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <Check color="#28A745" size={20} />
            </View>
            <Text style={styles.featureText}>Reklamssız deneyim</Text>
          </View>
        </View>

        <View style={styles.comparisonContainer}>
          <View style={styles.planColumn}>
            <Text style={styles.planTitle}>Ücretsiz</Text>
            <View style={styles.planFeature}>
              <Text style={styles.planFeatureText}>10 AI sohbet kredisi</Text>
              <Check color="#28A745" size={16} />
            </View>
            <View style={styles.planFeature}>
              <Text style={styles.planFeatureText}>Temel egzersizler</Text>
              <Check color="#28A745" size={16} />
            </View>
            <View style={styles.planFeature}>
              <Text style={styles.planFeatureText}>Sınırsız fitness planları</Text>
              <X color="#DC3545" size={16} />
            </View>
            <View style={styles.planFeature}>
              <Text style={styles.planFeatureText}>Detaylı beslenme takibi</Text>
              <X color="#DC3545" size={16} />
            </View>
            <View style={styles.planFeature}>
              <Text style={styles.planFeatureText}>İleri meditasyon</Text>
              <X color="#DC3545" size={16} />
            </View>
          </View>

          <View style={[styles.planColumn, styles.premiumColumn]}>
            <Text style={[styles.planTitle, styles.premiumTitle]}>Premium</Text>
            <View style={styles.planFeature}>
              <Text style={styles.planFeatureText}>Sınırsız AI sohbet</Text>
              <Check color="#28A745" size={16} />
            </View>
            <View style={styles.planFeature}>
              <Text style={styles.planFeatureText}>Tüm egzersizler</Text>
              <Check color="#28A745" size={16} />
            </View>
            <View style={styles.planFeature}>
              <Text style={styles.planFeatureText}>Sınırsız fitness planları</Text>
              <Check color="#28A745" size={16} />
            </View>
            <View style={styles.planFeature}>
              <Text style={styles.planFeatureText}>Detaylı beslenme takibi</Text>
              <Check color="#28A745" size={16} />
            </View>
            <View style={styles.planFeature}>
              <Text style={styles.planFeatureText}>İleri meditasyon</Text>
              <Check color="#28A745" size={16} />
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Abonelik Planları</Text>

        <View style={styles.pricingContainer}>
          <TouchableOpacity 
            style={styles.pricingCard}
            onPress={() => handleSubscribe('monthly')}
          >
            <Text style={styles.pricingTitle}>Aylık Plan</Text>
            <Text style={styles.pricingPrice}>₺59.99 <Text style={styles.pricingPeriod}>/ay</Text></Text>
            <Text style={styles.pricingDescription}>Her ay otomatik yenilenir</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.pricingCard, styles.pricingCardHighlighted]}
            onPress={() => handleSubscribe('annual')}
          >
            <View style={styles.saveBadge}>
              <Text style={styles.saveBadgeText}>%33 Tasarruf</Text>
            </View>
            <Text style={styles.pricingTitle}>Yıllık Plan</Text>
            <Text style={styles.pricingPrice}>₺479.99 <Text style={styles.pricingPeriod}>/yıl</Text></Text>
            <Text style={styles.pricingDescription}>Her yıl otomatik yenilenir (₺39.99/ay)</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.disclaimer}>
          Aboneliğiniz, süre sonunda otomatik olarak yenilenir. İstediğiniz zaman iptal edebilirsiniz.
        </Text>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#333333',
  },
  content: {
    flex: 1,
  },
  heroImage: {
    height: 200,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  crownContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  heroTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    textAlign: 'center',
  },
  sectionTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: '#333333',
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 16,
  },
  featuresList: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(40, 167, 69, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  featureText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#333333',
  },
  comparisonContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 24,
  },
  planColumn: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginRight: 8,
  },
  premiumColumn: {
    backgroundColor: '#E6F2FF',
    marginRight: 0,
    marginLeft: 8,
  },
  planTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },
  premiumTitle: {
    color: '#007AFF',
  },
  planFeature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  planFeatureText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#333333',
    flex: 1,
    marginRight: 8,
  },
  pricingContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 24,
  },
  pricingCard: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginRight: 8,
    position: 'relative',
  },
  pricingCardHighlighted: {
    backgroundColor: '#E6F2FF',
    borderWidth: 2,
    borderColor: '#007AFF',
    marginRight: 0,
    marginLeft: 8,
  },
  saveBadge: {
    position: 'absolute',
    top: -12,
    right: 16,
    backgroundColor: '#28A745',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  saveBadgeText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  pricingTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
  },
  pricingPrice: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: '#007AFF',
    marginBottom: 4,
  },
  pricingPeriod: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
  },
  pricingDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
  },
  disclaimer: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 32,
  },
});