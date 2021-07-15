import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Dimensions,
	ImageBackground,
} from "react-native";
import MapView, { Circle } from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";
//components
import PinPoint from "../components/PinPoint";
import NavBtn from "../components/NavBtn";
import Feature from "../components/Feature";

export default function IndexScreen({ location, courts, navigation }) {
	const loading = () => {
		return <Text>Loading....</Text>;
	};

	const loaded = () => {
		return (
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: location.latitude,
					longitude: location.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				provider="google"
			>
				{/* <Text style={styles.title}>App Title Here</Text> */}
				{courts.map((c) => {
					return (
						<PinPoint
							key={c.id}
							id={c.id}
							latitude={c.latitude}
							longitude={c.longitude}
							stars={c.stars}
							title={c.title}
						/>
					);
				})}
				<Circle
					center={location}
					radius={1000}
					strokeColor={"rgba(203, 149, 220, 0.28)"}
					fillColor={"rgba(203, 149, 220, 0.28)"}
				/>
			</MapView>
		);
	};

	const image = { uri: "https://i.imgur.com/957R9xH.jpg" };

	return (
		<SafeAreaView style={styles.screenContainer}>
			<Text style={styles.title}>App Title Here</Text>
			<View style={styles.mapContainer}>
				{location.latitude ? loaded() : loading()}
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
						colors={["rgba(255, 255, 255, 0.86)", "rgba(255, 255, 255, 0.86)"]}
					>
						<View style={styles.textContainer}>
							<Text style={styles.tagline}>
								Keep track of pickleball courts near you, and see what others
								are saying.
							</Text>
							<View style={styles.featureContainer}>
								<Feature text="Find courts nearby" />
								<Feature text="Add a review" />
							</View>
							<NavBtn
								text="Add a court"
								screen="New"
								style={styles.newBtn}
								textStyle={styles.btnText}
							/>
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
		alignItems: "center",
		height: "100%",
		width: "100%",
		justifyContent: "flex-start",
	},
	mapContainer: {
		flex: 0.55,
	},
	map: {
		width: Dimensions.get("window").width,
		flex: 1,
		height: "60%",
	},
	border: {
		width: "100%",
		height: 20,
		backgroundColor: "rgba(172, 172, 172, 0.61)",
	},
	imageBackground: {
		width: "100%",
		height: "100%",
	},
	gradient: {
		height: "100%",
		alignItems: "center",
		justifyContent: "space-around",
	},
	contentContainer: {
		width: "100%",
		height: "100%",
		flex: 0.45,
	},
	textContainer: {
		flex: 0.95,
		padding: 10,
		alignItems: "center",
		justifyContent: "space-around",
	},
	title: {
		fontSize: 40,
		fontFamily: "AvenirNext-Medium",
		textAlign: "center",
		backgroundColor: "rgba(0, 95, 151, 0.3)",
		padding: 6,
		width: "100%",
	},
	tagline: {
		textAlign: "center",
		fontFamily: "Avenir Next",
		fontSize: 18,
		marginTop: -10,
	},
	featureContainer: {
		justifyContent: "center",
		alignItems: "flex-start",
	},
	newBtn: {
		backgroundColor: "rgb( 204, 148, 222)",
		padding: 11,
		width: "40%",
		borderRadius: 21,
		justifyContent: "center",
		fontFamily: "Avenir Next",
	},
	btnText: {
		fontFamily: "Avenir Next",
	},
});
