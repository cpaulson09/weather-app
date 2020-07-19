import React, {Component} from 'react'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import Weather from './components/Weather'

class App extends Component {
  //http://wanderlust.brousseauai.com/
  //http://brousseauweather.herokuapp.com/

  state = {
    weatherData: {
      city: '',
      date: '',
      currentTemp: '',
      condition: '',
      high: '',
      low: ''
    }
  }

  //Test getting data from URL
  /*componentDidMount(){

  const apiKey = 'e3bf99fc0aa4a20de5028823d6db43b0'
  const testCity = 'London,uk'
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${testCity}&APPID=${apiKey}`

    fetch(url)
      .then(res => res.json()).then(data => {
        console.log(data)
        let weatherData = {
          city: data.name,
          date: this.ShowCurrentDate(),
          currentTemp: (this.kelvinToF(data.main.temp)).toFixed(0),
          condition: data.weather[0].main,
          high: this.kelvinToF(data.main.temp_max).toFixed(0),
          low: this.kelvinToF(data.main.temp_min).toFixed(0)
        } 
        //update current city stats
        this.setState({
          weatherData: weatherData
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }*/

  ShowCurrentDate= () => {
    let date = new Date().getDate()
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear()
    return `${month}/${date}/${year}`
  }

  // kelvinToF() Convert Kelvin temps to Farenheit
  kelvinToF = (temp) => (temp - 273.15) * (9/5) + 32

  // findWeather() query the API for the city specified
  findWeather = (city) => {
    let apiKey = 'e3bf99fc0aa4a20de5028823d6db43b0'
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
    console.log(`Looking at ${city} Weather...`)

    fetch(url)
      .then(res => res.json()).then(data => {
        //console.log(data)
        let weatherData = {
          city: data.name,
          date: this.ShowCurrentDate(),
          currentTemp: `${this.kelvinToF(data.main.temp).toFixed(0)}°F`,
          condition: `Conditions: ${data.weather[0].main}`,
          high: `High: ${this.kelvinToF(data.main.temp_max).toFixed(0)}°F`,
          low: `Low: ${this.kelvinToF(data.main.temp_min).toFixed(0)}°F`
        } 
        //update current city stats
        this.setState({
          weatherData: weatherData
        })
        // log the pertinent weather data
        console.log(this.state.weatherData)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render(){
    return (
      <div className="App">
          <Header/>
          <div className="container">
            <Search searchCity={this.findWeather}/>
            <Weather weather={this.state.weatherData}/>
          </div>
      </div>
    )
  }
}

export default App
