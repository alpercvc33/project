import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react-native';

type MentalGoal = 'stress_reduction' | 'better_sleep' | 'focus' | 'mindfulness' | 'cognitive_improvement';

export default function MentalGoals() {
  const [mentalGoals, setMentalGoals] = useState<MentalGoal[]>([]);

  const toggleGoal = (goal: MentalGoal) => {
    if (mentalGoals.includes(goal)) {
      setMentalGoals(mentalGoals.filter(g => g !== goal));
    } else {
      setMentalGoals([...mentalGoals, goal]);
    }
  };

  const isFormValid = mentalGoals.length > 0;

  const handleFinish = () => {
    if (isFormValid) {
      // In a real app, we would save this data to context or storage
      router.replace('/(tabs)');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft color="#007AFF" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Zihinsel Hedefler</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '100%' }]} />
        </View>
        <Text style={styles.progressText}>4/4</Text>
      </View>

      <Text style={styles.title}>Zihinsel Gelişim Hedefleriniz</Text>
      <Text style={styles.subtitle}>
        Zihinsel sağlık ve gelişim için odaklanmak istediğiniz alanları seçin.
      </Text>

      <View style={styles.goalsContainer}>
        <TouchableOpacity
          style={[
            styles.goalButton,
            mentalGoals.includes('stress_reduction') && styles.goalButtonActive,
          ]}
          onPress={() => toggleGoal('stress_reduction')}
        >
          <View style={styles.goalTextContainer}>
            <Text
              style={[
                styles.goalButtonText,
                mentalGoals.includes('stress_reduction') && styles.goalButtonTextActive,
              ]}
            >
              Stres Azaltma
            </Text>
            <Text
              style={[
                styles.goalButtonDescription,
                mentalGoals.includes('stress_reduction') && styles.goalButtonDescriptionActive,
              ]}
            >
              Günlük stres seviyenizi azaltmak ve rahatlamak
            </Text>
          </View>
          {mentalGoals.includes('stress_reduction') && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.goalButton,
            mentalGoals.includes('better_sleep') && styles.goalButtonActive,
          ]}
          onPress={() => toggleGoal('better_sleep')}
        >
          <View style={styles.goalTextContainer}>
            <Text
              style={[
                styles.goalButtonText,
                mentalGoals.includes('better_sleep') && styles.goalButtonTextActive,
              ]}
            >
              Daha İyi Uyku
            </Text>
            <Text
              style={[
                styles.goalButtonDescription,
                mentalGoals.includes('better_sleep') && styles.goalButtonDescriptionActive,
              ]}
            >
              Uyku kalitenizi artırmak ve dinlenmiş uyanmak
            </Text>
          </View>
          {mentalGoals.includes('better_sleep') && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.goalButton,
            mentalGoals.includes('focus') && styles.goalButtonActive,
          ]}
          onPress={() => toggleGoal('focus')}
        >
          <View style={styles.goalTextContainer}>
            <Text
              style={[
                styles.goalButtonText,
                mentalGoals.includes('focus') && styles.goalButtonTextActive,
              ]}
            >
              Odaklanma ve Üretkenlik
            </Text>
            <Text
              style={[
                styles.goalButtonDescription,
                mentalGoals.includes('focus') && styles.goalButtonDescriptionActive,
              ]}
            >
              Dikkat sürenizi ve üretkenliğinizi artırmak
            </Text>
          </View>
          {mentalGoals.includes('focus') && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.goalButton,
            mentalGoals.includes('mindfulness') && styles.goalButtonActive,
          ]}
          onPress={() => toggleGoal('mindfulness')}
        >
          <View style={styles.goalTextContainer}>
            <Text
              style={[
                styles.goalButtonText,
                mentalGoals.includes('mindfulness') && styles.goalButtonTextActive,
              ]}
            >
              Farkındalık (Mindfulness)
            </Text>
            <Text
              style={[
                styles.goalButtonDescription,
                mentalGoals.includes('mindfulness') && styles.goalButtonDescriptionActive,
              ]}
            >
              Şimdiki ana odaklanmak ve bilinçli farkındalık geliştirmek
            </Text>
          </View>
          {mentalGoals.includes('mindfulness') && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.goalButton,
            mentalGoals.includes('cognitive_improvement') && styles.goalButtonActive,
          ]}
          onPress={() => toggleGoal('cognitive_improvement')}
        >
          <View style={styles.goalTextContainer}>
            <Text
              style={[
                styles.goalButtonText,
                mentalGoals.includes('cognitive_improvement') && styles.goalButtonTextActive,
              ]}
            >
              Bilişsel Gelişim
            </Text>
            <Text
              style={[
                styles.goalButtonDescription,
                mentalGoals.includes('cognitive_improvement') && styles.goalButtonDescriptionActive,
              ]}
            >
              Hafıza, problem çözme ve mantıksal düşünme becerilerinizi geliştirmek
            </Text>
          </View>
          {mentalGoals.includes('cognitive_improvement') && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.buttonDisabled]}
        onPress={handleFinish}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>Tamamla</Text>
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
    marginBottom: 4,
  },
  goalButtonTextActive: {
    color: '#007AFF',
  },
  goalButtonDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
  },
  goalButtonDescriptionActive: {
    color: '#007AFF',
    opacity: 0.8,
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