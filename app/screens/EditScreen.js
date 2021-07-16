import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Alert } from "react-native";
//components
import FormBody from "../components/form/FormBody";

export default function EditScreen({ navigation, courts, updateCourt, route }) {
	//find court
	const id = route.params.id;
	//courts
	const court = courts.find((c) => c.id === id);

	//state form data
	const [formData, setFormData] = useState({
		latitude: court.latitude,
		longitude: court.longitude,
		indoor: court.indoor,
		fee: court.fee,
		stars: court.stars,
		public: court.public,
		bathrooms: court.bathrooms,
		levelplay: court.levelplay,
		title: court.title,
	});

	//handlesubmit
	const handleSubmit = (e) => {
		e.preventDefault();
		//validation for required fields
		if (!formData.title) {
			Alert.alert("Error", "Please fill out all the fields.");
			return;
		}
		//send form data in put request
		updateCourt(formData, id);
		//redirect to show
		navigation.navigate("Show", { id: id });
	};

	const handleChange = (value, name) => {
		setFormData({ ...formData, [name]: value });
	};

	return (
		<SafeAreaView style={styles.screenContainer}>
			<FormBody
				title="Edit Court"
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				formData={formData}
				setFormData={setFormData}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
