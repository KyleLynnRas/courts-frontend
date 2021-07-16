import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	ImageBackground,
	StyleSheet,
} from "react-native";
//components
import FormPicker from "./FormPicker";
import SwitchContainer from "./SwitchContainer";
import FormText from "./FormText";

const image = { uri: "https://i.imgur.com/8I9D4EQ.jpg" };

export default function FormBody({
	formData,
	setFormData,
	handleChange,
	handleSubmit,
	title
}) {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<ImageBackground
				resizeMode="cover"
				style={styles.background}
				source={image}
			>
				<View style={styles.formContainer}>
					<Text style={styles.heading}>{title}</Text>
					<FormText
						formData={formData}
						handleChange={handleChange}
						style={styles.input}
					/>
					<SwitchContainer formData={formData} setFormData={setFormData} />
					<View style={styles.pickerMain}>
						<FormPicker
							title={styles.pickerTitle}
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
							title={styles.pickerTitle}
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
						<Text style={styles.submitText}>Submit</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	background: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "space-around",
		alignItems: "center",
	},
	heading: {
		fontSize: 30,
		marginTop: 15,
		fontFamily: "Avenir Next",
	},
	formContainer: {
		height: "85%",
		width: "75%",
		backgroundColor: "rgba(255, 255, 255, 0.9)",
		padding: 25,
		justifyContent: "space-around",
		alignItems: "center",
		borderRadius: 40,
	},
	submit: {
		backgroundColor: "rgb(204, 148, 222)",
		padding: 15,
		borderRadius: 25,
		marginTop: 15,
		fontFamily: "Avenir Next",
		color: "#fff",
	},
	submitText: {
		fontFamily: "Avenir Next",
	},
	input: {
		width: 200,
		padding: 10,
		borderWidth: 2,
		borderStyle: "solid",
		borderColor: "gray",
		borderRadius: 50,
		overflow: "scroll",
		borderColor: "rgba(164, 163, 163, 0.93)",
		borderWidth: 2,
		margin: 10,
		color: "black",
		fontFamily: "Avenir Next",
	},
	pickerMain: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	pickerTitle: {
		marginTop: 10,
		fontSize: 15,
		fontFamily: "Avenir Next",
	},
	pickerContainer: {
		width: "20%",
		overflow: "hidden",
		width: "40%",
		margin: 5,
		textAlign: "center",
	},
});
