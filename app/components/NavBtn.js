import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NavBtn({ screen, text }) {
	//nav prop
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => navigation.navigate(screen)}
		>
			<Text>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "pink",
	},
});
