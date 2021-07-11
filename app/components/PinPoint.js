import React from "react";
import { Text } from "react-native";
import { Marker, Callout } from "react-native-maps";

export default function PinPoint({ id, latitude, longitude, stars, title }) {
	return (
		<Marker
			id={id}
			coordinate={{ latitude: latitude, longitude: longitude }}
			pinColor="purple"
		>
			<Callout>
				<Text>{title}</Text>
				<Text>{stars} Stars</Text>
			</Callout>
		</Marker>
	);
}
