import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Share } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import BottomNav from "./Helpers/BottomNav";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import SOSButton from "./Helpers/SOS";

export default function MapsScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  const handleShare = async () => {
    if (!location) return;
    const message = `📍 My current location: https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
    await Share.share({
      message,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="You are here"
          />
        </MapView>
      )}
      <SOSButton />
      <TouchableOpacity style={styles.fab} onPress={handleShare}>
        <Text style={styles.fabText}>Share</Text>
      </TouchableOpacity>
      <BottomNav navigation={navigation} />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  fab: {
    position: "absolute",
    bottom: 100,
    right: 20,
    backgroundColor: "#E63946",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5,
  },
  fabText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  
});