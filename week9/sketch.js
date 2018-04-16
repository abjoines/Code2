var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=5e0f8c3ab04304042cdd7ac164757d2c';
var units =  '&units=metric';
var city;

var canvas;
var buttonElement;
var cityElement;

function setup() {
	cityElement = createInput('City Name');
	
	buttonElement = createButton('Select');
	buttonElement.mousePressed(onButtonPressed);
		buttonElement.style.padding = '50px'; 
	
	createElement('br');
	createElement('br');

	canvas = createCanvas(500,400);

	createElement('h4', 'Source: Open Weather Map API');
}



function gotData(data){
	weather = data;
}

function selectCity() {
	city = cityElement.value();

	console.log(city);
}

function onButtonPressed() {
	selectCity();
	var url = api + city + apiKey + units;
	loadJSON(url, gotData);

	console.log(url);
}

function draw() {
	background(0);

	if(weather){

		noFill();

		strokeWeight(1);
		stroke(255, 50);
		arc(250, 300, 400, 400, PI, TWO_PI);
		arc(250, 300, 350, 350, PI, TWO_PI);
		arc(250, 300, 300, 300, PI,TWO_PI);

		temp = map(weather.main.temp, 0, PI, 0, 10);
		humidity = map(weather.main.humidity, 0, PI, 0, 80);
		windSpeed = map(weather.wind.speed, 0, PI, 0, 20);

		strokeWeight(7);
		stroke(255,0,0);
		arc(250, 300, 400, 400, PI, temp);
		stroke(0,0,255);
		arc(250, 300, 350, 350, PI, humidity);
		stroke(0,255,0);
		arc(250, 300, 300, 300, PI, windSpeed);

	}
}
	

