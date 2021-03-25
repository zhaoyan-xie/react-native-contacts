import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Text } from "react-native";
import "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Color } from "./src/colors";
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
						headerLeft: () => (
							<TouchableOpacity style={{ marginLeft: 12 }}>
								<Text style={{ color: Color.theme }}>Search</Text>
							</TouchableOpacity>
						),
						headerRight: () => (
							<TouchableOpacity style={{ marginRight: 12 }}>
								<Text style={{ color: Color.theme }}>Add</Text>
							</TouchableOpacity>
						),
					}}
				/>
				<Stack.Screen
					name="ContactDetails"
					component={ContactDetails}
					options={{
						title: null,
						headerStyle: defaultHeaderStyle,
						headerLeft: ({ onPress: goBack }) => (
							<TouchableOpacity style={{ marginLeft: 12 }} onPress={goBack}>
								<Text style={{ color: Color.theme }}>Cancel</Text>
							</TouchableOpacity>
						),
						headerRight: () => (
							<TouchableOpacity style={{ marginRight: 12 }}>
								<Text style={{ color: Color.theme }}>Save</Text>
							</TouchableOpacity>
						),
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
