import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

export interface Subscription {
  isPremium: boolean;
  expiresAt: string | null;
  features: string[];
  chatCredits: number;
}

interface SubscriptionState {
  subscription: Subscription;
  setPremium: (status: boolean) => void;
  setExpiryDate: (date: string) => void;
  deductCredits: (amount: number) => void;
  addCredits: (amount: number) => void;
}

const storage = Platform.OS !== 'web' 
  ? {
      getItem: async (name: string): Promise<string | null> => {
        return await SecureStore.getItemAsync(name);
      },
      setItem: async (name: string, value: string): Promise<void> => {
        await SecureStore.setItemAsync(name, value);
      },
      removeItem: async (name: string): Promise<void> => {
        await SecureStore.deleteItemAsync(name);
      },
    }
  : {
      getItem: async (name: string): Promise<string | null> => {
        return localStorage.getItem(name);
      },
      setItem: async (name: string, value: string): Promise<void> => {
        localStorage.setItem(name, value);
      },
      removeItem: async (name: string): Promise<void> => {
        localStorage.removeItem(name);
      },
    };

const FREE_FEATURES = [
  'Temel analiz tablosu',
  'Sınırlı chatbot sohbeti',
  'Haftalık 3 öneri',
  'Temel egzersiz planları',
];

const PREMIUM_FEATURES = [
  ...FREE_FEATURES,
  'Sınırsız chatbot sohbeti',
  'Derin bilinç teknikleri',
  'Özelleştirilmiş planlar',
  'Premium içerik erişimi',
  'Offline erişim',
  'AR destekli meditasyon',
  'Canlı koçluk desteği',
];

export const useSubscriptionStore = create<SubscriptionState>()(
  persist(
    (set) => ({
      subscription: {
        isPremium: false,
        expiresAt: null,
        features: FREE_FEATURES,
        chatCredits: 10,
      },
      setPremium: (status) =>
        set((state) => ({
          subscription: {
            ...state.subscription,
            isPremium: status,
            features: status ? PREMIUM_FEATURES : FREE_FEATURES,
          },
        })),
      setExpiryDate: (date) =>
        set((state) => ({
          subscription: {
            ...state.subscription,
            expiresAt: date,
          },
        })),
      deductCredits: (amount) =>
        set((state) => ({
          subscription: {
            ...state.subscription,
            chatCredits: Math.max(0, state.subscription.chatCredits - amount),
          },
        })),
      addCredits: (amount) =>
        set((state) => ({
          subscription: {
            ...state.subscription,
            chatCredits: state.subscription.chatCredits + amount,
          },
        })),
    }),
    {
      name: 'subscription-storage',
      storage: createJSONStorage(() => storage),
    }
  )
);