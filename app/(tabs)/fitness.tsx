import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Play, Clock, Flame, ChevronRight } from 'lucide-react-native';

const workoutCategories = [
  { id: 'all', name: 'Tümü' },
  { id: 'cardio', name: 'Kardio' },
  { id: 'strength', name: 'Güç' },
  { id: 'flexibility', name: 'Esneklik' },
  { id: 'hiit', name: 'HIIT' },
  { id: 'yoga', name: 'Yoga' },
];

const workouts = [
  {
    id: '1',
    title: 'Tam Vücut Antrenmanı',
    category: 'strength',
    duration: '30 dk',
    calories: '250 kcal',
    level: 'Orta',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '2',
    title: 'Kardiyo Patlaması',
    category: 'cardio',
    duration: '25 dk',
    calories: '300 kcal',
    level: 'Yüksek',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '3',
    title: 'Sabah Yoga',
    category: 'yoga',
    duration: '20 dk',
    calories: '150 kcal',
    level: 'Başlangıç',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '4',
    title: 'HIIT Antrenmanı',
    category: 'hiit',
    duration: '15 dk',
    calories: '200 kcal',
    level: 'Yüksek',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '5',
    title: 'Esneklik Rutini',
    category: 'flexibility',
    duration: '15 dk',
    calories: '100 kcal',
    level: 'Başlangıç',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

export default function FitnessScreen() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredWorkouts = selectedCategory === 'all'
    ? workouts
    : workouts.filter(workout => workout.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Fitness Programı</Text>
        </View>

        <View style={styles.featuredWorkoutContainer}>
          <TouchableOpacity style={styles.featuredWorkout}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
              style={styles.featuredWorkoutImage}
            />
            <View style={styles.featuredWorkoutOverlay}>
              <View style={styles.featuredWorkoutContent}>
                <Text style={styles.featuredWorkoutTitle}>Günün Antrenmanı</Text>
                <Text style={styles.featuredWorkoutSubtitle}>Tam Vücut Güçlendirme</Text>
                <View style={styles.featuredWorkoutDetails}>
                  <View style={styles.featuredWorkoutDetail}>
                    <Clock color="#FFFFFF" size={16} />
                    <Text style={styles.featuredWorkoutDetailText}>35 dk</Text>
                  </View>
                  <View style={styles.featuredWorkoutDetail}>
                    <Flame color="#FFFFFF" size={16} />
                    <Text style={styles.featuredWorkoutDetailText}>320 kcal</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Play color="#FFFFFF" size={24} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {workoutCategories.map(category => (
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

        <View style={styles.workoutsContainer}>
          {filteredWorkouts.map(workout => (
            <TouchableOpacity key={workout.id} style={styles.workoutCard}>
              <Image source={{ uri: workout.image }} style={styles.workoutImage} />
              <View style={styles.workoutContent}>
                <View>
                  <Text style={styles.workoutTitle}>{workout.title}</Text>
                  <View style={styles.workoutDetails}>
                    <View style={styles.workoutDetail}>
                      <Clock color="#666666" size={14} />
                      <Text style={styles.workoutDetailText}>{workout.duration}</Text>
                    </View>
                    <View style={styles.workoutDetail}>
                      <Flame color="#666666" size={14} />
                      <Text style={styles.workoutDetailText}>{workout.calories}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.workoutLevelContainer}>
                  <Text style={styles.workoutLevel}>{workout.level}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Kişiselleştirilmiş Planınız</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.planCard}>
          <View style={styles.planContent}>
            <Text style={styles.planTitle}>Haftalık Fitness Planı</Text>
            <Text style={styles.planSubtitle}>Hedeflerinize göre özelleştirilmiş 7 günlük program</Text>
            <View style={styles.planProgress}>
              <View style={styles.planProgressBar}>
                <View style={[styles.planProgressFill, { width: '40%' }]} />
              </View>
              <Text style={styles.planProgressText}>2/5 tamamlandı</Text>
            </View>
          </View>
          <ChevronRight color="#007AFF" size={20} />
        </TouchableOpacity>
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
  featuredWorkoutContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  featuredWorkout: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 200,
  },
  featuredWorkoutImage: {
    width: '100%',
    height: '100%',
  },
  featuredWorkoutOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 16,
  },
  featuredWorkoutContent: {
    flex: 1,
  },
  featuredWorkoutTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 4,
  },
  featuredWorkoutSubtitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  featuredWorkoutDetails: {
    flexDirection: 'row',
  },
  featuredWorkoutDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  featuredWorkoutDetailText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 6,
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
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
  workoutsContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  workoutCard: {
    flexDirection: 'row',
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
  workoutImage: {
    width: 100,
    height: 100,
  },
  workoutContent: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
  },
  workoutDetails: {
    flexDirection: 'row',
  },
  workoutDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  workoutDetailText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#666666',
    marginLeft: 4,
  },
  workoutLevelContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#E6F2FF',
  },
  workoutLevel: {
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
  planCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 24,
    marginBottom: 32,
  },
  planContent: {
    flex: 1,
  },
  planTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },
  planSubtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  planProgress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  planProgressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    marginRight: 12,
  },
  planProgressFill: {
    height: 6,
    backgroundColor: '#007AFF',
    borderRadius: 3,
  },
  planProgressText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#666666',
  },
});