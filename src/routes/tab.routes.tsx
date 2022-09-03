import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import { RootStackParamList } from '../@types/navigation'
import { Moviments, Home } from '../screens'
import theme from '../global/styles/theme';
import { Platform } from 'react-native';


const HomeTab = createBottomTabNavigator<RootStackParamList>();

export function TabRoutes() {
    return (
        <HomeTab.Navigator initialRouteName='Home'
            screenOptions={
                {
                    headerShown: true,
                    tabBarActiveTintColor: theme.colors.white,
                    tabBarInactiveTintColor: theme.colors.primaryStrong,
                    headerStyle: { backgroundColor: theme.colors.primary },
                    headerTintColor: 'black',
                    headerTransparent: true,
                    tabBarLabelStyle: { fontSize: 14, paddingVertical: 8 },
                    tabBarStyle: { backgroundColor: theme.colors.primary, borderTopWidth: 0, height: Platform.OS === 'android' ? 68 : 96, paddingTop: 8 }

                }
            }
        >
            <HomeTab.Screen

                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    headerTitle: 'asdf',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    )
                }}
            />

            <HomeTab.Screen
                name='Moviments'
                component={Moviments}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="monetization-on" color={color} size={size} />
                    )
                }}
            />
        </HomeTab.Navigator>
    )
}