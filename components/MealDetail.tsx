import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Clock, ChevronLeft, Check } from 'lucide-react-native';

type MealDetailProps = {
  onClose: () => void;
};

export default function MealDetail({ onClose }: MealDetailProps) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
            style={styles.image}
          />
          <TouchableOpacity style={styles.backButton} onPress={onClose}>
            <ChevronLeft color="#FFFFFF" size={24} />
          </TouchableOpacity>
          <View style={styles.imageOverlay}>
            <View style={styles.mealInfo}>
              <Text style={styles.mealCategory}>Öğle Yemeği</Text>
              <Text style={styles.mealTitle}>Tavuklu Salata</Text>
              <View style={styles.mealDetails}>
                <View style={styles.mealDetail}>
                  <Clock color="#FFFFFF" size={16} />
                  <Text style={styles.mealDetailText}>15 dk hazırlık</Text>
                </View>
                <View style={styles.mealDetailTag}>
                  <Text style={styles.mealDetailTagText}>380 kcal</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.macrosContainer}>
            <View style={styles.macroItem}>
              <Text style={styles.macroValue}>35g</Text>
              <Text style={styles.macroLabel}>Protein</Text>
            </View>
            <View style={styles.macroItem}>
              <Text style={styles.macroValue}>15g</Text>
              <Text style={styles.macroLabel}>Karbonhidrat</Text>
            </View>
            <View style={styles.macroItem}>
              <Text style={styles.macroValue}>20g</Text>
              <Text style={styles.macroLabel}>Yağ</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Malzemeler</Text>
          <View style={styles.ingredientsList}>
            <View style={styles.ingredientItem}>
              <Check color="#28A745" size={16} />
              <Text style={styles.ingredientText}>200g tavuk göğsü</Text>
            </View>
            <View style={styles.ingredientItem}>
              <Check color="#28A745" size={16} />
              <Text style={styles.ingredientText}>2 avuç karışık yeşillik (roka, marul, ıspanak)</Text>
            </View>
            <View style={styles.ingredientItem}>
              <Check color="#28A745" size={16} />
              <Text style={styles.ingredientText}>1 adet domates</Text>
            </View>
            <View style={styles.ingredientItem}>
              <Check color="#28A745" size={16} />
              <Text style={styles.ingredientText}>1/2 adet salatalık</Text>
            </View>
            <View style={styles.ingredientItem}>
              <Check color="#28A745" size={16} />
              <Text style={styles.ingredientText}>1/4 adet kırmızı soğan</Text>
            </View>
            <View style={styles.ingredientItem}>
              <Check color="#28A745" size={16} />
              <Text style={styles.ingredientText}>1 yemek kaşığı zeytinyağı</Text>
            </View>
            <View style={styles.ingredientItem}>
              <Check color="#28A745" size={16} />
              <Text style={styles.ingredientText}>1 yemek kaşığı limon suyu</Text>
            </View>
            <View style={styles.ingredientItem}>
              <Check color="#28A745" size={16} />
              <Text style={styles.ingredientText}>Tuz ve karabiber</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Hazırlanışı</Text>
          <View style={styles.stepsList}>
            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <Text style={styles.stepText}>
                Tavuk göğsünü küçük parçalar halinde doğrayın ve bir tavada orta ateşte pişirin. 
                Tuz ve karabiber ekleyin.
              </Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <Text style={styles.stepText}>
                Yeşillikleri yıkayıp kurulayın ve bir salata kasesine koyun.
              </Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <Text style={styles.stepText}>