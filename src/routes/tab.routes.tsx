import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import { RootStackParamList } from '../@types/navigation'
import { Moviments, Home, Profile } from '../screens'
import theme from '../global/styles/theme';
import { Platform, View } from 'react-native';
import { ANDROID } from '../utils';


const HomeTab = createBottomTabNavigator<RootStackParamList>();

export function TabRoutes() {
    return (
        <HomeTab.Navigator initialRouteName='Home'
            sceneContainerStyle={{ backgroundColor: theme.colors.primary, marginTop: ANDROID ? 24 : 0 }}
            screenOptions={
                {
                    headerShown: true,
                    tabBarActiveTintColor: theme.colors.white,
                    tabBarInactiveTintColor: theme.colors.tertiary,
                    headerStyle: { backgroundColor: theme.colors.primary },
                    headerTintColor: theme.colors.white,
                    headerTransparent: true,
                    tabBarLabelStyle: { fontSize: 1, paddingVertical: 8, },
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: theme.colors.primary, borderTopWidth: 0, height: Platform.OS === 'android' ? 68 : 96, paddingTop: 8 }
                }
            }
        >
            <HomeTab.Screen
                name='Profile'
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialIcons name="person" color={color} size={focused ? 32 : size} />
                    )
                }}
            />

            <HomeTab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{
                            marginBottom: 76,
                            height: 50,
                            width: 50,
                            backgroundColor: theme.colors.white,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 100,
                            borderWidth: 2,
                            borderColor: theme.colors.primary,
                        }}>
                            <MaterialIcons name="home" color={focused ? theme.colors.primary : color} size={focused ? 32 : size} />
                        </View>
                    )
                }}
            />

            <HomeTab.Screen
                name='Moviments'
                component={Moviments}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialIcons name="monetization-on" color={color} size={focused ? 32 : size} />
                    )
                }}
            />
        </HomeTab.Navigator>
    )
}