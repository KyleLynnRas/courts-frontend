import React from "react";
import { View, Text } from "react-native";

export default function LevelIcon({
	condition,
	text1,
	text2,
	text3,
	text4,
	icon1,
	icon2,
	icon3,
	icon4,
}) {
	return (
		<View>
			{condition === "beginner" ? (
				<View>
					<Text>{text1}</Text>
					{icon1}
				</View>
			) : condition === "medium" ? (
				<View>
					<Text>{text2}</Text>
					{icon2}
				</View>
			) : condition === "advanced" ? (
				<View>
					<Text>{text3}</Text>
					{icon3}
				</View>
			) : (
				<View>
					<Text>{text4}</Text>
					{icon4}
				</View>
			)}
		</View>
	);
}
