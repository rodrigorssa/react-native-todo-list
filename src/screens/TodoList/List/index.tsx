import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { appRoutes } from '../../../navigation/routes';


const Stack = createNativeStackNavigator();

export const ListNavigator = (props: any) => (
    <Stack.Navigator initialRouteName={appRoutes.ListNavigator.children.List.name} >
        <Stack.Screen
            name={appRoutes.ListNavigator.children.Edit.name}
            component={appRoutes.ListNavigator.children.Edit.component as any}
        />
        <Stack.Screen
            name={appRoutes.ListNavigator.children.List.name}
            component={appRoutes.ListNavigator.children.List.component as any}
        />
    </Stack.Navigator>
)