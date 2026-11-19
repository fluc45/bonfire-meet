import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import MeetingDetailsScreen from '../screens/MeetingDetails/MeetingDetailsScreen';
import BottomTabsNavigator from './BottomTabsNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#1A1A2E' },
        animation: 'slide_from_right',
      }}
    >
      {/* Auth screens */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ animation: 'slide_from_bottom' }}
      />

      {/* Main app (Bottom Tabs) */}
      <Stack.Screen name="Main" component={BottomTabsNavigator} />

      {/* Detail screens (presented on top of everything) */}
      <Stack.Screen
        name="MeetingDetails"
        component={MeetingDetailsScreen}
        options={{
          headerShown: true,
          headerTitle: 'Detalhes do Encontro',
          headerStyle: { backgroundColor: '#16213E' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '600' },
        }}
      />
    </Stack.Navigator>
  );
}
