# Expo Camera Implementation with Firebase

## Assignment Details
| Name             | Roll Number   | Course                        | Assignment   | Date                |
| ---------------- | ------------- | ------------------------------ | ------------ | ------------------- |
| Hussain Ahmed    | FA19-BCS-074  | Mobile Application Development | 2            | 15th December 2023 |

## Description
This mobile application demonstrates the implementation of Expo Camera with Firebase integration. Users can take pictures using the device's camera, save them to Firebase, and view the saved images.


## Installation
1. Clone the repository: `git clone https://github.com/your-username/expo-camera-firebase.git`
2. Install dependencies: `npm install`
3. Run the application: `npm start`

## Features
- **Take Pictures:** Open the camera, switch between front and back, and capture pictures.
- **View Pictures:** Display a list of saved images with the option to view them individually.

## Project Structure
- **App.js:** Main application file containing navigation setup.
- **ViewPicture.js:** Component to view saved pictures from Firebase.
- **TakePicture.js:** Component to capture pictures and save them to Firebase.
- **Assignment.js:** Home screen component with navigation buttons.

## Firebase Integration
- Firebase is used for storing and retrieving image data.
- Images are stored in the 'images' collection in Firestore.

## Dependencies
- `expo-camera`: Handles camera functionality in the Expo framework.
- `@react-navigation/native`: Provides navigation functionalities.
- `@react-navigation/native-stack`: Stack navigator for navigation between screens.
- `@expo/vector-icons`: Icons for camera and other UI elements.

## Usage
1. Open the application.
2. Click on "Open Camera" to capture pictures.
3. Click on "View Pictures" to see the list of saved images.

## Contribution
Feel free to contribute to the project by opening issues or creating pull requests.

## License
This project is licensed under the [MIT License](LICENSE).
