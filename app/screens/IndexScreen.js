import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import MapView, { Circle } from "react-native-maps";
//components
import PinPoint from "../components/PinPoint";

export default function IndexScreen({ courts, location }) {
	console.log("location index " + location.latitude, location.longitude);

	const loading = () => {
		return <Text>Loading....</Text>;
	};

	const loaded = () => {
		console.log("run loaded index");
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
					radius={700}
					strokeColor={"rgba(0,255,217,0.24)"}
					fillColor={"rgba(0,255,217,0.24)"}
				/>
			</MapView>
		);
	};

	return (
		<SafeAreaView style={styles.screenContainer}>
			<View>{location.latitude ? loaded() : loading()}</View>
			<View>
				<Text>TITLE HERE</Text>
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
		height: "100%",
	},
	map: {
		width: Dimensions.get("window").width,
		flex: 0.75,
	},
});
