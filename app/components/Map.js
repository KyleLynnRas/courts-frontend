import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map({ court, id }) {
	return (
		<MapView
			style={styles.map}
			initialRegion={{
				latitude: court.latitude,
				longitude: court.longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
			provider="google"
		>
			<Marker
				id={id}
				coordinate={{ latitude: court.latitude, longitude: court.longitude }}
				pinColor="orange"
			></Marker>
		</MapView>
	);
}

const styles = StyleSheet.create({
	map: {
		width: Dimensions.get("window").width,
		flex: 0.6,
	},
});
