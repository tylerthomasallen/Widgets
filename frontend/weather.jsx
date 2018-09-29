import React from 'react';

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: {
        location: '',
        type: '',
        description: '',
        icon: ''
      }
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.handleWeather(position);
    });
    // this.getWeather().then(() => console.log('promise!'));
  }

  handleWeather(pos) {
    this.getWeather(pos).then((data) => this.setLocation(data));
  }

  setLocation(data) {
    const name = data.name;
    const { weather } = data;

    const type = weather[0].main;
    const des = weather[0].description;
    const icon = weather[0].icon;

    this.setState( { weather: {
      location: name,
      type: type,
      description: des,
      icon: icon
    }});
  }

  getWeather(pos) {
    const { coords } = pos;
    const lat = coords.latitude;
    const long = coords.longitude;
    console.log(pos);
    console.log(coords);
    console.log(lat);
    console.log(long);

    return $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather' +
  	`?lat=${lat}&lon=${long}&appid=4933d7f3ea2430f18606b323bcbbd7f0`,

      success(data) {},
      error() {
        console.error("An error occurred.");
      },
    });
  }

  render() {
    const { weather } = this.state;

    return (
      <div className="weather">

        <ul>
          <li>Weather</li>
          <li>{weather.location}</li>
          <li>{weather.type}</li>
          <li>{weather.description}</li>
        </ul>

      </div>
    );
  }
}

export default Weather;
