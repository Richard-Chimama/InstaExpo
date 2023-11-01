import React from "react";
import { View, Text, Platform , StatusBar} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import IonIcons from "@expo/vector-icons/Ionicons";
import * as S from "./styled";
import Screens from '../../Screens';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Feed = () => {
  const handlePlatform = () => {
    if (Platform.OS === "android") {
      return (
        <Drawer.Navigator initialRouteName="Feed"
          screenOptions={({route})=>({
            drawerIcon({focused, size, color}) {
                let iconName;
                if(route.name == "Feed"){
                  iconName= focused ? 'home': 'home-outline'
                }else if (route.name === "Feed2") {
                  iconName = focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline";
                } else if (route.name === "Feed3") {
                  iconName = focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline";
                }else if(route.name === "Logout"){
                  iconName= focused? 'log-out': 'log-out-outline'
                }

                return (
                  <IonIcons
                    name={iconName as any}
                    size={size}
                    color={color}
                  />
                )
            },
            headerShown: true,
            headerTitleAlign: 'center',
                        
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
                iconName = focused
                  ? "home"
                  : "home-outline";
              } else if (route.name === "Feed2") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Logout") {
                iconName = focused
                  ? "log-out"
                  : "log-out-outline";
              }

              return (
                <IonIcons
                  name={iconName as any}
                  size={size}
                  color={color}
                />
              );
            },
            headerShown: false,
            tabBarStyle:{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: -35,
              height: 80,
            }
          }
          )}
        >
          <Tab.Screen name="Feed" component={Screens.Feeds} />
          <Tab.Screen name="Feed2" component={Screens.Feeds} />
          <Tab.Screen name="Logout" component={Screens.Logout} />
        </Tab.Navigator>
      );
    }
  };
  if (Platform.OS === "android") {
    StatusBar.setHidden(true)
  }else{
    StatusBar.setHidden(false)
  }
  return <S.Container>{handlePlatform()}</S.Container>;
};

export default Feed;
