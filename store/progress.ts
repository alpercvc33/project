import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';

export interface Progress {
  physicalHealth: number;
  mentalClarity: number;
  emotionalBalance: number;
  spiritualAwareness: number;
  careerSuccess: number;
  socialRelations: number;
}

export interface Goal {
  id: string;
  type: keyof Progress;
  target: number;
  current: number;
  deadline: string;
  completed: boolean;
}

interface ProgressState {
  progress: Progress;
  goals: Goal[];
  weeklyMeditations: number;
  weeklyExercises: number;
  waterIntake: number;
  updateProgress: (key: keyof Progress, value: number) => void;
  addGoal: (goal: Omit<Goal, 'id'>) => void;
  updateGoal: (id: string, updates: Partial<Goal>) => void;
  incrementMeditation: () => void;
  incrementExercise: () => void;
  incrementWater: () => void;
  resetWeekly: () => void;
}

const storage = {
  getItem: async (name: string): Promise<string | null> => {
    return await SecureStore.getItemAsync(name);
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await SecureStore.setItemAsync(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await SecureStore.deleteItemAsync(name);
  },
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      progress: {
        physicalHealth: 65,
        mentalClarity: 75,
        emotionalBalance: 70,
        spiritualAwareness: 60,
        careerSuccess: 80,
        socialRelations: 85,
      },
      goals: [],
      weeklyMeditations: 0,
      weeklyExercises: 0,
      waterIntake: 0,
      updateProgress: (key, value) =>
        set((state) => ({
          progress: {
            ...state.progress,
            [key]: value,
          },
        })),
      addGoal: (goal) =>
        set((state) => ({
          goals: [
            ...state.goals,
            {
              ...goal,
              id: Math.random().toString(36).substr(2, 9),
            },
          ],
        })),
      updateGoal: (id, updates) =>
        set((state) => ({
          goals: state.goals.map((goal) =>
            goal.id === id ? { ...goal, ...updates } : goal
          ),
        })),
      incrementMeditation: () =>
        set((state) => ({
          weeklyMeditations: state.weeklyMeditations + 1,
        })),
      incrementExercise: () =>
        set((state) => ({
          weeklyExercises: state.weeklyExercises + 1,
        })),
      incrementWater: () =>
        set((state) => ({
          waterIntake: state.waterIntake + 1,
        })),
      resetWeekly: () =>
        set({
          weeklyMeditations: 0,
          weeklyExercises: 0,
          waterIntake: 0,
        }),
    }),
    {
      name: 'progress-storage',
      storage: createJSONStorage(() => storage),
    }
  )
);