import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router'; // <-- added router
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ZiroLoginScreen = () => {
  // const router = useRouter(); // <-- initialize router
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Success', 'Login successful (mock)');
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
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Ionicons name="shield-checkmark" size={48} color="#2563EB" />
            </View>
            <Text style={styles.title}>Welcome to Ziro</Text>
            <Text style={styles.subtitle}>
              Your trusted travel safety companion
            </Text>
          </View>

          {/* Login Form */}
          <View style={styles.formContainer}>
            {/* Email Input */}
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
                autoCorrect={false}
              />
            </View>

            {/* Password Input */}
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
                autoCapitalize="none"
                autoCorrect={false}
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

            {/* Remember Me & Forgot Password */}
            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={styles.rememberMeContainer}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <Ionicons
                  name={rememberMe ? 'checkbox' : 'square-outline'}
                  size={20}
                  color="#2563EB"
                />
                <Text style={styles.rememberMeText}>Remember me</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
              onPress={() => navigation.replace("Home")}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFFFFF" size="small" />
              ) : (
                <Text style={styles.loginButtonText}>Sign in to Ziro</Text>
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

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>New to Ziro? </Text>
            <TouchableOpacity onPress={() => navigation.replace("Register")}>
              <Text style={styles.signUpLink}>Create an account</Text>
            </TouchableOpacity>
          </View>

          {/* Safety Features Preview */}
          <View style={styles.featuresContainer}>
            <Text style={styles.featuresTitle}>
              Stay safe while traveling with:
            </Text>
            <View style={styles.featuresGrid}>
              <View style={styles.featureItem}>
                <Ionicons name="location-outline" size={16} color="#2563EB" />
                <Text style={styles.featureText}>Emergency locations</Text>
              </View>
              <View style={styles.featureItem}>
                <Ionicons name="people-outline" size={16} color="#2563EB" />
                <Text style={styles.featureText}>Trusted contacts</Text>
              </View>
              <View style={styles.featureItem}>
                <Ionicons name="notifications-outline" size={16} color="#2563EB" />
                <Text style={styles.featureText}>Real-time alerts</Text>
              </View>
              <View style={styles.featureItem}>
                <Ionicons
                  name="shield-checkmark-outline"
                  size={16}
                  color="#2563EB"
                />
                <Text style={styles.featureText}>Safety resources</Text>
              </View>
            </View>
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
  header: { alignItems: 'center', marginTop: 40, marginBottom: 40 },
  logoContainer: { width: 80, height: 80, backgroundColor: '#EFF6FF', borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#111827', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#6B7280', textAlign: 'center' },
  formContainer: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 3, marginBottom: 20 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 8, marginBottom: 16, paddingHorizontal: 12, backgroundColor: '#FFFFFF' },
  inputIcon: { marginRight: 12 },
  input: { flex: 1, height: 48, fontSize: 16, color: '#111827' },
  passwordInput: { paddingRight: 40 },
  eyeIcon: { position: 'absolute', right: 12, height: 48, justifyContent: 'center' },
  optionsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  rememberMeContainer: { flexDirection: 'row', alignItems: 'center' },
  rememberMeText: { marginLeft: 8, fontSize: 14, color: '#374151' },
  forgotPasswordText: { fontSize: 14, color: '#2563EB', fontWeight: '500' },
  loginButton: { backgroundColor: '#2563EB', height: 48, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
  loginButtonDisabled: { opacity: 0.7 },
  loginButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  divider: { flex: 1, height: 1, backgroundColor: '#E5E7EB' },
  dividerText: { marginHorizontal: 16, fontSize: 14, color: '#6B7280' },
  socialButtonsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  socialButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 44, backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 8, marginHorizontal: 4 },
  socialButtonText: { marginLeft: 8, fontSize: 14, color: '#374151', fontWeight: '500' },
  signUpContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  signUpText: { fontSize: 14, color: '#6B7280' },
  signUpLink: { fontSize: 14, color: '#2563EB', fontWeight: '500' },
  featuresContainer: { backgroundColor: '#F0F9FF', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: '#E0F2FE' },
  featuresTitle: { fontSize: 14, fontWeight: '500', color: '#111827', marginBottom: 12 },
  featuresGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  featureItem: { flexDirection: 'row', alignItems: 'center', width: '50%', marginBottom: 8 },
  featureText: { marginLeft: 8, fontSize: 12, color: '#374151' },
});

export default ZiroLoginScreen;
