import * as React from "react";
import { FlatList, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Color } from "../../colors";
import { data } from "../../data/data";

export const ContactList = ({ navigation }) => {
	const { itemStyle, avatarStyle, itemContainerStyle, listItemSeparatorStyle } = styles;
	return (
		<FlatList
			data={data}
			renderItem={({ item }) => (
				<View style={itemContainerStyle}>
					<View style={avatarStyle} />
					<Text style={itemStyle} onPress={() => navigation.navigate("ContactDetails")}>
						{`${item.firstName} ${item.lastName}`}
					</Text>
				</View>
			)}
			ItemSeparatorComponent={() => {
				return <View style={listItemSeparatorStyle} />;
			}}
			keyExtractor={(item) => item.id}
		/>
	);
};

interface Style {
	avatarStyle: ViewStyle;
	itemContainerStyle: ViewStyle;
	itemStyle: ViewStyle;
	listItemSeparatorStyle: ViewStyle;
}

const styles = StyleSheet.create<Style>({
	avatarStyle: {
		width: 64,
		height: 64,
		borderRadius: 64 / 2,
		backgroundColor: Color.theme,
	},
	itemContainerStyle: {
		height: "auto",
		flex: 1,
		flexDirection: "row",
		paddingHorizontal: 12,
		paddingVertical: 6,
		backgroundColor: "#fff",
	},
	itemStyle: {
		alignSelf: "center",
		fontSize: 18,
		padding: 15,
		color: "#000",
	},
	listItemSeparatorStyle: {
		height: 0.5,
		width: "100%",
		backgroundColor: "#C8C8C8",
	},
});
