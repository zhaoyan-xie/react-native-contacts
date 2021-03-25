import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import "react-native-gesture-handler";
import { ContactDetails } from "./src/pages/ContactDetails";
import { ContactList } from "./src/pages/ContactList";

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="ContactList" component={ContactList} options={{ title: "Contacts" }} />
				<Stack.Screen name="ContactDetails" component={ContactDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
