import React, {useState} from "react";
import {SafeArea} from "../../../components/utility/safe-area.component";
import {RestaurantInfoCard} from "../components/restaurant-info-card.component";
import {List} from 'react-native-paper';
import {ScrollView} from "react-native";
import {Spacer} from "../../../components/spacer/spacer.component";
import {AuthButton} from "../../account/components/account.styles";
import {RevjuDetail} from "./revju-detail.screen";

export const RestaurantDetailScreen = ({route}) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    const {restaurant} = route.params;
    return (
        <SafeArea>
            <ScrollView>
            <RestaurantInfoCard restaurant={restaurant}/>

            <List.Accordion
                title="Utleie"
                left={(props) => <List.Icon {...props} icon="bread-slice"/>}
                expanded={breakfastExpanded}
                onPress={() => setBreakfastExpanded(!breakfastExpanded)}
            >
                <List.Item title="Innhold kommer"/>
                <List.Item title="Mer innhold her"/>
            </List.Accordion>

            <List.Accordion
                title="Naboer"
                left={(props) => <List.Icon {...props} icon="hamburger"/>}
                expanded={lunchExpanded}
                onPress={() => setLunchExpanded(!lunchExpanded)}
            >
                <List.Item title="Burger w/ Fries" />
                <List.Item title="Steak Sandwich" />
                <List.Item title="Mushroom Soup" />
            </List.Accordion>

            <List.Accordion
                title="Kjøkken"
                left={(props) => <List.Icon {...props} icon="food-variant"/>}
                expanded={dinnerExpanded}
                onPress={() => setDinnerExpanded(!dinnerExpanded)}
            >
                <List.Item title="Spaghetti Bolognese" />
                <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
                <List.Item title="Steak Frites" />
            </List.Accordion>
            <List.Accordion
                title="Bad"
                left={(props) => <List.Icon {...props} icon="cup" />}
                expanded={drinksExpanded}
                onPress={() => setDrinksExpanded(!drinksExpanded)}
            >
                <List.Item title="Coffee" />
                <List.Item title="Tea" />
                <List.Item title="Modelo" />
                <List.Item title="Coke" />
                <List.Item title="Fanta" />
            </List.Accordion>

            </ScrollView>
        </SafeArea>
    )
};