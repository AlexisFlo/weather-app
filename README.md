# Weather App

This is a simple weather app built with vanilla JavaScript that uses the OpenWeatherMap API to fetch weather data for a given city and displays it on the page.

## Project Structure

```
my-weather-app
├── public
│   ├── index.html
│   ├── css
│   │   └── style.css
│   └── js
│       └── app.js
└── README.md
```

- `public/index.html`: This file is the entry point of the application. It contains the HTML markup for the app and links to the CSS and JavaScript files.
- `public/css/style.css`: This file contains the styles for the app.
- `public/js/app.js`: This file contains the JavaScript code for the app. It exports a function `getWeatherData` which takes a city name as input and returns a Promise that resolves to the weather data for that city. It also exports a function `renderWeatherData` which takes the weather data as input and updates the DOM to display the weather information.
- `README.md`: This file contains the documentation for the project.

## Usage

To use the app, simply open the `public/index.html` file in your web browser. Enter a city name in the input field and click the "Get Weather" button to fetch and display the weather data for that city.

## Dependencies

This project has no external dependencies.
