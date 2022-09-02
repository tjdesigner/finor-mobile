import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../@types/navigation';
import { Profile } from '../screens'
import { TabRoutes } from './tab.routes'
import theme from '../global/styles/theme';

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
    return (
        <HomeStack.Navigator initialRouteName='Home'
            screenOptions={
                {
                    headerStyle: { backgroundColor: theme.colors.primary },
                    headerTintColor: 'black',
                    headerTransparent: true,

                }
            }
        >
            <HomeStack.Screen
                options={{ headerShown: false }}
                name='Home '
                component={TabRoutes}

            />
            <HomeStack.Screen
                name='Profile'
                component={Profile}
            />

            {/* <HomeStack.Screen
                name='Profile'
                component={Profile}
            /> */}
        </HomeStack.Navigator>
    )
}
