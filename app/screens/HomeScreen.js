import React from "react";
import {
	Text,
	SafeAreaView,
	StyleSheet,
	ImageBackground,
	View,
} from "react-native";
//components
import NavBtn from "../components/NavBtn";

const image = { uri: "https://i.imgur.com/8I9D4EQ.jpg" };

export default function HomeScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={image}
				resizeMode="cover"
				style={styles.background}
			>
				<View style={styles.content}>
					<Text style={styles.text}>WELCOME</Text>
					<NavBtn
						style={styles.button}
						screen="Index"
						text="Get started"
						textStyle={styles.btnText}
					/>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
	},
	background: {
		flex: 1,
		width: "100%",
		alignItems: "center",
	},
	content: {
		flex: 0.5,
		justifyContent: "space-between",
		alignItems: "center",
	},
	text: {
		color: "#fff",
		fontSize: 50,
		marginTop: 50,
		fontWeight: "bold",
		fontFamily: "Avenir",
	},
	button: {
		backgroundColor: "rgba(234, 234, 234, 0.66)",
		padding: 18,
		borderRadius: 25,
		width: "40%",
	},
	btnText: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
