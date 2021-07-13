import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
	return (
		<SafeAreaView>
			<Text>HOME SCREEN</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Index")}
			>
				<Text>Index</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "pink",
	},
});
