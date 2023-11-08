import React from 'react';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IonIcons from '@expo/vector-icons/Ionicons';
import * as S from './styled';
import Screens from '../../Screens';

enum IconName {
  Home = 'home',
  HomeOutline = 'home-outline',
  InformationCircle = 'ios-information-circle',
  InformationCircleOutline = 'ios-information-circle-outline',
  Logout = 'log-out',
  LogoutOutline = 'log-out-outline',
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Feed = () => {
  const handlePlatform = () => {
    if (Platform.OS === 'android') {
      return (
        <Drawer.Navigator
          initialRouteName="Feed"
          screenOptions={({ route }) => ({
            drawerIcon({ focused, size, color }) {
              let iconName: IconName = IconName.Home;
              if (route.name == 'Feed') {
                iconName = focused ? IconName.Home : IconName.HomeOutline;
              } else if (route.name === 'Post') {
                iconName = focused
                  ? IconName.InformationCircle
                  : IconName.InformationCircleOutline;
              } else if (route.name === 'Logout') {
                iconName = focused ? IconName.Logout : IconName.LogoutOutline;
              }

              return <IonIcons name={iconName} size={size} color={color} />;
            },
            headerShown: true,
            headerTitleAlign: 'center',
          })}
        >
          <Drawer.Screen name="Feed" component={Screens.Feeds} />
          <Drawer.Screen name="Post" component={Screens.CreatePost} />
          <Drawer.Screen name="Logout" component={Screens.Logout} />
        </Drawer.Navigator>
      );
    } else {
      return (
        <Tab.Navigator
          initialRouteName="Feed"

          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: IconName = IconName.Home;

              if (route.name === 'Feed') {
                iconName = focused ? IconName.Home : IconName.HomeOutline;
                color = focused ? 'black' : 'white';
              } else if (route.name === 'Post') {
                iconName = focused
                  ? IconName.InformationCircle
                  : IconName.InformationCircleOutline;
                color = focused ? 'black' : 'white';
              } else if (route.name === 'Logout') {
                iconName = focused ? IconName.Logout : IconName.LogoutOutline;
                color = focused ? 'black' : 'white';
              }

              return <IonIcons name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#fff',
            tabBarStyle: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: -35,
              height: 80,
              backgroundColor: '#2A9D8F',
            },
            tabBarHideOnKeyboard: true,
          })}
        >
          <Tab.Screen name="Feed" component={Screens.Feeds} />
          <Tab.Screen name="Post" component={Screens.CreatePost} options={{
            tabBarStyle:{display:'none'}
          }}/>
          <Tab.Screen name="Logout" component={Screens.Logout} />
        </Tab.Navigator>
      );
    }
  };

  return (
    <S.Container>
      <StatusBar
        style={'auto'}
        hidden={Platform.OS === 'android' ? true : false}
        backgroundColor="white"
      />
      {handlePlatform()}
    </S.Container>
  );
};

export default Feed;
