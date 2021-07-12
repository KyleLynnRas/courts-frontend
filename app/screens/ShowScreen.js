import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ShowScreen({ navigation }) {
	return (
		<SafeAreaView>
			<Text>SHOW SCREEN</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Home")}
			>
				<Text>HOME</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "pink",
	},
});
