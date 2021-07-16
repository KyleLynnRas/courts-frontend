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
		<View style={styles.container}>
			<SwitchIcon
				textStyle={styles.textStyle}
				style={styles.iconContainer}
				condition={court.indoor}
				text1="Indoor"
				text2="Outdoor"
				icon1={
					<FontAwesome5
						name="warehouse"
						size={22}
						color="black"
						style={styles.icon}
					/>
				}
				icon2={
					<FontAwesome
						name="tree"
						size={22}
						color="black"
						style={styles.icon}
					/>
				}
			/>
			<SwitchIcon
				textStyle={styles.textStyle}
				style={styles.iconContainer}
				condition={court.fee}
				text1="Fee"
				text2="No fee"
				icon1={
					<MaterialIcons
						name="attach-money"
						size={22}
						color="black"
						style={styles.icon}
					/>
				}
				icon2={
					<MaterialIcons
						name="money-off"
						size={22}
						color="black"
						style={styles.icon}
					/>
				}
			/>
			<SwitchIcon
				textStyle={styles.textStyle}
				style={styles.iconContainer}
				condition={court.bathrooms}
				text1="Bathrooms"
				text2="No bathroom"
				icon1={
					<FontAwesome5
						name="toilet"
						size={22}
						color="black"
						style={styles.icon}
					/>
				}
				icon2={
					<MaterialCommunityIcons
						name="emoticon-cry-outline"
						size={22}
						color="black"
						style={styles.icon}
					/>
				}
			/>
			<SwitchIcon
				textStyle={styles.textStyle}
				style={styles.iconContainer}
				condition={court.public}
				text1="Public"
				text2="Private"
				icon1={
					<MaterialIcons
						name="public"
						size={22}
						color="black"
						style={styles.icon}
					/>
				}
				icon2={
					<MaterialIcons
						name="vpn-key"
						size={22}
						color="black"
						style={styles.icon}
					/>
				}
			/>
			<LevelIcon
				textStyle={styles.textStyle}
				style={styles.iconContainer}
				condition={court.levelplay}
				text1="Beginner Level"
				text2="Medium Level"
				text3="Advanced"
				text4="All Levels"
				icon1={
					<MaterialCommunityIcons
						name="speedometer-slow"
						size={22}
						color="black"
						style={styles.icon}
					/>
				}
				icon2={
					<MaterialCommunityIcons
						name="speedometer-medium"
						size={22}
						color="black"
						style={styles.icon}
					/>
				}
				icon3={
					<MaterialCommunityIcons
						name="speedometer"
						size={22}
						color="black"
						style={styles.icon}
					/>
				}
				icon4={
					<MaterialCommunityIcons
						name="human-greeting"
						size={22}
						color="black"
						style={styles.icon}
					/>
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignContent: "center",
		height: "65%",
		padding: 5,
	},
	iconContainer: {
		width: "35%",
		height: "30%",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		margin: 5,
	},
	textStyle: {
		marginBottom: 4,
		fontFamily: "Avenir Next",
		fontSize: 15,
	},
	icon: {
		textAlign: "center",
	},
});
