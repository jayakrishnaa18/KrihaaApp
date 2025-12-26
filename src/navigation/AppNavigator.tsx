import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ArticleScreen from '../screens/ArticleScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#dc2626',
        tabBarInactiveTintColor: '#6b7280',
        headerStyle: { backgroundColor: '#dc2626' },
        headerTintColor: '#fff',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Politics" component={() => <CategoryScreen category="politics" />} />
      <Tab.Screen name="Sports" component={() => <CategoryScreen category="sports" />} />
      <Tab.Screen name="Movies" component={() => <CategoryScreen category="movies" />} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={TabNavigator} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Article" 
          component={ArticleScreen}
          options={{ 
            headerStyle: { backgroundColor: '#dc2626' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
