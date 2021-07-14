import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NavBtn({ screen, text, style, textStyle }) {
	//nav prop
	const navigation = useNavigation();

	return (
		<TouchableOpacity style={style} onPress={() => navigation.navigate(screen)}>
			<Text style={textStyle}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({});
