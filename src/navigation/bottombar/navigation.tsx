import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { appRoutes } from "../routes";

const { Navigator, Screen } = createBottomTabNavigator();
const screenOptions: any = {
    tabBarActiveTintColor: "#32264d",
    tabBarInactiveTintColor: "#c1bccc",
    tabBarActiveBackgroundColor: "#ebebf5",
    tabBarInactiveBackgroundColor: "#fafafc",
    tabBarLabelStyle: {
        fontSize: 13,
        position: "absolute",
        top: 15,
        bottom: 0,
        left: 0,
        right: 0
    },
    tabBarIconStyle: { display: "none" }
}

const currentRoutes = [
    appRoutes.List,
    appRoutes.Form,
]

const AppTab = () => (
    <NavigationContainer>
        <Navigator screenOptions={screenOptions}>
            {
                currentRoutes.map((item, index) => <Screen
                    name={item.name}
                    component={item.component as any}
                    options={item.options}
                    key={index}
                />)
            }
        </Navigator>
    </NavigationContainer>
)

export default AppTab