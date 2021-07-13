import React from "react";
import {
	Text,
	SafeAreaView,
	View,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import {
	FontAwesome5,
	FontAwesome,
	MaterialIcons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
//components
import StarRating from "../components/StarRating";
import SwitchIcon from "../components/SwitchIcon";
import NavBtn from "../components/NavBtn";
import Map from "../components/Map";
import LevelIcon from "../components/LevelIcon";

export default function ShowScreen({
	navigation,
	route,
	courts,
	destroyCourt,
}) {
	const id = route.params.id;
	//courts
	const court = courts.find((c) => c.id === id);
	// console.log(court.title);

	//destroy btn
	const handleChange = () => {
		destroyCourt(id);
		//redirect to index
		navigation.navigate("Index");
	};

	return (
		<SafeAreaView style={styles.screenContainer}>
			<Map court={court} id={id} />
			<Text>
				{court.title} id: {id}
			</Text>
			<StarRating court={court} />
			<View style={styles.iconContainer}>
				<SwitchIcon
					condition={court.indoor}
					text1="Indoor"
					text2="Outdoor"
					icon1={<FontAwesome5 name="warehouse" size={24} color="black" />}
					icon2={<FontAwesome name="tree" size={24} color="black" />}
				/>
				<SwitchIcon
					condition={court.fee}
					text1="Fee"
					text2="No fee"
					icon1={<MaterialIcons name="attach-money" size={24} color="black" />}
					icon2={<MaterialIcons name="money-off" size={24} color="black" />}
				/>
				<SwitchIcon
					condition={court.bathrooms}
					text1="Bathrooms"
					text2="No bathroom"
					icon1={<FontAwesome5 name="toilet" size={24} color="black" />}
					icon2={
						<MaterialCommunityIcons
							name="emoticon-cry-outline"
							size={24}
							color="black"
						/>
					}
				/>
				<SwitchIcon
					condition={court.public}
					text1="Public"
					text2="Private"
					icon1={<MaterialIcons name="public" size={24} color="black" />}
					icon2={<MaterialIcons name="vpn-key" size={24} color="black" />}
				/>
				<LevelIcon
					condition={court.levelplay}
					text1="Beginner"
					text2="Medium"
					text3="Advanced"
					text4="All"
					icon1={
						<MaterialCommunityIcons
							name="speedometer-slow"
							size={24}
							color="black"
						/>
					}
					icon2={
						<MaterialCommunityIcons
							name="speedometer-medium"
							size={24}
							color="black"
						/>
					}
					icon3={
						<MaterialCommunityIcons
							name="speedometer"
							size={24}
							color="black"
						/>
					}
					icon4={
						<MaterialCommunityIcons
							name="human-greeting"
							size={24}
							color="black"
						/>
					}
				/>
			</View>
			<TouchableOpacity onPress={handleChange}>
				<Text>Delete</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("Edit", { id: id })}>
				<Text>Edit</Text>
			</TouchableOpacity>
			<NavBtn screen="Home" text="Home Page" />
			<Text>Notes: {court.notes}</Text>
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
	iconContainer: {
		flex: 0.4,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		padding: 15,
	},
});
