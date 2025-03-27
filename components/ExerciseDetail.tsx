import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Clock, Flame, ChevronLeft, Play } from 'lucide-react-native';

type ExerciseDetailProps = {
  onClose: () => void;
};

export default function ExerciseDetail({ onClose }: ExerciseDetailProps) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
            style={styles.image}
          />
          <TouchableOpacity style={styles.backButton} onPress={onClose}>
            <ChevronLeft color="#FFFFFF" size={24} />
          </TouchableOpacity>
          <View style={styles.imageOverlay}>
            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseCategory}>Tam Vücut</Text>
              <Text style={styles.exerciseTitle}>Tam Vücut Güçlendirme</Text>
              <View style={styles.exerciseDetails}>
                <View style={styles.exerciseDetail}>
                  <Clock color="#FFFFFF" size={16} />
                  <Text style={styles.exerciseDetailText}>35 dk</Text>
                </View>
                <View style={styles.exerciseDetail}>
                  <Flame color="#FFFFFF" size={16} />
                  <Text style={styles.exerciseDetailText}>320 kcal</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Egzersiz Hakkında</Text>
          <Text style={styles.description}>
            Bu tam vücut antrenmanı, tüm ana kas gruplarınızı çalıştırmak için tasarlanmıştır. 
            Kardiyo ve güç egzersizlerinin kombinasyonu ile hem kalori yakacak hem de kas 
            kütlenizi artıracaksınız. Başlangıç seviyesinden ileri seviyeye kadar herkes için 
            uygun modifikasyonlar içerir.
          </Text>

          <Text style={styles.sectionTitle}>Egzersizler</Text>
          
          <View style={styles.exerciseList}>
            <View style={styles.exerciseItem}>
              <View style={styles.exerciseItemLeft}>
                <View style={styles.exerciseNumber}>
                  <Text style={styles.exerciseNumberText}>1</Text>
                </View>
                <View>
                  <Text style={styles.exerciseItemTitle}>Isınma</Text>
                  <Text style={styles.exerciseItemDuration}>5 dakika</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Play color="#FFFFFF" size={16} />
              </TouchableOpacity>
            </View>

            <View style={styles.exerciseItem}>
              <View style={styles.exerciseItemLeft}>
                <View style={styles.exerciseNumber}>
                  <Text style={styles.exerciseNumberText}>2</Text>
                </View>
                <View>
                  <Text style={styles.exerciseItemTitle}>Squat</Text>
                  <Text style={styles.exerciseItemDuration}>3 set x 12 tekrar</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Play color="#FFFFFF" size={16} />
              </TouchableOpacity>
            </View>

            <View style={styles.exerciseItem}>
              <View style={styles.exerciseItemLeft}>
                <View style={styles.exerciseNumber}>
                  <Text style={styles.exerciseNumberText}>3</Text>
                </View>
                <View>
                  <Text style={styles.exerciseItemTitle}>Push-up</Text>
                  <Text style={styles.exerciseItemDuration}>3 set x 10 tekrar</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Play color="#FFFFFF" size={16} />
              </TouchableOpacity>
            </View>

            <View style={styles.exerciseItem}>
              <View style={styles.exerciseItemLeft}>
                <View style={styles.exerciseNumber}>
                  <Text style={styles.exerciseNumberText}>4</Text>
                </View>
                <View>
                  <Text style={styles.exerciseItemTitle}>Lunge</Text>
                  <Text style={styles.exerciseItemDuration}>3 set x 10 tekrar (her bacak)</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Play color="#FFFFFF" size={16} />
              </TouchableOpacity>
            </View>

            <View style={styles.exerciseItem}>
              <View style={styles.exerciseItemLeft}>
                <View style={styles.exerciseNumber}>
                  <Text style={styles.exerciseNumberText}>5</Text>
                </View>
                <View>
                  <Text style={styles.exerciseItemTitle}>Plank</Text>
                  <Text style={styles.exerciseItemDuration}>3 set x 30 saniye</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Play color="#FFFFFF" size={16} />
              </TouchableOpacity>
            </View>

            <View style={styles.exerciseItem}>
              <View style={styles.exerciseItemLeft}>
                <View style={styles.exerciseNumber}>
                  <Text style={styles.exerciseNumberText}>6</Text>
                </View>
                <View>
                  <Text style={styles.exerciseItemTitle}>Soğuma</Text>
                  <Text style={styles.exerciseItemDuration}>5 dakika</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Play color="#FFFFFF" size={16} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Ekipman</Text>
          <View style={styles.equipmentContainer}>
            <View style={styles.equipmentItem}>
              <Text style={styles.equipmentText}>Yoga Matı</Text>
            </View>
            <View style={styles.equipmentItem}>
              <Text style={styles.equipmentText}>Dumbbell (opsiyonel)</Text>
            </View>
            <View style={styles.equipmentItem}>
              <Text style={styles.equipmentText}>Su Şişesi</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Tavsiyeler</Text>
          <Text style={styles.description}>
            • Her egzersiz arasında 30-60 saniye dinlenin{'\n'}
            • Doğru form her zaman tekrar sayısından daha önemlidir{'\n'}
            • Egzersiz sırasında bol su için{'\n'}
            • Kendinizi zorlanmış hissediyorsanız, dinlenin veya egzersizi modifiye edin
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Antrenmana Başla</Text>
          <Play color="#FFFFFF" size={20} />
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
  imageContainer: {
    height: 300,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
  },
  exerciseInfo: {},
  exerciseCategory: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 4,
  },
  exerciseTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  exerciseDetails: {
    flexDirection: 'row',
  },
  exerciseDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  exerciseDetailText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 6,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 12,
    marginTop: 20,
  },
  description: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
    marginBottom: 16,
  },
  exerciseList: {
    marginBottom: 16,
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  exerciseItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exerciseNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  exerciseNumberText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  exerciseItemTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },
  exerciseItemDuration: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
  },
  playButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  equipmentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  equipmentItem: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    marginBottom: 12,
  },
  equipmentText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#333333',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  startButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#FFFFFF',
    marginRight: 8,
  },
});