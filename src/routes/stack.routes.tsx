import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../@types/navigation';
import { Profile, MovimentItems, AddListForm } from '../screens'
import { TabRoutes } from './tab.routes'
import theme from '../global/styles/theme';

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
    return (
        <HomeStack.Navigator initialRouteName='Home'
            screenOptions={
                {
                    headerStyle: { backgroundColor: theme.colors.primary, },
                    headerTintColor: 'black',
                    headerTransparent: true,
                    headerTitle: ''
                }
            }
        >
            <HomeStack.Screen
                options={{ headerShown: false, title: 'Home' }}
                name='Home '
                component={TabRoutes}

            />

            <HomeStack.Screen
                options={{ headerTitle: 'Profile' }}
                name='Profile'
                component={Profile}
            />

            <HomeStack.Screen
                options={{ headerTitle: 'AddListForm' }}
                name='AddListForm'
                component={AddListForm}
            />

            <HomeStack.Screen
                name='MovimentItems'
                component={MovimentItems}
                options={{ headerTitle: 'List Items' }}
            />
        </HomeStack.Navigator>
    )
}
