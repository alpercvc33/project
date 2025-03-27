import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Brain, Heart, Dumbbell, Users, Star, TrendingUp } from 'lucide-react-native';
import { useProgressStore, Progress } from '../store/progress';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const progressIcons = {
  physicalHealth: Dumbbell,
  mentalClarity: Brain,
  emotionalBalance: Heart,
  spiritualAwareness: Star,
  careerSuccess: TrendingUp,
  socialRelations: Users,
};

const progressColors = {
  physicalHealth: '#007AFF',
  mentalClarity: '#28A745',
  emotionalBalance: '#DC3545',
  spiritualAwareness: '#6B46C1',
  careerSuccess: '#FF9800',
  socialRelations: '#17A2B8',
};

// Custom chart component that only renders on native platforms
const PlatformLineChart = Platform.select({
  native: LineChart,
  default: () => (
    <View style={[styles.chart, { height: 220, backgroundColor: '#f5f5f5', borderRadius: 16, justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={{ color: '#666666' }}>Chart visualization (not available on web)</Text>
    </View>
  ),
});

export default function AnalysisDashboard() {
  const { progress } = useProgressStore();

  const renderProgressItem = (key: keyof Progress, value: number) => {
    const Icon = progressIcons[key];
    const color = progressColors[key];
    const title = key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());

    return (
      <View key={key} style={styles.progressItem}>
        <View style={[styles.iconContainer, { backgroundColor: `${color}20` }]}>
          <Icon color={color} size={24} />
        </View>
        <View style={styles.progressContent}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>{title}</Text>
            <Text style={[styles.progressValue, { color }]}>{value}%</Text>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${value}%`, backgroundColor: color },
              ]}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Progress Analysis</Text>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Weekly Progress</Text>
        {PlatformLineChart && (
          <PlatformLineChart
            data={{
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [
                {
                  data: [65, 68, 70, 72, 75, 78, 80],
                  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
                  strokeWidth: 2,
                },
              ],
            }}
            width={width - 48}
            height={220}
            chartConfig={{
              backgroundColor: '#FFFFFF',
              backgroundGradientFrom: '#FFFFFF',
              backgroundGradientTo: '#FFFFFF',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(102, 102, 102, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#007AFF',
              },
            }}
            bezier
            style={styles.chart}
          />
        )}
      </View>

      <View style={styles.progressContainer}>
        {Object.entries(progress).map(([key, value]) =>
          renderProgressItem(key as keyof Progress, value)
        )}
      </View>

      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.detailsButtonText}>Detailed Analysis</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: '#333333',
    marginBottom: 24,
  },
  chartContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chartTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#333333',
    marginBottom: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  progressContent: {
    flex: 1,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#333333',
  },
  progressValue: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#F5F5F5',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  detailsButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  detailsButtonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
});