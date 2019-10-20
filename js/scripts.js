// Default LightBox code to run the Image Gallery
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

//DarkSky API
let temperatureDegree = document.querySelector(".temperature-degree");
let temperatureDescription = document.querySelector(".temperature-description");

//Allows API to work on a local server
const proxyurl = "https://cors-anywhere.herokuapp.com/";
//My API URL
const url = "https://api.darksky.net/forecast/5f2479efa85556e3fa64db7a7a5fe39b/36.3932,25.4615";

//Fetching data
fetch(proxyurl + url)
    .then(response =>{
        return response.json();
    })
    .then(data => {
        console.log(data);
        const {temperature, summary} = data.currently;

        //Printing data on Screen
        document.getElementById('weather-output').innerHTML = "It is currently "+temperature+"&deg;F  in Santorini and its "+summary+".";
    });

//MapBox Setup
mapboxgl.accessToken = 'pk.eyJ1Ijoic2xlZWs2NSIsImEiOiJjazF6MnpldDYwOTExM25wY3JpcWEzaDZ1In0.Cj6XSMb18FtV9vOUcOcdDw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/sleek65/ck1z3abx83ao51cnntsz8ebfb'
});