// store/auth.ts
import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
  isPremium: boolean;
  createdAt: string;
  onboardingCompleted: boolean;
  mentalGoals: string[];
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
  setUser: (user: User) => void;
  updateMentalGoals: (goals: string[]) => void;
  completeOnboarding: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: {
    id: '1',
    email: 'test@example.com',
    name: 'Test User',
    isPremium: false,
    createdAt: new Date().toISOString(),
    onboardingCompleted: false,
    mentalGoals: []
  },
  token: 'dummy-token', // Test için daima token oluştur
  isLoading: false,
  signIn: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      const mockUser: User = {
        id: '1',
        email,
        name: 'Test User',
        isPremium: false,
        createdAt: new Date().toISOString(),
        onboardingCompleted: false,
        mentalGoals: []
      };
      set({ user: mockUser, token: 'mock-token', isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  signUp: async (email: string, password: string, name: string) => {
    set({ isLoading: true });
    try {
      const mockUser: User = {
        id: '1',
        email,
        name,
        isPremium: false,
        createdAt: new Date().toISOString(),
        onboardingCompleted: false,
        mentalGoals: []
      };
      set({ user: mockUser, token: 'mock-token', isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  signOut: () => {
    set({ user: null, token: null });
  },
  setUser: (user: User) => {
    set({ user });
  },
  updateMentalGoals: (goals) => {
    set((state) => ({
      user: state.user ? { ...state.user, mentalGoals: goals } : null
    }));
  },
  completeOnboarding: () => {
    set((state) => ({
      user: state.user ? { ...state.user, onboardingCompleted: true } : null
    }));
  }
}));