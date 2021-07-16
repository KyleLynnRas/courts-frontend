import React from "react";
import { StyleSheet, View } from "react-native";
import {
	FontAwesome5,
	FontAwesome,
	MaterialIcons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
//components
import SwitchIcon from "./SwitchIcon";
import LevelIcon from "./LevelIcon";

export default function IconContainer({ court }) {
	return (
		<View style={styles.iconContainer}>
			<SwitchIcon
				textStyle={styles.textStyle}
				style={styles.icon}
				condition={court.indoor}
				text1="Indoor"
				text2="Outdoor"
				icon1={<FontAwesome5 name="warehouse" size={24} color="black" />}
				icon2={<FontAwesome name="tree" size={24} color="black" />}
			/>
			<SwitchIcon
				textStyle={styles.textStyle}
				style={styles.icon}
				condition={court.fee}
				text1="Fee"
				text2="No fee"
				icon1={<MaterialIcons name="attach-money" size={24} color="black" />}
				icon2={<MaterialIcons name="money-off" size={24} color="black" />}
			/>
			<SwitchIcon
				textStyle={styles.textStyle}
				style={styles.icon}
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
				textStyle={styles.textStyle}
				style={styles.icon}
				condition={court.public}
				text1="Public"
				text2="Private"
				icon1={<MaterialIcons name="public" size={24} color="black" />}
				icon2={<MaterialIcons name="vpn-key" size={24} color="black" />}
			/>
			<LevelIcon
				textStyle={styles.textStyle}
				style={styles.icon}
				condition={court.levelplay}
				text1="Beginner Level"
				text2="Medium Level"
				text3="Advanced"
				text4="All Levels"
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
					<MaterialCommunityIcons name="speedometer" size={24} color="black" />
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
	);
}

const styles = StyleSheet.create({
	iconContainer: {
		marginTop: 10,
		width: "85%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignContent: "center",
		height: "55%",
		backgroundColor: "rgba(255, 255, 255, 0.57)",
	},
	icon: {
		width: "30%",
		height: "40%",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		margin: 5,
		// borderColor: "green",
		// borderWidth: 2
	},
	textStyle: {
		marginBottom: 4,
		fontFamily: "Avenir Next",
		fontSize: 15,
	},
});
