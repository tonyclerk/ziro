import React, { useState } from 'react';
import { FlatList, Dimensions, View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Slide1 from './components/slide1';
import Slide2 from './components/slide2';
import Slide3 from './components/slide3';
import Slide4 from './components/slide4';
import ZiroLoginScreen from './components/ZiroLoginScreen';
import ZiroSignUpScreen from './components/ZiroSignUpScreen';
import HomeScreen from './components/HomeScreen';
import MapsScreen from './components/maps';
import ProfileScreen from './components/profile';

const slides = [Slide1, Slide2, Slide3, Slide4];
const { width } = Dimensions.get('window');
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderSlide = ({ item: SlideComponent }) => <SlideComponent />;

  return (
    <>
    <FlatList
      data={slides}
      renderItem={renderSlide}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={(event) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentSlide(slideIndex);
      }}
    />


    <View style={styles.dotsContainer}>
      {slides.map((_, i) => (
        <View
          key={i}
          style={[styles.dot, currentSlide === i && styles.activeDot]}
        />
      ))}
    </View>
    </>
  );
  
}
function HomeWithDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeMain" component={HomeScreen} />
      <Drawer.Screen name="SOS" component={MapsScreen} />
      <Drawer.Screen name="Status" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function app(){
  return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={ZiroLoginScreen} />
        <Stack.Screen name="Register" component={ZiroSignUpScreen} />
        <Stack.Screen name="Home" component={HomeWithDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="Map" component={MapsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
    width: "100%",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#888",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#fff",
  },
});