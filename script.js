//appid=4a57261bd57c7c76003822133b03c5b8

const userLocation = document.getElementById('location');
const localTemp = document.getElementById('temp');

// Main Function

function geoFindMe() {

  // GeoLocation API
  $.getJSON('https://freegeoip.net/json/').done(function (place) {

    $('#location').html(place.city + ', ' + place.region_code);

    // Weather API
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + place.latitude + '&lon=' + place.longitude +
    '&units=imperial&appid=4a57261bd57c7c76003822133b03c5b8', function (data) {
        //console.log(data);
        localTemp.innerHTML = Math.round(data.main.temp) + 'F';

        // Event Listener for Celcius button
        $('#cel').click(function () {
          let fTemp = data.main.temp;
          const fToCel = (fTemp - 32) * 5 / 9;
          localTemp.innerHTML = Math.round(fToCel) + 'C';
        });
        // Event Listener for Farenhiet button
        $('#far').click(function () {
          localTemp.innerHTML = Math.round(data.main.temp) + 'F';
        });

        // Conditionals to change background pictures
        if (data.weather[0].id < 300) {
          $('.main').css('background-image', 'url(images/thunderstorm.jpeg)');
          $('.color').css('color', 'wheat');
          $('.color').css('border-color', 'wheat');
        }else if (data.weather[0].id < 600) {
          $('.main').css('background-image', 'url(images/rain.jpeg)');
          $('.color').css('color', 'white');
          $('.color').css('border-color', 'white');
        }else if (data.weather[0].id < 700) {
          $('.main').css('background-image', 'url(images/snow.jpeg)');
          $('.color').css('color', 'black');
          $('.color').css('border-color', 'black');
        }else if (data.weather[0].id < 800) {
          $('.main').css('background-image', 'url(images/fog.jpg)');
          $('.color').css('color', 'black');
          $('.color').css('border-color', 'black');
        }else if (data.weather[0].id > 800) {
          $('.main').css('background-image', 'url(images/cloudy.jpeg)');
          $('.color').css('color', 'black');
          $('.color').css('border-color', 'black');
        }else if (data.weather[0].id == 800) {
          $('.main').css('background-image', 'url(images/sunny.jpg)');
          $('.color').css('color', 'black');
          $('.color').css('border-color', 'black');
        }
      });
  });
}

// Sets the Date

function date() {
  var currentDate = document.getElementById('date');
  var d = new Date();
  var str = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
  currentDate.innerHTML = str;
}

geoFindMe();
date();
