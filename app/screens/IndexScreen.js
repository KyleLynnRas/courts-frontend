import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import MapView, { Circle } from "react-native-maps";
//components
import PinPoint from "../components/PinPoint";
import NavBtn from "../components/NavBtn";

export default function IndexScreen({ location, courts, navigation }) {
	// console.log(courts, location.latitude, location.longitude)

	const loading = () => {
		return <Text>Loading....</Text>;
	};

	// const loaded = () => {
	// 	return (
	// 		<MapView
	// 			style={styles.map}
	// 			initialRegion={{
	// 				latitude: location.latitude,
	// 				longitude: location.longitude,
	// 				latitudeDelta: 0.0922,
	// 				longitudeDelta: 0.0421,
	// 			}}
	// 			provider="google"
	// 		>
	// 			{courts.map((c) => {
	// 				return (
	// 					<PinPoint
	// 						key={c.id}
	// 						id={c.id}
	// 						latitude={c.latitude}
	// 						longitude={c.longitude}
	// 						stars={c.stars}
	// 						title={c.title}
	// 					/>
	// 				);
	// 			})}
	// 			<Circle
	// 				center={location}
	// 				radius={700}
	// 				strokeColor={"rgba(0,255,217,0.24)"}
	// 				fillColor={"rgba(0,255,217,0.24)"}
	// 			/>
	// 		</MapView>
	// 	);
	// };

	return (
		<SafeAreaView style={styles.screenContainer}>
			<View>{loading()}</View>
			{/* <View>{location.latitude ? loaded() : loading()}</View> */}
			<View>
				<Text>TITLE HERE</Text>
			</View>
			<NavBtn text="Add a court" screen="New" />
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
