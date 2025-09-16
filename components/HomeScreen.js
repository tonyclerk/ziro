import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ImageBackground, LayoutAnimation, Animated, Platform, UIManager } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "./Helpers/BottomNav";
import SOSButton from "./Helpers/SOS";
import QuickActions from "./Helpers/quickaction";

if(Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental){
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const Card = ({ icon, title, summary, details }) => {
  const [expanded, setExpanded] = useState(false);
  // const widthAnim = useRef(new Animated.Value(180)).current;

  const toggleExpand = () => {
   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity
      style={[styles.card,  expanded && styles.cardItemExpanded]}
      activeOpacity={0.9}
      onPress={toggleExpand}
    >
      <View style={styles.cardHeader}>
      <Ionicons name={icon} size={20} color="#fff" />
      <View style={{ flex: 1 }}>
      <Text style={{fontSize: 14, fontWeight: "bold", color: "#fff", marginTop: "10"}}>{summary}</Text>
      {/* <Text style={styles.cardSummary}>{summary}</Text> */}
      {expanded && (
        <View style={styles.details}>
            <Text style={styles.detailText}>
              {details}
            </Text>
        </View>
      )}
      </View>
      </View>
    </TouchableOpacity>
  );
};

const alerts = [
  { id: "1", title: "🚧 Landslide Alert", description: "Road blocked for 2 hrs" },
  { id: "2", title: "🌊 Flood Warning", description: "Reported at 1:30 PM" },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
  
    <View style={styles.container}>
      <LinearGradient colors={["#0D1B2A", "#1B263B"]} style={styles.container}>
    
      {/* Top Background with Menu Bar */}
      <ImageBackground
        source={require("../assets/bg1.png")} // put your background image here
        style={styles.headerBackground}
        resizeMode="cover"
      >
        <LinearGradient
      colors={["rgba(0,0,0,0.4)", "rgba(27,38,59,1)"]}
      style={styles.gradientOverlay}
      />  
      </ImageBackground>
     
     <SafeAreaView style={styles.content}>
      {/* Top Bar */}
      <View style={styles.content}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Ziro</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={26} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Stay Safe, Suraj</Text>

      {/* Info Cards */}
      <View style={styles.cardContainer}>
        <Card
          icon="calendar"
          title="Date" 
          summary="13th Sep" 
          details="Saturday, 13th September 2025, 7:30 PM" 
        />
        <Card 
          icon="cloud" 
          title="Weather" 
          summary="Sunny" 
          details="Temperature: 28°C, Clear Skies" 
        />
        <Card 
          icon="location" 
          title="Location" 
          summary="Shimla" 
          details="Mall Road, Near Ridge, Himachal Pradesh" 
        />
        {/* <View style={styles.card}>
          <Ionicons name="calendar" size={24} color="#fff" />
          <Text style={styles.cardText}>25 Aug</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="cloud" size={24} color="#fff" />
          <Text style={styles.cardText}>Sunny</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="location" size={24} color="#fff" />
          <Text style={styles.cardText}>Shimla</Text>
        </View> */}
      </View>

      <Text style={styles.sectionHead}>Quick Actions</Text>
      <QuickActions />

      {/* Nearby Alerts */}
      <Text style={styles.sectionTitle}>Nearby Alerts</Text>
      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.alertCard}>
            <Text style={styles.alertTitle}>{item.title}</Text>
            <Text style={styles.alertDesc}>{item.description}</Text>
          </View>
        )}
      />

      {/* SOS Button */}
      {/* <TouchableOpacity style={styles.sosButton}>
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity> */}
      <SOSButton />

      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} />
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="home" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <Ionicons name="map" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Alerts")}>
          <MaterialCommunityIcons name="alert-circle" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person" size={28} color="#fff" />
        </TouchableOpacity>
      </View> */}

    </View>
    </SafeAreaView>
    </LinearGradient>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  // Top bar
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 250,
  },
  gradientOverlay: {
    flex: 1,
  },
  topBar: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15, // adds gap inside top bar
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  topBarTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  greeting: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginTop: 20,
    marginLeft: 30,
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 20,
    marginBottom: -60,
    flex: 1, 
    zIndex: 10,
  },
  card: {
    backgroundColor: "#1E2A38",
    width: "25%" ,
    flexDirection: "column",   // 👈 vertical instead of row
    alignItems: "center",      // center horizontally
    justifyContent: "center",
    padding: 16,
    paddingVertical: 20,
    marginBottom: 70,
    borderRadius: 12,
    marginHorizontal: 15, // adds spacing between cards
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardItemExpanded: {
    flex: 2, // Takes more space when expanded
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    flexDirection: "column",   // 👈 vertical instead of row
    alignItems: "center",      // center horizontally
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardSummary: {
    fontSize: 10,
    color: "#ccc",
    marginTop: 2,
  },
  cardDetails: {
    fontSize: 13,
    color: "#eee",
    marginTop: 5,
  },
  details: {
    marginTop: 10,
    alignItems: "center",
    color: "#1E2A38"
  },
  detailText: {
    fontSize: 12,
    color: "#ffffffff",
    marginVertical: 2,
  },
  sectionHead: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    paddingBottom: 100,
    marginLeft: 30,

  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    marginLeft: 30,
    marginVertical: 10,
  },
  alertCard: {
    backgroundColor: "#243447",
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 16,
    borderRadius: 12,
  },
  alertTitle: { color: "#fff", fontWeight: "700", marginBottom: 4 },
  alertDesc: { color: "#ccc", fontSize: 14 },

  sosButton: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FF3B30",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#FF3B30",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  sosText: { color: "#fff", fontSize: 24, fontWeight: "bold" },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1B2330",
    width: "100%",
    paddingVertical: 12,
  },
});
