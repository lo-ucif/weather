🌤 Weather App – React + TypeScript
📌 Project Overview

A modern web application that displays real-time weather data using an external API.

The application allows users to search for any city and dynamically retrieve its current weather information.

🎯 Main Goal:
This project was built for educational purposes to deeply understand:

API integration

Data flow in React

Clean project architecture
Before moving forward into backend development.

🚀 Features

🌤 Display current weather data

🔍 Search for any city

⚡ Dynamic UI updates after search

🎨 Clean and lightweight interface

🧱 Well-structured project architecture

🌍 Context-based state management

🔎 How the Search Feature Works

The user enters a city name in the search input.

The city name is stored in state.

The city name is passed to a weather-fetching function.

The function (inside the services folder) sends a GET request using Axios.

The API returns weather data.

The Home Page calls the function and receives the response.

The UI updates dynamically with the new weather data.

💡 This demonstrates:

Separation of concerns (UI vs Logic)

Clean API abstraction

Proper data flow handling

Reusable service functions

🛠 Tech Stack

⚛ React + Vite

🟦 TypeScript

🌐 Axios

🎨 Tailwind CSS

🧪 Postman

🎨 Figma

📂 Project Structure
src/
 ├── assets/
 ├── components/
 ├── context/
 ├── pages/
 ├── services/
 ├── App.tsx
 └── main.tsx

📁 assets

Contains static files such as:

Images

Icons

📁 components

Reusable UI components such as:

Weather display component

Search component

Layout components

📁 context

Manages global state using React Context API to avoid excessive prop drilling.

📁 pages

Contains main application pages:

Home Page (calls the weather function and renders results)

📁 services

Handles API logic:

Weather fetching function

Axios configuration

API response handling

🎯 What I Learned

Practical TypeScript usage in React

API integration using Axios

Handling asynchronous requests (async/await)

Using React Context for global state

Structuring a scalable frontend project

Simplifying UI for better performance

📈 Future Improvements

⏳ Add loading indicators

⚠ Improve error handling

📍 Add geolocation support

📅 Add multi-day forecast

🔗 Connect the app to a custom backend service

👨‍💻 Author

Ahmed Tamer Loucif
Software Engineering Student – University of Constantine 2
