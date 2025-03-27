import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';

interface User {
  id: string;
  email: string;
  name: string;
  isPremium: boolean;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
  setUser: (user: User) => void;
}

// SecureStore storage for persisting auth state
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

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      signIn: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          // TODO: Implement actual API call
          const mockUser: User = {
            id: '1',
            email,
            name: 'Test User',
            isPremium: false,
            createdAt: new Date().toISOString(),
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
          // TODO: Implement actual API call
          const mockUser: User = {
            id: '1',
            email,
            name,
            isPremium: false,
            createdAt: new Date().toISOString(),
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
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => storage),
    }
  )
);