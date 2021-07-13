import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function StarRating({ court }) {
	return (
		<View style={styles.container}>
			{court.stars === 1 ? (
				<View style={styles.starContainer}>
					<MaterialIcons name="stars" size={24} color="black" />
				</View>
			) : court.stars === 2 ? (
				<View style={styles.starContainer}>
					<MaterialIcons name="stars" size={24} color="black" />
					<MaterialIcons name="stars" size={24} color="black" />
				</View>
			) : court.stars === 3 ? (
				<View style={styles.starContainer}>
					<MaterialIcons name="stars" size={24} color="black" />
					<MaterialIcons name="stars" size={24} color="black" />
					<MaterialIcons name="stars" size={24} color="black" />
				</View>
			) : court.stars === 4 ? (
				<View style={styles.starContainer}>
					<MaterialIcons name="stars" size={24} color="black" />
					<MaterialIcons name="stars" size={24} color="black" />
					<MaterialIcons name="stars" size={24} color="black" />
					<MaterialIcons name="stars" size={24} color="black" />
				</View>
			) : (
				<View style={styles.starContainer}>
					<MaterialIcons name="stars" size={24} color="black" />
					<MaterialIcons name="stars" size={24} color="black" />
					<MaterialIcons name="stars" size={24} color="black" />
					<MaterialIcons name="stars" size={24} color="black" />
					<MaterialIcons name="stars" size={24} color="black" />
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		borderColor: "pink",
		borderWidth: 4,
		padding: 10,
	},
	starContainer: {
		flexDirection: "row",
	},
});
