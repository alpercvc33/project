import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react-native';

type FitnessLevel = 'beginner' | 'intermediate' | 'advanced';
type FitnessGoal = 'weight_loss' | 'muscle_gain' | 'endurance' | 'flexibility' | 'overall_health';

export default function FitnessGoals() {
  const [fitnessLevel, setFitnessLevel] = useState<FitnessLevel | null>(null);
  const [fitnessGoals, setFitnessGoals] = useState<FitnessGoal[]>([]);

  const toggleGoal = (goal: FitnessGoal) => {
    if (fitnessGoals.includes(goal)) {
      setFitnessGoals(fitnessGoals.filter(g => g !== goal));
    } else {
      setFitnessGoals([...fitnessGoals, goal]);
    }
  };

  const isFormValid = fitnessLevel && fitnessGoals.length > 0;

  const handleNext = () => {
    if (isFormValid) {
      // In a real app, we would save this data to context or storage
      router.push('/(onboarding)/nutrition-info');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft color="#007AFF" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fitness Hedefleri</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '50%' }]} />
        </View>
        <Text style={styles.progressText}>2/4</Text>
      </View>

      <Text style={styles.title}>Fitness Seviyeniz</Text>
      <Text style={styles.subtitle}>
        Mevcut fitness seviyenizi seçin, size uygun bir program hazırlayalım.
      </Text>

      <View style={styles.levelContainer}>
        <TouchableOpacity
          style={[
            styles.levelButton,
            fitnessLevel === 'beginner' && styles.levelButtonActive,
          ]}
          onPress={() => setFitnessLevel('beginner')}
        >
          <Text
            style={[
              styles.levelButtonTitle,
              fitnessLevel === 'beginner' && styles.levelButtonTitleActive,
            ]}
          >
            Başlangıç
          </Text>
          <Text
            style={[
              styles.levelButtonDescription,
              fitnessLevel === 'beginner' && styles.levelButtonDescriptionActive,
            ]}
          >
            Düzenli egzersiz yapmıyorum veya yeni başlıyorum
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.levelButton,
            fitnessLevel === 'intermediate' && styles.levelButtonActive,
          ]}
          onPress={() => setFitnessLevel('intermediate')}
        >
          <Text
            style={[
              styles.levelButtonTitle,
              fitnessLevel === 'intermediate' && styles.levelButtonTitleActive,
            ]}
          >
            Orta Seviye
          </Text>
          <Text
            style={[
              styles.levelButtonDescription,
              fitnessLevel === 'intermediate' && styles.levelButtonDescriptionActive,
            ]}
          >
            Haftada 1-3 kez düzenli egzersiz yapıyorum
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.levelButton,
            fitnessLevel === 'advanced' && styles.levelButtonActive,
          ]}
          onPress={() => setFitnessLevel('advanced')}
        >
          <Text
            style={[
              styles.levelButtonTitle,
              fitnessLevel === 'advanced' && styles.levelButtonTitleActive,
            ]}
          >
            İleri Seviye
          </Text>
          <Text
            style={[
              styles.levelButtonDescription,
              fitnessLevel === 'advanced' && styles.levelButtonDescriptionActive,
            ]}
          >
            Haftada 4+ kez düzenli egzersiz yapıyorum
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Fitness Hedefleriniz</Text>
      <Text style={styles.subtitle}>
        Ulaşmak istediğiniz hedefleri seçin (birden fazla seçebilirsiniz).
      </Text>

      <View style={styles.goalsContainer}>
        <TouchableOpacity
          style={[
            styles.goalButton,
            fitnessGoals.includes('weight_loss') && styles.goalButtonActive,
          ]}
          onPress={() => toggleGoal('weight_loss')}
        >
          <View style={styles.goalTextContainer}>
            <Text
              style={[
                styles.goalButtonText,
                fitnessGoals.includes('weight_loss') && styles.goalButtonTextActive,
              ]}
            >
              Kilo Vermek
            </Text>
          </View>
          {fitnessGoals.includes('weight_loss') && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.goalButton,
            fitnessGoals.includes('muscle_gain') && styles.goalButtonActive,
          ]}
          onPress={() => toggleGoal('muscle_gain')}
        >
          <View style={styles.goalTextContainer}>
            <Text
              style={[
                styles.goalButtonText,
                fitnessGoals.includes('muscle_gain') && styles.goalButtonTextActive,
              ]}
            >
              Kas Kazanmak
            </Text>
          </View>
          {fitnessGoals.includes('muscle_gain') && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.goalButton,
            fitnessGoals.includes('endurance') && styles.goalButtonActive,
          ]}
          onPress={() => toggleGoal('endurance')}
        >
          <View style={styles.goalTextContainer}>
            <Text
              style={[
                styles.goalButtonText,
                fitnessGoals.includes('endurance') && styles.goalButtonTextActive,
              ]}
            >
              Dayanıklılık Artırmak
            </Text>
          </View>
          {fitnessGoals.includes('endurance') && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.goalButton,
            fitnessGoals.includes('flexibility') && styles.goalButtonActive,
          ]}
          onPress={() => toggleGoal('flexibility')}
        >
          <View style={styles.goalTextContainer}>
            <Text
              style={[
                styles.goalButtonText,
                fitnessGoals.includes('flexibility') && styles.goalButtonTextActive,
              ]}
            >
              Esneklik Kazanmak
            </Text>
          </View>
          {fitnessGoals.includes('flexibility') && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.goalButton,
            fitnessGoals.includes('overall_health') && styles.goalButtonActive,
          ]}
          onPress={() => toggleGoal('overall_health')}
        >
          <View style={styles.goalTextContainer}>
            <Text
              style={[
                styles.goalButtonText,
                fitnessGoals.includes('overall_health') && styles.goalButtonTextActive,
              ]}
            >
              Genel Sağlık ve İyi Hissetmek
            </Text>
          </View>
          {fitnessGoals.includes('overall_health') && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.buttonDisabled]}
        onPress={handleNext}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>Devam Et</Text>
        <ChevronRight color="#FFFFFF" size={20} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    padding: 24,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#333333',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginRight: 12,
  },
  progressFill: {
    height: 8,
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  progressText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: '#333333',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#666666',
    marginBottom: 24,
    lineHeight: 24,
  },
  levelContainer: {
    marginBottom: 32,
  },
  levelButton: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    marginBottom: 12,
  },
  levelButtonActive: {
    borderColor: '#007AFF',
    backgroundColor: '#E6F2FF',
  },
  levelButtonTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },
  levelButtonTitleActive: {
    color: '#007AFF',
  },
  levelButtonDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
  },
  levelButtonDescriptionActive: {
    color: '#007AFF',
  },
  goalsContainer: {
    marginBottom: 32,
  },
  goalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    marginBottom: 12,
  },
  goalButtonActive: {
    borderColor: '#007AFF',
    backgroundColor: '#E6F2FF',
  },
  goalTextContainer: {
    flex: 1,
  },
  goalButtonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
  },
  goalButtonTextActive: {
    color: '#007AFF',
  },
  checkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  buttonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#FFFFFF',
    marginRight: 8,
  },
});