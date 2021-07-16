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
	style, 
	textStyle
}) {
	return (
		<View style={style}>
			{condition === "Beginner" ? (
				<View>
					<Text style={textStyle}>{text1}</Text>
					{icon1}
				</View>
			) : condition === "Medium" ? (
				<View >
					<Text style={textStyle}>{text2}</Text>
					{icon2}
				</View>
			) : condition === "Advanced" ? (
				<View>
					<Text style={textStyle}>{text3}</Text>
					{icon3}
				</View>
			) : (
				<View>
					<Text style={textStyle}>{text4}</Text>
					{icon4}
				</View>
			)}
		</View>
	);
}
