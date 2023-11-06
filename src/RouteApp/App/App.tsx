import React from "react";
import { View, Text, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import IonIcons from "@expo/vector-icons/Ionicons";
import * as S from "./styled";
import Screens from "../../Screens";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Feed = () => {
  const handlePlatform = () => {
    if (Platform.OS === "android") {
      return (
        <Drawer.Navigator
          initialRouteName="Feed"
          screenOptions={({ route }) => ({
            drawerIcon({ focused, size, color }) {
              let iconName;
              if (route.name == "Feed") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Feed2") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Feed3") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Logout") {
                iconName = focused ? "log-out" : "log-out-outline";
              }

              return (
                <IonIcons name={iconName as any} size={size} color={color} />
              );
            },
            headerShown: true,
            headerTitleAlign: "center",
          })}
        >
          <Drawer.Screen name="Feed" component={Screens.Feeds} />
          <Drawer.Screen name="Feed2" component={Screens.Feeds} />
          <Drawer.Screen name="Feed3" component={Screens.Feeds} />
          <Drawer.Screen name="Logout" component={Screens.Logout} />
        </Drawer.Navigator>
      );
    } else {
      return (
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              

              if (route.name === "Feed") {
                iconName = focused ? "home" : "home-outline";
                color = focused? 'black':'white'
              } else if (route.name === "Feed2") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
                  color = focused? 'black':'white'
              } else if (route.name === "Logout") {
                iconName = focused ? "log-out" : "log-out-outline";
                color = focused? 'black':'white'
              }

              return (
                <IonIcons name={iconName as any} size={size} color={color} />
              );
            },
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#fff',
            tabBarStyle: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: -35,
              height: 80,
              backgroundColor:"#2A9D8F",
              color: 'red'
            },
          })}
        >
          <Tab.Screen name="Feed" component={Screens.Feeds} />
          <Tab.Screen name="Post" component={Screens.CreatePost} />
          <Tab.Screen name="Logout" component={Screens.Logout} />
        </Tab.Navigator>
      );
    }
  };
  
  return (
    <S.Container>
      <StatusBar
        style={"dark"}
        hidden={Platform.OS === "android" ? true : false}
        backgroundColor="black"
      />
      {handlePlatform()}
    </S.Container>
  );
};

export default Feed;
