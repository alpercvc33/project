import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react-native';

type DietType = 'omnivore' | 'vegetarian' | 'vegan' | 'pescatarian' | 'keto' | 'paleo';
type Allergy = 'dairy' | 'gluten' | 'nuts' | 'eggs' | 'seafood' | 'soy';

export default function NutritionInfo() {
  const [dietType, setDietType] = useState<DietType | null>(null);
  const [allergies, setAllergies] = useState<Allergy[]>([]);

  const toggleAllergy = (allergy: Allergy) => {
    if (allergies.includes(allergy)) {
      setAllergies(allergies.filter(a => a !== allergy));
    } else {
      setAllergies([...allergies, allergy]);
    }
  };

  const isFormValid = dietType !== null;

  const handleNext = () => {
    if (isFormValid) {
      // In a real app, we would save this data to context or storage
      router.push('/(onboarding)/mental-goals');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft color="#007AFF" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beslenme Bilgileri</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '75%' }]} />
        </View>
        <Text style={styles.progressText}>3/4</Text>
      </View>

      <Text style={styles.title}>Beslenme Tercihiniz</Text>
      <Text style={styles.subtitle}>
        Beslenme alışkanlıklarınıza en uygun seçeneği işaretleyin.
      </Text>

      <View style={styles.dietContainer}>
        <TouchableOpacity
          style={[
            styles.dietButton,
            dietType === 'omnivore' && styles.dietButtonActive,
          ]}
          onPress={() => setDietType('omnivore')}
        >
          <View style={styles.dietTextContainer}>
            <Text
              style={[
                styles.dietButtonText,
                dietType === 'omnivore' && styles.dietButtonTextActive,
              ]}
            >
              Hepçil (Et ve Sebze)
            </Text>
          </View>
          {dietType === 'omnivore' && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.dietButton,
            dietType === 'vegetarian' && styles.dietButtonActive,
          ]}
          onPress={() => setDietType('vegetarian')}
        >
          <View style={styles.dietTextContainer}>
            <Text
              style={[
                styles.dietButtonText,
                dietType === 'vegetarian' && styles.dietButtonTextActive,
              ]}
            >
              Vejetaryen
            </Text>
          </View>
          {dietType === 'vegetarian' && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.dietButton,
            dietType === 'vegan' && styles.dietButtonActive,
          ]}
          onPress={() => setDietType('vegan')}
        >
          <View style={styles.dietTextContainer}>
            <Text
              style={[
                styles.dietButtonText,
                dietType === 'vegan' && styles.dietButtonTextActive,
              ]}
            >
              Vegan
            </Text>
          </View>
          {dietType === 'vegan' && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.dietButton,
            dietType === 'pescatarian' && styles.dietButtonActive,
          ]}
          onPress={() => setDietType('pescatarian')}
        >
          <View style={styles.dietTextContainer}>
            <Text
              style={[
                styles.dietButtonText,
                dietType === 'pescatarian' && styles.dietButtonTextActive,
              ]}
            >
              Pesketaryen (Balık ve Sebze)
            </Text>
          </View>
          {dietType === 'pescatarian' && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.dietButton,
            dietType === 'keto' && styles.dietButtonActive,
          ]}
          onPress={() => setDietType('keto')}
        >
          <View style={styles.dietTextContainer}>
            <Text
              style={[
                styles.dietButtonText,
                dietType === 'keto' && styles.dietButtonTextActive,
              ]}
            >
              Ketojenik
            </Text>
          </View>
          {dietType === 'keto' && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.dietButton,
            dietType === 'paleo' && styles.dietButtonActive,
          ]}
          onPress={() => setDietType('paleo')}
        >
          <View style={styles.dietTextContainer}>
            <Text
              style={[
                styles.dietButtonText,
                dietType === 'paleo' && styles.dietButtonTextActive,
              ]}
            >
              Paleo
            </Text>
          </View>
          {dietType === 'paleo' && (
            <View style={styles.checkContainer}>
              <Check color="#FFFFFF" size={16} />
            </View>
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Alerjileriniz</Text>
      <Text style={styles.subtitle}>
        Varsa, besin alerjilerinizi seçin (birden fazla seçebilirsiniz).
      </Text>

      <View style={styles.allergiesContainer}>
        <View style={styles.allergyRow}>
          <TouchableOpacity
            style={[
              styles.allergyButton,
              allergies.includes('dairy') && styles.allergyButtonActive,
            ]}
            onPress={() => toggleAllergy('dairy')}
          >
            <Text
              style={[
                styles.allergyButtonText,
                allergies.includes('dairy') && styles.allergyButtonTextActive,
              ]}
            >
              Süt Ürünleri
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.allergyButton,
              allergies.includes('gluten') && styles.allergyButtonActive,
            ]}
            onPress={() => toggleAllergy('gluten')}
          >
            <Text
              style={[
                styles.allergyButtonText,
                allergies.includes('gluten') && styles.allergyButtonTextActive,
              ]}
            >
              Gluten
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.allergyRow}>
          <TouchableOpacity
            style={[
              styles.allergyButton,
              allergies.includes('nuts') && styles.allergyButtonActive,
            ]}
            onPress={() => toggleAllergy('nuts')}
          >
            <Text
              style={[
                styles.allergyButtonText,
                allergies.includes('nuts') && styles.allergyButtonTextActive,
              ]}
            >
              Kuruyemiş
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.allergyButton,
              allergies.includes('eggs') && styles.allergyButtonActive,
            ]}
            onPress={() => toggleAllergy('eggs')}
          >
            <Text
              style={[
                styles.allergyButtonText,
                allergies.includes('eggs') && styles.allergyButtonTextActive,
              ]}
            >
              Yumurta
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.allergyRow}>
          <TouchableOpacity
            style={[
              styles.allergyButton,
              allergies.includes('seafood') && styles.allergyButtonActive,
            ]}
            onPress={() => toggleAllergy('seafood')}
          >
            <Text
              style={[
                styles.allergyButtonText,
                allergies.includes('seafood') && styles.allergyButtonTextActive,
              ]}
            >
              Deniz Ürünleri
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.allergyButton,
              allergies.includes('soy') && styles.allergyButtonActive,
            ]}
            onPress={() => toggleAllergy('soy')}
          >
            <Text
              style={[
                styles.allergyButtonText,
                allergies.includes('soy') && styles.allergyButtonTextActive,
              ]}
            >
              Soya
            </Text>
          </TouchableOpacity>
        </View>
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
  dietContainer: {
    marginBottom: 32,
  },
  dietButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    marginBottom: 12,
  },
  dietButtonActive: {
    borderColor: '#007AFF',
    backgroundColor: '#E6F2FF',
  },
  dietTextContainer: {
    flex: 1,
  },
  dietButtonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
  },
  dietButtonTextActive: {
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
  allergiesContainer: {
    marginBottom: 32,
  },
  allergyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  allergyButton: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  allergyButtonActive: {
    borderColor: '#007AFF',
    backgroundColor: '#E6F2FF',
  },
  allergyButtonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#333333',
  },
  allergyButtonTextActive: {
    color: '#007AFF',
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