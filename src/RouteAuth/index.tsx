import { createStackNavigator } from '@react-navigation/stack';
import Signin from "./Signin"
import Signup from './Signup'

const Stack = createStackNavigator();

function RouteAuth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin} options={{
            headerShown: false,
      }} />
      <Stack.Screen name="Signup" component={Signup} options={{
        headerShown: false,
      }} />
    </Stack.Navigator>
  );
}

export default RouteAuth