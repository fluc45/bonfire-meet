import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import FeedScreen from '../screens/Feed/FeedScreen';
import CreateMeetingScreen from '../screens/CreateMeeting/CreateMeetingScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Feed: { focused: 'flame', unfocused: 'flame-outline' },
  CreateMeeting: { focused: 'add-circle', unfocused: 'add-circle-outline' },
  Profile: { focused: 'person', unfocused: 'person-outline' },
};

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const icons = TAB_ICON[route.name];
          const iconName = focused ? icons.focused : icons.unfocused;
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF6B35',
        tabBarInactiveTintColor: '#888899',
        tabBarStyle: {
          backgroundColor: '#16213E',
          borderTopColor: '#0F3460',
          borderTopWidth: 1,
          paddingTop: 8,
          paddingBottom: 12,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{ tabBarLabel: 'Encontros' }}
      />
      <Tab.Screen
        name="CreateMeeting"
        component={CreateMeetingScreen}
        options={{ tabBarLabel: 'Criar' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}
