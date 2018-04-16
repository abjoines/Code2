var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Paris';
var apiKey = '&APPID=5e0f8c3ab04304042cdd7ac164757d2c';
var units =  '&units=metric';

function setup() {
	createCanvas(500,400);
	var url = api + city + apiKey + units;
	loadJSON(url, gotData);

}

function gotData(data){
	weather = data;
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

		strokeWeight(7);
		stroke(255,0,0);
		arc(250, 300, 400, 400, PI, PI - (weather.main.temp*2));
		stroke(0,0,255);
		arc(250, 300, 350, 350, PI, - weather.main.humidity);
		stroke(0,255,0);
		arc(250, 300, 300, 300, PI, - weather.wind.speed);

	}
}