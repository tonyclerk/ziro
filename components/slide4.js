import React from 'react';

import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get('window');

export default function slide4() {
  const navigation = useNavigation();
  return (
    <View style={{ width, height }}>
      <ImageBackground
        source={require('../assets/slide4.jpg')}
        style={styles.image}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)', '#000000']}
          style={styles.bottomBox}
        >
          <Text style={styles.title}>ZIRO</Text>
          <Text style={styles.description}>
            Designed for tourists,explorers & authorities who care about safety
          </Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerButton}
        onPress={() => navigation.replace("Register")}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}
        onPress={() => navigation.replace("Login")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { flex: 1, justifyContent: 'flex-end' },
  bottomBox: {
    height: height * 0.35,
    padding: 20,
    justifyContent: 'flex-end',
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 20, textAlign: 'center' },
  description: { fontSize: 16, color: '#fff', marginBottom: 20, textAlign: 'center' },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  registerButton: {
    flex: 1,
    backgroundColor: "#ff8c00ff",
    paddingVertical: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    marginBottom: 40
  },
  loginButton: {
    flex: 1,
    backgroundColor: "#8f978fff",
    paddingVertical: 15,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: 'Kameron',
  },
  
});