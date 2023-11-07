import { createStackNavigator } from '@react-navigation/stack';
import App from './App';

const Stack = createStackNavigator();

const RouteApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signin"
        component={App}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RouteApp;
