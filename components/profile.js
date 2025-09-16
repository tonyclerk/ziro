import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomNav from "./Helpers/BottomNav";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import SOSButton from "./Helpers/SOS";

export default function ProfileScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }} // placeholder avatar
          style={styles.avatar}
        />
        <Text style={styles.name}>My Goat</Text>
        <Text style={styles.email}>mygoat@gmail.com</Text>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="pencil" size={20} color="#fff" />
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.stats}>
        <Text style={styles.statText}>SOS Alerts Triggered: 3</Text>
        <Text style={styles.statText}>Locations Shared: 5</Text>
      </View>

      {/* Settings */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Account Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Notifications</Text>
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Location Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Theme</Text>
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Support */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Help & Support</Text>
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Privacy Policy</Text>
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <SOSButton />

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton}
        onPress={() => {
       // reset navigation stack and go to Login
          navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
          });
         }}
       >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <BottomNav navigation={navigation} style = {{marginBottom: 10}} />
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0D1B2A", padding: 5 },
  header: { alignItems: "center", marginBottom: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  email: { fontSize: 14, color: "#aaa", marginBottom: 10 },
  editButton: {
    flexDirection: "row",
    backgroundColor: "#1B263B",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  editText: { color: "#fff", marginLeft: 5 },
  stats: {
    backgroundColor: "#1B263B",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  statText: { color: "#fff", fontSize: 16, marginBottom: 5 },
  section: {
    backgroundColor: "#1B263B",
    borderRadius: 10,
    marginBottom: 15,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  optionText: { color: "#fff", fontSize: 16 },
  logoutButton: {
    backgroundColor: "#FF3B30",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  logoutText: { color: "#fff", fontSize: 16, fontWeight: "bold",},
});
