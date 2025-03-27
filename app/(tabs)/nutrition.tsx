import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Clock, ChevronRight, Plus } from 'lucide-react-native';

const mealCategories = [
  { id: 'all', name: 'Tümü' },
  { id: 'breakfast', name: 'Kahvaltı' },
  { id: 'lunch', name: 'Öğle Yemeği' },
  { id: 'dinner', name: 'Akşam Yemeği' },
  { id: 'snack', name: 'Atıştırmalık' },
];

const meals = [
  {
    id: '1',
    title: 'Avokadolu Tost',
    category: 'breakfast',
    prepTime: '10 dk',
    calories: '320 kcal',
    protein: '12g',
    carbs: '30g',
    fat: '18g',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '2',
    title: 'Tavuklu Salata',
    category: 'lunch',
    prepTime: '15 dk',
    calories: '380 kcal',
    protein: '35g',
    carbs: '15g',
    fat: '20g',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '3',
    title: 'Izgara Somon',
    category: 'dinner',
    prepTime: '20 dk',
    calories: '420 kcal',
    protein: '40g',
    carbs: '5g',
    fat: '25g',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '4',
    title: 'Yoğurtlu Meyve',
    category: 'snack',
    prepTime: '5 dk',
    calories: '150 kcal',
    protein: '8g',
    carbs: '20g',
    fat: '3g',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '5',
    title: 'Yeşil Smoothie',
    category: 'breakfast',
    prepTime: '5 dk',
    calories: '180 kcal',
    protein: '5g',
    carbs: '25g',
    fat: '7g',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

export default function NutritionScreen() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMeals = selectedCategory === 'all'
    ? meals
    : meals.filter(meal => meal.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Beslenme Planı</Text>
        </View>

        <View style={styles.nutritionSummaryContainer}>
          <View style={styles.nutritionSummaryCard}>
            <Text style={styles.nutritionSummaryTitle}>Günlük Beslenme Özeti</Text>
            <View style={styles.macrosContainer}>
              <View style={styles.macroItem}>
                <View style={[styles.macroCircle, { borderColor: '#007AFF' }]}>
                  <Text style={styles.macroValue}>1850</Text>
                </View>
                <Text style={styles.macroLabel}>Kalori</Text>
              </View>
              <View style={styles.macroItem}>
                <View style={[styles.macroCircle, { borderColor: '#28A745' }]}>
                  <Text style={styles.macroValue}>120g</Text>
                </View>
                <Text style={styles.macroLabel}>Protein</Text>
              </View>
              <View style={styles.macroItem}>
                <View style={[styles.macroCircle, { borderColor: '#FFC107' }]}>
                  <Text style={styles.macroValue}>180g</Text>
                </View>
                <Text style={styles.macroLabel}>Karb</Text>
              </View>
              <View style={styles.macroItem}>
                <View style={[styles.macroCircle, { borderColor: '#DC3545' }]}>
                  <Text style={styles.macroValue}>60g</Text>
                </View>
                <Text style={styles.macroLabel}>Yağ</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.waterTrackerButton}>
              <Text style={styles.waterTrackerText}>Su Takibi: 5/8 bardak</Text>
              <Plus color="#007AFF" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {mealCategories.map(category => (
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

        <View style={styles.mealsContainer}>
          {filteredMeals.map(meal => (
            <TouchableOpacity key={meal.id} style={styles.mealCard}>
              <Image source={{ uri: meal.image }} style={styles.mealImage} />
              <View style={styles.mealContent}>
                <Text style={styles.mealTitle}>{meal.title}</Text>
                <View style={styles.mealDetails}>
                  <View style={styles.mealDetail}>
                    <Clock color="#666666" size={14} />
                    <Text style={styles.mealDetailText}>{meal.prepTime}</Text>
                  </View>
                  <Text style={styles.mealDetailText}>{meal.calories}</Text>
                </View>
                <View style={styles.macroDetails}>
                  <View style={styles.macroDetail}>
                    <Text style={styles.macroDetailLabel}>Protein</Text>
                    <Text style={styles.macroDetailValue}>{meal.protein}</Text>
                  </View>
                  <View style={styles.macroDetail}>
                    <Text style={styles.macroDetailLabel}>Karb</Text>
                    <Text style={styles.macroDetailValue}>{meal.carbs}</Text>
                  </View>
                  <View style={styles.macroDetail}>
                    <Text style={styles.macroDetailLabel}>Yağ</Text>
                    <Text style={styles.macroDetailValue}>{meal.fat}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Kişiselleştirilmiş Beslenme Planı</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.planCard}>
          <View style={styles.planContent}>
            <Text style={styles.planTitle}>Haftalık Beslenme Planı</Text>
            <Text style={styles.planSubtitle}>Hedeflerinize göre özelleştirilmiş 7 günlük menü</Text>
            <View style={styles.planTags}>
              <View style={styles.planTag}>
                <Text style={styles.planTagText}>Protein Odaklı</Text>
              </View>
              <View style={styles.planTag}>
                <Text style={styles.planTagText}>Düşük Karbonhidrat</Text>
              </View>
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
  nutritionSummaryContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  nutritionSummaryCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    padding: 20,
  },
  nutritionSummaryTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
    marginBottom: 16,
  },
  macrosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  macroItem: {
    alignItems: 'center',
  },
  macroCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  macroValue: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#333333',
  },
  macroLabel: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#666666',
  },
  waterTrackerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E6F2FF',
    borderRadius: 12,
    padding: 12,
  },
  waterTrackerText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#007AFF',
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
  mealsContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  mealCard: {
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
  mealImage: {
    width: '100%',
    height: 160,
  },
  mealContent: {
    padding: 16,
  },
  mealTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#333333',
    marginBottom: 8,
  },
  mealDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  mealDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mealDetailText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#666666',
    marginLeft: 6,
  },
  macroDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 12,
  },
  macroDetail: {
    alignItems: 'center',
  },
  macroDetailLabel: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
  macroDetailValue: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#333333',
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
  planTags: {
    flexDirection: 'row',
  },
  planTag: {
    backgroundColor: '#E6F2FF',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 8,
  },
  planTagText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: '#007AFF',
  },
});