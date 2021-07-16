import React from "react";
import { Text, StyleSheet } from "react-native";
import { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import StarRating from "../StarRating";

export default function PinPoint({ id, latitude, longitude, stars, title }) {
	//nav prop
	const navigation = useNavigation();

	return (
		<Marker
			id={id}
			coordinate={{ latitude: latitude, longitude: longitude }}
			pinColor="limegreen"
		>
			{/*link to show and pass id in params  */}
			<Callout
				style={styles.callout}
				onPress={() => navigation.navigate("Show", { id: id, title: title })}
			>
				<Text style={styles.text}>{title}</Text>
				<StarRating stars={stars} />
			</Callout>
		</Marker>
	);
}

const styles = StyleSheet.create({
	text: {
		fontFamily: "AvenirNext-Medium",
		fontSize: 15,
		textAlign: "center",
		marginTop: 5,
		padding: 6,
	},
});
