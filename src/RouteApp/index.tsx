import { createStackNavigator } from '@react-navigation/stack';
import Feed from './App';


const Stack = createStackNavigator();

const RouteApp = ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Feed} options={{
            headerShown: false,
      }} />
    </Stack.Navigator>
  );
}

export default RouteApp