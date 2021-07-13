import React from "react";
import { View, Text } from "react-native";

export default function SwitchIcon({ condition, text1, text2, icon1, icon2 }) {
	return (
		<View>
			{condition ? (
				<View>
					<Text>{text1}</Text>
					{icon1}
				</View>
			) : (
				<View>
					<Text>{text2}</Text>
					{icon2}
				</View>
			)}
		</View>
	);
}
