import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

export default function UserInfo() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other' | null>(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const isFormValid = name && age && gender && height && weight;

  const handleNext = () => {
    if (isFormValid) {
      // In a real app, we would save this data to context or storage
      router.push('/(onboarding)/fitness-goals');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft color="#007AFF" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kişisel Bilgiler</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '25%' }]} />
        </View>
        <Text style={styles.progressText}>1/4</Text>
      </View>

      <Text style={styles.title}>Sizi Tanıyalım</Text>
      <Text style={styles.subtitle}>
        Size en uygun programı oluşturabilmemiz için lütfen aşağıdaki bilgileri doldurun.
      </Text>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Adınız</Text>
          <TextInput
            style={styles.input}
            placeholder="Adınızı girin"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Yaşınız</Text>
          <TextInput
            style={styles.input}
            placeholder="Yaşınızı girin"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Cinsiyet</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'male' && styles.genderButtonActive,
              ]}
              onPress={() => setGender('male')}
            >
              <Text
                style={[
                  styles.genderButtonText,
                  gender === 'male' && styles.genderButtonTextActive,
                ]}
              >
                Erkek
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'female' && styles.genderButtonActive,
              ]}
              onPress={() => setGender('female')}
            >
              <Text
                style={[
                  styles.genderButtonText,
                  gender === 'female' && styles.genderButtonTextActive,
                ]}
              >
                Kadın
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'other' && styles.genderButtonActive,
              ]}
              onPress={() => setGender('other')}
            >
              <Text
                style={[
                  styles.genderButtonText,
                  gender === 'other' && styles.genderButtonTextActive,
                ]}
              >
                Diğer
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>Boy (cm)</Text>
            <TextInput
              style={styles.input}
              placeholder="Boy"
              value={height}
              onChangeText={setHeight}
              keyboardType="numeric"
            />
          </View>
          <View style={[styles.inputContainer, { flex: 1, marginLeft: 8 }]}>
            <Text style={styles.label}>Kilo (kg)</Text>
            <TextInput
              style={styles.input}
              placeholder="Kilo"
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
            />
          </View>
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
    marginBottom: 32,
    lineHeight: 24,
  },
  formContainer: {
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    fontFamily: 'Roboto-Regular',
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333333',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderButton: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  genderButtonActive: {
    borderColor: '#007AFF',
    backgroundColor: '#E6F2FF',
  },
  genderButtonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
  },
  genderButtonTextActive: {
    color: '#007AFF',
    fontFamily: 'Roboto-Medium',
  },
  rowContainer: {
    flexDirection: 'row',
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