import * as React from "react";
import { Text, View, ViewStyle, StyleSheet, TextStyle, TextInput } from "react-native";
import { Color } from "../../colors";

export const ContactDetails = (props) => {
	const { container, avatarStyle, sectionHeaderStyle } = styles;
	const { firstName, lastName, email, phone } = props.route.params.contact;

	return (
		<View style={container}>
			<View style={avatarStyle} />
			<Text style={sectionHeaderStyle}>Main Information</Text>
			<DetailsRow label="First Name" data={firstName} />
			<DetailsRow label="Last Name" data={lastName} />
			<Text style={sectionHeaderStyle}>Sub Information</Text>
			<DetailsRow label="Email" data={email} />
			<DetailsRow label="Phone" data={phone} />
		</View>
	);
};

const DetailsRow = ({ label, data }): JSX.Element => {
	return (
		<View>
			<Text style={{ fontSize: 16 }}>{label}</Text>
			<TextInput
				style={{
					height: 20,
					borderColor: "rgb(200,200,200)",
					borderWidth: 1,
					borderRadius: 0.5,
					fontSize: 16,
				}}
				defaultValue={data}
			/>
		</View>
	);
};
interface Style {
	container: ViewStyle;
	avatarStyle: ViewStyle;
	sectionHeaderStyle: TextStyle;
}

const styles = StyleSheet.create<Style>({
	container: {
		flex: 1,
		alignItems: "center",
		paddingTop: 24,
		backgroundColor: "#fff",
	},
	avatarStyle: {
		width: 96,
		height: 96,
		borderRadius: 96 / 2,
		backgroundColor: Color.theme,
	},
	sectionHeaderStyle: {
		backgroundColor: "rgb(247,247,247)",
		alignSelf: "flex-start",
		width: "100%",
		marginTop: 24,
		paddingLeft: 20,
		fontWeight: "500",
		fontSize: 20,
	},
});
