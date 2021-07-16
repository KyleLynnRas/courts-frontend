# Courterly Report

## Summary

An app to help users find pickleball courts in their area. The app retrieves the user's location and displays it on a Google map along with pins for all courts nearby. Users are able to add reviews of new courts, which will also add a pin to the map at their current location. TomTom's api is utilized to convert all coordinates to a street address which is displayed on the show page. Edit and delete functionality are available as well. 

## Getting Started

The app is currently only designed for iPhone devices. To get started download the free Expo Go app from the app store. Hover your camera over the barcode and a prompt should appear to open the app in Expo Go. Once the app is open, you will need to grant the app permission to use your location. 

If the prompt does not appear using your camera, paste the below link into your phone's browser. This will also open the app in Expo Go. 

exp://exp.host/@kylelynnras/courterly-report

## QR Code 

![summary page](https://i.imgur.com/DqAZO47.png)
![barcode](https://i.imgur.com/SgsdUjD.png)

## Technologies Used

* JavaScript
* React Native
* Expo
* React navigation/native
* Expo linear gradient
* Expo location
* React native maps
* TomTom api 
* PostgreSQL


## Screenshots

![splash screen](https://i.imgur.com/TYnSax6.png)
![index screen](https://i.imgur.com/xNDfqLv.png)
![show screen](https://i.imgur.com/mEocb5P.png)
![edit screen](https://i.imgur.com/ADLAesZ.png)


## User Stories
* AAU I would like to see all the courts users have added
* AAU I would like to add a court, and the app use my location to create a pin. 
* AAU I would like to edit a court
* AAU I would like to delete a court
* AAU I would like to see a details page of a specific court with the address listed

## Future Goals
* Responsive design for larger devices like iPads
* Responsive design for landscape orientation 
* Adapt for Android devices
* Add refresh/reload icons
* Add drawer/tab navigation
* Add Google fonts
* Add user model/auth
* Add photo upload capabilities

## Existing Bugs 
* Show page header does not update when user submits edit form 
* Edit form does not display correct star rating

