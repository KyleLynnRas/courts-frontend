import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function StarRating({ stars }) {
	return (
		<View style={styles.container}>
			{stars === 1 ? (
				<View style={styles.starContainer}>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
				</View>
			) : stars === 2 ? (
				<View style={styles.starContainer}>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
				</View>
			) : stars === 3 ? (
				<View style={styles.starContainer}>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
				</View>
			) : stars === 4 ? (
				<View style={styles.starContainer}>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
				</View>
			) : (
				<View style={styles.starContainer}>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
					<MaterialIcons
						name="stars"
						size={24}
						color="#94D169"
						style={styles.icon}
					/>
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
		padding: 10,
	},
	starContainer: {
		flexDirection: "row",
		justifyContent: "center",
		width: "50%",
	},
	icon: {
		marginLeft: 5,
		marginRight: 5,
	},
});
