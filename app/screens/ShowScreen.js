import React from "react";
import {
	Text,
	SafeAreaView,
	View,
	StyleSheet,
	ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//components
import StarRating from "../components/StarRating";
import Map from "../components/show/Map";
import IconContainer from "../components/show/IconContainer";
import ButtonContainer from "../components/show/ButtonContainer.js";

const image = { uri: "https://i.imgur.com/957R9xH.jpg" };

export default function ShowScreen({
	navigation,
	route,
	courts,
	destroyCourt,
}) {
	const id = route.params.id;
	//courts
	const court = courts.find((c) => c.id === id);

	//destroy btn
	const handleChange = () => {
		destroyCourt(id);
		//redirect to index
		navigation.navigate("Index");
	};

	return (
		<SafeAreaView style={styles.screenContainer}>
			<View style={styles.mapContainer}>
				<Map court={court} id={id} />
			</View>
			<View style={styles.border}></View>
			<View style={styles.contentContainer}>
				<ImageBackground
					resizeMode="cover"
					style={styles.imageBackground}
					source={image}
				>
					<LinearGradient
						style={styles.gradient}
						colors={["rgba(255, 255, 255, 0.83)", "rgba(91, 165, 195, 0.41)"]}
					>
						<View style={styles.textContainer}>
							<StarRating stars={court.stars} />
							<Text style={styles.address}>{court.street}</Text>
							<IconContainer court={court} />
						</View>
						<ButtonContainer handleChange={handleChange} id={id} />
					</LinearGradient>
				</ImageBackground>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	mapContainer: {
		flex: 0.4,
	},
	border: {
		width: "100%",
		height: 6,
		backgroundColor: "#0E1E47",
	},
	contentContainer: {
		width: "100%",
		flex: 0.6,
		justifyContent: "center",
	},
	imageBackground: {
		height: "100%",
		width: "100%",
	},
	gradient: {
		justifyContent: "flex-start",
		alignItems: "center",
		height: "100%",
		width: "100%",
	},
	textContainer: {
		marginTop: 15,
		padding: 3,
		width: "85%",
		height: "80%",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "rgba(255, 255, 255, 0.57)",
	},
	address: {
		fontFamily: "Avenir Next",
		fontSize: 18,
		marginTop: 5,
		marginBottom: 8,
		fontWeight: "600",
		width: "100%",
		textAlign: "center",
	},
});
