import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
//components
import FormBody from "../components/FormBody";

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
		notes: court.notes,
		title: court.title,
	});

	//handlesubmit
	const handleSubmit = (e) => {
		e.preventDefault();
		//validation for required fields
		if (!formData.title) {
			alert("Please fill out all the fields. Notes are not required");
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
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				formData={formData}
				setFormData={setFormData}
			/>
			{/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
			</TouchableWithoutFeedback> */}
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
