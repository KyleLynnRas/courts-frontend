import React from "react";
import { Text } from "react-native";
import { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

export default function PinPoint({ id, latitude, longitude, stars, title }) {
	//nav prop
	const navigation = useNavigation();

	return (
		<Marker
			id={id}
			coordinate={{ latitude: latitude, longitude: longitude }}
			pinColor="purple"
		>
			{/*link to show and pass id in params  */}
			<Callout onPress={() => navigation.navigate("Show", { id: id })}>
				<Text>{title}</Text>
				<Text>{stars} Stars</Text>
			</Callout>
		</Marker>
	);
}
