import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import "react-native-gesture-handler";
import { ContactDetails } from "./src/pages/ContactDetails";
import { ContactList } from "./src/pages/ContactList";

const defaultHeaderStyle = {
	backgroundColor: "rgb(249,249,249)",
	borderBottomWidth: 1,
	borderBottomColor: "rgb(215,215,215)",
};
const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="ContactList"
					component={ContactList}
					options={{
						title: "Contacts",
						headerStyle: defaultHeaderStyle,
					}}
				/>
				<Stack.Screen
					name="ContactDetails"
					component={ContactDetails}
					options={{
						// title: "Contacts",
						headerStyle: defaultHeaderStyle,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
