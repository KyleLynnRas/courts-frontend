import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";
//screens
import IndexScreen from "./app/screens/IndexScreen";
import NewScreen from "./app/screens/NewScreen";

export default function App() {
	//state court data
	const [courts, setCourts] = useState([]);

	//first api call to get initial data
	const URL = "https://courts-app-api-kr.herokuapp.com/";

	//users location
	const [location, setLocation] = useState({});

	console.log(location);
	//func to get permission
	const permissionRequest = async () => {
		try {
			//alert request
			const { status } = await Location.requestForegroundPermissionsAsync();
			//if permission denied, send error
			if (status !== "granted") {
				alert("This app needs location data to run properly");
				return;
			}
			//get lat/long
			const locationData = await Location.getCurrentPositionAsync({});
			//set state with location data
			const userLocation = {
				latitude: locationData.coords.latitude,
				longitude: locationData.coords.longitude,
			};
			//set state
			setLocation(userLocation);
		} catch (error) {
			console.log(error);
		}
	};

	//index
	const getCourts = async () => {
		try {
			const response = await fetch(URL + "courts");
			const data = await response.json();
			// console.log(data);
			//set state with api data
			setCourts(data);
		} catch (error) {
			console.log(error);
		}
	};

	//create
	const createCourts = async (formData) => {
		formData = {
			...formData,
			latitude: location.latitude,
			longitude: location.longitude,
		};
		console.log(
			"new form" + formData.latitude,
			formData.longitude,
			formData.indoor,
			formData.title,
			formData.notes,
			formData.fee,
			formData.stars,
			formData.public,
			formData.bathrooms,
			formData.levelplay
		);

		try {
			await fetch(URL + "courts", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			//test
			alert("sent");
			//update courts
			getCourts();
		} catch (error) {
			console.log(error);
		}
	};

	//useEffect to get permission/initial data
	useEffect(() => {
		getCourts();
		permissionRequest();
	}, []);

	// return <NewScreen createCourts={createCourts} />;
	return <IndexScreen courts={courts} location={location} />;
}

const styles = StyleSheet.create({});
