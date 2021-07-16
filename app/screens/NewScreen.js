import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
//components
import FormBody from "../components/form/FormBody";

export default function NewScreen({ createCourts, navigation }) {
	//state form data
	const [formData, setFormData] = useState({
		latitude: null,
		longitude: null,
		indoor: false,
		fee: false,
		stars: "",
		public: false,
		bathrooms: false,
		levelplay: false,
		street: "",
		title: "",
	});

	//handlesubmit
	const handleSubmit = (e) => {
		e.preventDefault();
		//validation for required fields
		if (!formData.title) {
			alert("Please fill out all the fields.");
			return;
		}
		//send form data in post request
		createCourts(formData);
		//redirect to index
		navigation.navigate("Index");
	};

	const handleChange = (value, name) => {
		setFormData({ ...formData, [name]: value });
	};

	const image = { uri: "https://i.imgur.com/8I9D4EQ.jpg" };

	return (
		<SafeAreaView style={styles.screenContainer}>
			<FormBody
				title="Add Court"
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
