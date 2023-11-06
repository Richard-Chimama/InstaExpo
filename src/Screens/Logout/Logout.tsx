import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useAppContext } from "../../auth";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../ReduxStore/Theme";
import { RootState } from "../../ReduxStore";

const Logout = () => {
  const { dispatch } = useAppContext();
  const themeReducer = useDispatch();
  const Theme = useSelector((state:RootState)=> state.theme)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const handleThemeChange = ()=>{
      themeReducer(toggleTheme())
      console.log('isDarK:   ', Theme.isDark)
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <TouchableOpacity onPress={handleThemeChange}>
          <Text>click to toggle theme</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Logout;
