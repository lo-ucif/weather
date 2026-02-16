🌤 Weather App – React + TypeScript
📌 Project Overview
This is a modern web application that displays real-time weather data using an external API.
The application allows users to search for any city and dynamically retrieve its current weather information.
The main goal of this project was educational:
To deeply understand API integration, data flow in React, and proper project structure organization before moving further into backend development.
🚀 Features
Display current weather data
Search for any city
Dynamic UI updates after search
Clean and lightweight interface
Well-structured project architecture
Context-based state management
🔎 How the Search Feature Works
The user enters a city name in the search input.
The city name is stored in state.
The city name is passed to a weather-fetching function.
The function (located in the services folder) sends a GET request using Axios.
The API returns the weather data.
The Home Page calls the function and receives the response.
The UI updates dynamically with the new weather data.
This approach demonstrates:
Separation of concerns (UI vs logic)
Clean API abstraction
Proper data flow handling
Reusable service functions
🛠 Tech Stack
React + Vite
TypeScript
Axios
Tailwind CSS
Postman
Figma
📂 Project Structure
Copy code

src/
 ├── assets/
 ├── components/
 ├── context/
 ├── pages/
 ├── services/
 ├── App.tsx
 └── main.tsx
📁 assets
Contains static files such as images and icons.
📁 components
Reusable UI components such as:
Weather display component
Search component
UI layout components
📁 context
Manages global state using React Context API to avoid excessive prop drilling.
📁 pages
Contains main application pages, including:
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
Using React Context for state management
Structuring a scalable frontend project
Simplifying UI for better performance
📈 Future Improvements
Add loading indicators
Improve error handling
Add geolocation support
Add multi-day forecast
Connect the app to a custom backend service
👨‍💻 Author
Ahmed tamer Loucif
Software Engineering Student – University of Constantine 2
