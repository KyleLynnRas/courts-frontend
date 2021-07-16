import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Feature({ text }) {
	return (
		<View style={styles.feature}>
			<FontAwesome5
				name="table-tennis"
				size={24}
				color="black"
				style={styles.icon}
			/>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	feature: {
		flexDirection: "row",
		width: "70%",
		margin: 10,
		fontFamily: "Avenir Next",
	},
	icon: {
		marginRight: 15,
	},
	text: {
		fontFamily: "Avenir Next",
		fontSize: 17,
	},
});
