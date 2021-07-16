import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Dimensions,
	ImageBackground,
	ActivityIndicator,
} from "react-native";
import MapView, { Circle } from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";
//components
import PinPoint from "../components/index/PinPoint";
import NavBtn from "../components/NavBtn";
import Feature from "../components/index/Feature";

export default function IndexScreen({ location, courts, navigation }) {
	const loading = () => {
		return (
			<ActivityIndicator size="large" color="#0E1E47" style={styles.loading} />
		);
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
					strokeColor={"rgba(107, 145, 250, 0.3)"}
					fillColor={"rgba(107, 145, 250, 0.3)"}
				/>
			</MapView>
		);
	};

	const image = { uri: "https://i.imgur.com/957R9xH.jpg" };

	return (
		<SafeAreaView style={styles.screenContainer}>
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
						colors={["rgba(255, 255, 255, 0.83)", "rgba(91, 165, 195, 0.41)"]}
					>
						<View style={styles.textContainer}>
							<Text style={styles.tagline}>
								Keep track of pickleball courts near you, and see what others
								are saying.
							</Text>
							<View style={styles.featureContainer}>
								<Feature text="Find nearby courts" />
								<Feature text="Add your own review" />
							</View>
						</View>
						<NavBtn
							text="Add a court"
							screen="New"
							style={styles.newBtn}
							textStyle={styles.btnText}
						/>
					</LinearGradient>
				</ImageBackground>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		width: "100%",
	},
	screenContainer: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		height: "100%",
		width: "100%",
		justifyContent: "flex-start",
	},
	mapContainer: {
		flex: 0.45,
	},
	map: {
		width: Dimensions.get("window").width,
		flex: 1,
		height: "60%",
	},
	border: {
		width: "100%",
		height: 6,
		backgroundColor: "#0E1E47",
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
		flex: 0.55,
	},
	textContainer: {
		marginTop: 10,
		backgroundColor: "rgba(255, 255, 255, 0.57)",
		flex: 0.85,
		padding: 10,
		width: "85%",
		height: "30%",
		alignItems: "center",
		justifyContent: "center",
	},
	tagline: {
		textAlign: "center",
		fontFamily: "Avenir Next",
		fontSize: 19,
		marginTop: -10,
		marginBottom: 10,
		fontWeight: "500",
	},
	featureContainer: {
		justifyContent: "center",
		alignItems: "flex-start",
	},
	newBtn: {
		backgroundColor: "rgba(148, 209, 105, 0.84)",
		padding: 11,
		width: "30%",
		borderRadius: 21,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
	},
	btnText: {
		fontFamily: "AvenirNext-Medium",
		fontWeight: "600",
		fontSize: 15,
	},
});
