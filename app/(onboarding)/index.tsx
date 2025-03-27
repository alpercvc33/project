import { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { Brain, Heart, Dumbbell } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function Welcome() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#007AFF', '#28A745']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.logoContainer}>
          <Brain color="#FFFFFF" size={40} />
          <Heart color="#FFFFFF" size={40} />
        </View>
        <Text style={styles.title}>ZekaKoç</Text>
        <Text style={styles.subtitle}>Yapay Zeka Destekli Yaşam Koçunuz</Text>
      </LinearGradient>

      <View style={styles.featuresContainer}>
        <View style={styles.featureItem}>
          <View style={[styles.iconContainer, { backgroundColor: '#E6F2FF' }]}>
            <Dumbbell color="#007AFF" size={24} />
          </View>
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>Kişiselleştirilmiş Fitness</Text>
            <Text style={styles.featureDescription}>
              Seviyenize ve hedeflerinize göre özel egzersiz planları
            </Text>
          </View>
        </View>

        <View style={styles.featureItem}>
          <View style={[styles.iconContainer, { backgroundColor: '#E6F9EE' }]}>
            <Brain color="#28A745" size={24} />
          </View>
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>Zihinsel Gelişim</Text>
            <Text style={styles.featureDescription}>
              Meditasyon, bilinç ve zeka geliştirme egzersizleri
            </Text>
          </View>
        </View>

        <View style={styles.featureItem}>
          <View style={[styles.iconContainer, { backgroundColor: '#E6F2FF' }]}>
            <Heart color="#007AFF" size={24} />
          </View>
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>Beslenme Rehberi</Text>
            <Text style={styles.featureDescription}>
              Sağlıklı beslenme önerileri ve kişiselleştirilmiş tarifler
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/(onboarding)/user-info')}
        >
          <Text style={styles.buttonText}>Başlayalım</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textButton}>
          <Text style={styles.textButtonText}>Zaten hesabım var</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  featuresContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },
  featureDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  footer: {
    padding: 24,
    paddingBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  textButton: {
    alignItems: 'center',
  },
  textButtonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#007AFF',
  },
});