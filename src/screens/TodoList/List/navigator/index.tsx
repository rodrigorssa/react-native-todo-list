import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { appRoutes } from '../../../../navigation/routes';
import { List } from '../screens/List';


const Stack = createNativeStackNavigator();

export const ListNavigator = (props: any) => (
    <Stack.Navigator initialRouteName={'ListItem'} >
        <Stack.Screen
            name={appRoutes.Edit.name}
            component={appRoutes.Edit.component as any}
        />
        <Stack.Screen
            name={'ListItem'}
            component={List as any}
        />
    </Stack.Navigator>
)