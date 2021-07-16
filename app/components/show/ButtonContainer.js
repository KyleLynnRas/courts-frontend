import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ButtonContainer({ handleChange, id }) {
	//nav prop
	const navigation = useNavigation();

	return (
		<View style={styles.btnContainer}>
			<TouchableOpacity onPress={handleChange} style={styles.button}>
				<Text style={styles.text}>Delete</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate("Edit", { id: id })}
				style={styles.button}
			>
				<Text style={styles.text}>Edit</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	btnContainer: {
		marginTop: 10,
		marginBottom: 30,
		flexDirection: "row",
		width: "60%",
		justifyContent: "space-around",
	},
	button: {
		backgroundColor: "rgba(148, 209, 105, 0.84)",
		padding: 11,
		width: "40%",
		borderRadius: 21,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontFamily: "Avenir Next",
		fontWeight: "600",
	},
});
