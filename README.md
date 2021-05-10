# TrackMe - track user's location app
Simple tracking user's location app with Node.js (ExpressJS) and MongoDB
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Inspiration](#inspiration)

## General Info
This project is simple app tracking user's location and record and save user's track.


The project has two folders:

* **track-user**: use _NodeJS (ExpressJS)_ to create API and connect to _MongoDB_ 
* **track-ui**: use _React Native_ to create UI componesnts and screen, use _React Navigation v4_ to navigate around screens 


## Technologies
Project is created with:

* React: 17.0.2
* React Native: 0.64
* React Navigation: v4.x
* ExpressJS
* MongoDB


## Setup
**_On your mobile device you should download [Expo Go]() app to run this project._**


To run follow all this steps:

1.  Clone the project to local


    ``` git clone https://github.com/minhtan4711/TrackProject ```

2.  In terminal do:

    ``` cd TrackProject ```

3.  Start backend server and connect to MongoDB

    ``` cd track-user ```

    ``` npm run dev ```

4.  Start the server by _ngrok_ package and start the app by expo

    ``` cd ../track_ui  ```

    ``` ngrok http 8080 ```

    ``` expo start ```

5. In IOS device turn on camera scan the QR code and the app will be initial in _Expo Go_ app.
   In Android device you have to install the third party app to 
scan the QR code to inital the project in _Expo Go_ app.   

## Inspiration

This app is based on [React Native](#https://www.udemy.com/course/the-complete-react-native-and-redux-course/#questions) course from Udemy.