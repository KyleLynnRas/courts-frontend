import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function SwitchContainer({ formData, setFormData }) {
	return (
		<View style={styles.container}>
			<View style={styles.switchContainer}>
				<Text style={styles.label}>Indoor</Text>
				<Switch
					ios_backgroundColor="rgba(164, 163, 163, 0.49)"
					keyboard="none"
					value={formData.indoor}
					onValueChange={() =>
						setFormData({ ...formData, indoor: !formData.indoor })
					}
				/>
			</View>
			<View style={styles.switchContainer}>
				<Text style={styles.label}>Fee</Text>
				<Switch
					ios_backgroundColor="rgba(164, 163, 163, 0.49)"
					value={formData.fee}
					onValueChange={() => setFormData({ ...formData, fee: !formData.fee })}
				/>
			</View>
			<View style={styles.switchContainer}>
				<Text style={styles.label}>Public</Text>
				<Switch
					ios_backgroundColor="rgba(164, 163, 163, 0.49)"
					value={formData.public}
					onValueChange={() =>
						setFormData({ ...formData, public: !formData.public })
					}
				/>
			</View>
			<View style={styles.switchContainer}>
				<Text style={styles.label}>Bathrooms</Text>
				<Switch
					ios_backgroundColor="rgba(164, 163, 163, 0.49)"
					value={formData.bathrooms}
					onValueChange={() =>
						setFormData({ ...formData, bathrooms: !formData.bathrooms })
					}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "90%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
		alignItems: "center",
		height: "30%",
	},
	switchContainer: {
		width: "45%",
		margin: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	label: {
		margin: 6,
		fontSize: 16,
		fontFamily: "Avenir Next",
	},
});
