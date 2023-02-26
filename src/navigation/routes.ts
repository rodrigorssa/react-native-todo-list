import { ListNavigator } from "../screens/TodoList/List/navigator";
import Create from "../screens/TodoList/Create";
import Update from "../screens/TodoList/Update";
import { ROUTE_NAMES, TAB_BAR_NAMES } from "../constant";

export const appRoutes = {
    [ROUTE_NAMES.APP_LIST]:{
        component: ListNavigator,
        name:ROUTE_NAMES.APP_LIST,
        options:{
            tabBarLabel: TAB_BAR_NAMES.APP_LIST,
            headerShown: false
        },
    },
    [ROUTE_NAMES.APP_FORM]:{
        component: Create,
        name:ROUTE_NAMES.APP_FORM,
        options:{
            tabBarLabel: TAB_BAR_NAMES.APP_FORM
        },
    },
    [ROUTE_NAMES.APP_EDIT]:{
        component: Update,
        name:ROUTE_NAMES.APP_EDIT,
        options:{
            tabBarLabel: ""
        },
    }
}