import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import {RestaurantsScreen} from "../../features/restaurants/screens/restaurants.screen";
import {RestaurantDetailScreen} from "../../features/restaurants/screens/restaurant-detail.screen";
import {RevjuDetail} from "../../features/restaurants/screens/revju-detail.screen";



const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator  screenOptions={{headerShown: false,
            ...TransitionPresets.ModalPresentationIOS

        }} >
            <RestaurantStack.Screen
                name="Restaurant"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
            <RestaurantStack.Screen
                name="RevjuDetail"
                component={RevjuDetail}
            />

        </RestaurantStack.Navigator>
    );
};