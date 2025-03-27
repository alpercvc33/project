import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Brain, Heart } from 'lucide-react-native';
import { useAuthStore } from '../store/auth';

export default function AuthScreen() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { signIn, signUp, isLoading } = useAuthStore();

  const handleSubmit = async () => {
    try {
      if (isSignUp) {
        await signUp(email, password, name);
      } else {
        await signIn(email, password);
      }
      router.replace('/(tabs)');
    } catch (error) {
      // TODO: Handle error
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={['#007AFF', '#28A745']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.logoContainer}>
            <Brain color="#FFFFFF" size={40} />
            <Heart color="#FFFFFF" size={40} />
          </View>
          <Text style={styles.title}>ZekaKoç</Text>
          <Text style={styles.subtitle}>Your AI-Powered Life Coach</Text>
        </LinearGradient>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>
            {isSignUp ? 'Create Account' : 'Sign In'}
          </Text>

          {isSignUp && (
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={[styles.button, isLoading && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading
                ? 'Please wait...'
                : isSignUp
                ? 'Sign Up'
                : 'Sign In'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => setIsSignUp(!isSignUp)}
          >
            <Text style={styles.switchButtonText}>
              {isSignUp
                ? 'Already have an account? Sign in'
                : "Don't have an account? Sign up"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  formContainer: {
    padding: 24,
  },
  formTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: '#333333',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  switchButton: {
    alignItems: 'center',
  },
  switchButtonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#007AFF',
  },
});