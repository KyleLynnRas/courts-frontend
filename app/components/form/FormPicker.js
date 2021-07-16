import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function FormPicker({
	style,
	label,
	selected,
	name,
	label1,
	label2,
	label3,
	label4,
	label5,
	handleChange,
	title,
}) {
	return (
		<View style={style}>
			<Picker
				selectedValue={selected}
				mode="dropdown"
				onValueChange={(value) => handleChange(value, name)}
				itemStyle={{
					fontSize: 12,
					backgroundColor: "rgba(255, 255, 255, 0.9)",
					height: 90,
					width: "95%",
				}}
			>
				<Picker.Item label={label1} value={label1} />
				<Picker.Item label={label2} value={label2} />
				<Picker.Item label={label3} value={label3} />
				<Picker.Item label={label4} value={label4} />
				<Picker.Item label={label5} value={label5} />
			</Picker>
			<Text style={title}>{label}</Text>
		</View>
	);
}
