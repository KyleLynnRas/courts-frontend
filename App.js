import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//screens
import HomeScreen from "./app/screens/HomeScreen";
import ShowScreen from "./app/screens/ShowScreen";
import IndexScreen from "./app/screens/IndexScreen";
import NewScreen from "./app/screens/NewScreen";
import EditScreen from "./app/screens/EditScreen";

//create stack nav
const Stack = createStackNavigator();

export default function App() {
	//state court data
	const [courts, setCourts] = useState([]);

	//first api call to get initial data
	const URL = "https://courts-app-api-kr.herokuapp.com/";

	//users location
	const [location, setLocation] = useState({});

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

	//destroy
	const destroyCourt = async (id) => {
		try {
			await fetch(URL + `courts/${id}`, {
				method: "delete",
			});
			alert("deleted");
			//update courts
			getCourts();
		} catch (error) {
			console.log(error);
		}
	};

	//update
	const updateCourt = async (formData, id) => {
		try {
			await fetch(URL + `courts/${id}`, {
				method: "put",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			alert("updated");
			//update courts
			getCourts();
		} catch (error) {
			console.log(error);
		}
	};

	// useEffect to get permission/initial data
	useEffect(() => {
		getCourts();
		permissionRequest();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Show">
					{(props) => (
						<ShowScreen
							{...props}
							courts={courts}
							destroyCourt={destroyCourt}
						/>
					)}
				</Stack.Screen>
				<Stack.Screen name="Index">
					{(props) => (
						<IndexScreen {...props} location={location} courts={courts} />
					)}
				</Stack.Screen>
				<Stack.Screen name="New">
					{(props) => <NewScreen {...props} createCourts={createCourts} />}
				</Stack.Screen>
				<Stack.Screen name="Edit">
					{(props) => (
						<EditScreen {...props} updateCourt={updateCourt} courts={courts} />
					)}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
