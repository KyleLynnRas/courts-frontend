import React from "react";
import { View, TextInput } from "react-native";

export default function FormText({ formData, style, handleChange }) {
	return (
		<View>
			<TextInput
				value={formData.title}
				style={style}
				placeholder="Court name"
				placeholderTextColor="rgba(149, 149, 149, 1)"
				onChangeText={(value) => handleChange(value, "title")}
			/>
			<TextInput
				style={style}
				maxLength={50}
				multiline
				value={formData.notes}
				placeholder="Notes"
				placeholderTextColor="rgba(149, 149, 149, 1)"
				onChangeText={(value) => handleChange(value, "notes")}
			/>
		</View>
	);
}
