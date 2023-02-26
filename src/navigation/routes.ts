import { ListNavigator } from "../screens/TodoList/List";
import Create from "../screens/TodoList/Create";
import Update from "../screens/TodoList/Update";
import { ROUTE_NAMES, TAB_BAR_NAMES } from "../constant";
import { List } from "../screens/TodoList/List/screens/List";

export const appRoutes = {
    [ROUTE_NAMES.LIST_NAVIGATOR]:{
        component: ListNavigator,
        name:ROUTE_NAMES.LIST_NAVIGATOR,
        options:{
            tabBarLabel: TAB_BAR_NAMES.LIST_NAVIGATOR,
            headerShown: false
        },
        children:{
            [ROUTE_NAMES.LIST]:{
                component: List,
                name:ROUTE_NAMES.LIST,
                options:{
                    tabBarLabel: '',
                },
                children:{}
            },
            [ROUTE_NAMES.EDIT]:{
                component: Update,
                name:ROUTE_NAMES.EDIT,
                options:{
                    tabBarLabel: ""
                },
                children:{}
            }
        }
    },
    [ROUTE_NAMES.FORM]:{
        component: Create,
        name:ROUTE_NAMES.FORM,
        options:{
            tabBarLabel: TAB_BAR_NAMES.FORM
        },
        children:{}
    },
}