import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
// import { useRouter } from 'expo-router'; // <-- added router



const ZiroSignUpScreen = () => {
  // const router = useRouter();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Success', 'Account created (mock)');
         router.push('/Screens/ZiroLoginScreen')// Navigate back to login
    }, 2000);
  };

  const handleSocialLogin = (provider) => {
    Alert.alert('Social Login', `${provider} login would be implemented here`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Ionicons name="shield-checkmark" size={48} color="#2563EB" />
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>
              Your trusted travel safety companion
            </Text>
          </View>

          <View style={styles.formContainer}>
            {/* Name */}
            <View style={styles.inputContainer}>
              <Ionicons
                name="person-outline"
                size={20}
                color="#6B7280"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#9CA3AF"
                value={name}
                onChangeText={setName}
              />
            </View>

            {/* Email */}
            <View style={styles.inputContainer}>
              <Ionicons
                name="mail-outline"
                size={20}
                color="#6B7280"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password */}
            <View style={styles.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color="#6B7280"
                style={styles.inputIcon}
              />
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Password"
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color="#6B7280"
                />
              </TouchableOpacity>
            </View>

            {/* Confirm Password */}
            <View style={styles.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color="#6B7280"
                style={styles.inputIcon}
              />
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Confirm Password"
                placeholderTextColor="#9CA3AF"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showPassword}
              />
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              style={[
                styles.signUpButton,
                isLoading && styles.signUpButtonDisabled,
              ]}
              onPress={() => navigation.replace("Home")}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFFFFF" size="small" />
              ) : (
                <Text style={styles.signUpButtonText}>Sign Up</Text>
              )}
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>Or continue with</Text>
              <View style={styles.divider} />
            </View>

            {/* Social Login Buttons */}
            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin('Google')}
              >
                <Ionicons name="logo-google" size={20} color="#4285F4" />
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin('Facebook')}
              >
                <Ionicons name="logo-facebook" size={20} color="#1877F2" />
                <Text style={styles.socialButtonText}>Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Already have an account */}
          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Already have an account? </Text>
            <TouchableOpacity onPress={() =>  navigation.replace("Login")}>
              <Text style={styles.signInLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  keyboardAvoid: { flex: 1 },
  scrollContent: { flexGrow: 1, padding: 20 },
  header: { alignItems: 'center', marginVertical: 40 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#111827', marginTop: 12 },
  subtitle: { fontSize: 16, color: '#6B7280', textAlign: 'center', marginTop: 4 },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
  },
  inputIcon: { marginRight: 12 },
  input: { flex: 1, height: 48, fontSize: 16, color: '#111827' },
  passwordInput: { paddingRight: 40 },
  eyeIcon: { position: 'absolute', right: 12, height: 48, justifyContent: 'center' },
  signUpButton: {
    backgroundColor: '#2563EB',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  signUpButtonDisabled: { opacity: 0.7 },
  signUpButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  divider: { flex: 1, height: 1, backgroundColor: '#E5E7EB' },
  dividerText: { marginHorizontal: 16, fontSize: 14, color: '#6B7280' },
  socialButtonsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  socialButtonText: { marginLeft: 8, fontSize: 14, color: '#374151', fontWeight: '500' },
  signInContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 24 },
  signInText: { fontSize: 14, color: '#6B7280' },
  signInLink: { fontSize: 14, color: '#2563EB', fontWeight: '500' },
});

export default ZiroSignUpScreen;
