import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ShowScreen({ navigation, route, courts }) {
	const id = route.params.id;
	//courts
	const court = courts.find((c) => c.id === id);
	// console.log(court.title);

	return (
		<SafeAreaView>
			<Text>
				{court.title} id: {id}
			</Text>
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
