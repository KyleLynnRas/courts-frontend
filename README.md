# Courterly Report

## Summary

An app to help users find pickleball courts in their area. The app retrieves the user's location and displays it on a Google map along with pins for all courts nearby. Users are able to add reviews of new courts, which will also add a pin to the map at their current location. TomTom's api is utilized to convert all coordinates to a street address which is displayed on the show page. Edit and delete functionality are available as well. 

## Video preview 

https://youtu.be/FLshW3P3AlE


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
* AAU I would like to add a court, and the app to create a map marker at my location
* AAU I would like to edit a court
* AAU I would like to delete a court
* AAU I would like to see a page with detailed information along with the address listed for a specific court

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
* Circle on Map view doesn't always display fill color
* Street address from reverse geocoding is very close but not exact
