import React from "react";
import { View, Text } from "react-native";

export default function SwitchIcon({ condition, text1, text2, icon1, icon2, style, textStyle }) {
	return (
		<View style={style}>
			{condition ? (
				<View>
					<Text style={textStyle}>{text1}</Text>
					{icon1}
				</View>
			) : (
				<View>
					<Text style={textStyle}>{text2}</Text>
					{icon2}
				</View>
			)}
		</View>
	);
}
