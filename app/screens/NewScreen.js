import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TextInput,
	Switch,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
//components
import FormPicker from "../components/FormPicker";

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
		notes: "",
		title: "",
	});

	//handlesubmit
	const handleSubmit = (e) => {
		e.preventDefault();
		//validation for required fields
		if (!formData.title || !formData.stars || !formData.levelplay) {
			alert("Please fill out all the fields. Notes are not required");
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

	return (
		<SafeAreaView style={styles.screenContainer}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.formContainer}>
					<TextInput
						value={formData.title}
						style={styles.input}
						placeholder="Court name"
						onChangeText={(value) => handleChange(value, "title")}
					/>
					<TextInput
						style={styles.input}
						maxLength={50}
						multiline
						value={formData.notes}
						placeholder="Notes"
						onChangeText={(value) => handleChange(value, "notes")}
					/>

					<Text>Indoor</Text>
					<Switch
						keyboard="none"
						value={formData.indoor}
						onValueChange={() =>
							setFormData({ ...formData, indoor: !formData.indoor })
						}
					/>
					<Text>Fee</Text>
					<Switch
						value={formData.fee}
						onValueChange={() =>
							setFormData({ ...formData, fee: !formData.fee })
						}
					/>

					<Text>Public</Text>
					<Switch
						value={formData.public}
						onValueChange={() =>
							setFormData({ ...formData, public: !formData.public })
						}
					/>
					<Text>Bathrooms</Text>
					<Switch
						value={formData.bathrooms}
						onValueChange={() =>
							setFormData({ ...formData, bathrooms: !formData.bathrooms })
						}
					/>
					<View style={styles.pickerMain}>
						<FormPicker
							style={styles.pickerContainer}
							label="Star Rating"
							name="stars"
							selected={formData.stars}
							label1="1"
							label2="2"
							label3="3"
							label4="4"
							label5="5"
							handleChange={handleChange}
						/>
						<FormPicker
							style={styles.pickerContainer}
							label="Level of play"
							name="levelplay"
							selected={formData.levelplay}
							label1="Beginner"
							label2="Medium"
							label3="Advanced"
							label4="All"
							handleChange={handleChange}
						/>
					</View>
					<TouchableOpacity onPress={handleSubmit} style={styles.submit}>
						<Text>Submit!!</Text>
					</TouchableOpacity>
				</View>
			</TouchableWithoutFeedback>
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
	formContainer: {
		width: "90%",
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		width: 200,
		padding: 10,
		borderWidth: 2,
		borderStyle: "solid",
		borderColor: "gray",
		borderRadius: 50,
		overflow: "scroll",
	},
	pickerContainer: {
		height: "auto",
		width: 100,
		overflow: "hidden",
	},
	submit: {
		backgroundColor: "purple",
		padding: 10,
	},
	pickerMain: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
});
