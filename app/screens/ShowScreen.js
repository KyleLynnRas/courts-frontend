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
			<View style={styles.header}>
				<Text style={styles.title}>{court.title}</Text>
				<StarRating stars={court.stars} />
			</View>
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
							<Text style={styles.address}>{court.street}</Text>
							<IconContainer court={court} />
							<ButtonContainer handleChange={handleChange} id={id} />
						</View>
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
	header: {
		backgroundColor: "#0E1E47",
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
	},
	title: {
		fontSize: 40,
		fontFamily: "AvenirNext-Medium",
		textAlign: "center",
		backgroundColor: "#0E1E47",
		width: "100%",
		color: "#fff",
		fontWeight: "bold",
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
		height: "100%",
		width: "100%",
	},
	textContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	address: {
		fontFamily: "Avenir Next",
		fontSize: 19,
		marginTop: 15,
		marginBottom: 10,
		fontWeight: "bold",
	},
});
