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
import { LinearGradient } from "expo-linear-gradient";
//components
import FormPicker from "./FormPicker";
import SwitchContainer from "./SwitchContainer";
import FormText from "./FormText";

const image = { uri: "https://i.imgur.com/P8XiNr9.jpg" };

export default function FormBody({
	formData,
	setFormData,
	handleChange,
	handleSubmit,
	title,
}) {
	return (
		<ImageBackground
			resizeMode="cover"
			style={styles.background}
			source={image}
		>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<LinearGradient
					style={styles.gradient}
					colors={["rgba(156, 219, 111, 0.6)", "rrgba(86, 158, 186, 0.6)"]}
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
				</LinearGradient>
			</TouchableWithoutFeedback>
		</ImageBackground>
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
	gradient: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	heading: {
		fontSize: 30,
		marginTop: 15,
		fontFamily: "Avenir Next",
		fontWeight: "600",
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
		backgroundColor: "#5BA5C3",
		padding: 15,
		borderRadius: 27,
		marginTop: 15,
		fontFamily: "Avenir Next",
		color: "#fff",
		width: "40%",
		alignItems: "center",
	},
	submitText: {
		fontFamily: "Avenir Next",
		fontWeight: "600",
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
		fontSize: 16,
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
