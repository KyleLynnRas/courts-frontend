import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
//components
import NavBtn from "../components/NavBtn";

export default function HomeScreen({ navigation }) {
	return (
		<SafeAreaView>
			<Text>HOME SCREEN</Text>
			<NavBtn screen="Index" text="Index" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
