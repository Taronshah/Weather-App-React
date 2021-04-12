import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CityInput from './components/CityInput';
import Header from './components/layout/Header';
import Today from './components/pages/Today';
import Tomorrow from './components/pages/Tomorrow';
import Fiveday from './components/pages/Fiveday';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: [],
      tomorrow: [],
      fiveday: [], 
      isSearched: false,
      isError: false,
      isCityFound: false
    };
  }

  parseAPIData = result => {

    const today = []
        const tomorrow = []
        const fiveday  = []

        const currentDay = new Date (result.list[0].dt_txt).getDay()

        const parseSingleItem = item => {
          const forecastItem = {
            temp: item.main.temp,
            humidity: item.main.humidity,
            descr: item.weather[0].description,
            icon: item.weather[0].icon,
            date: item.dt_txt
          };

          const itemDay = new Date (item.dt_txt).getDay();
          
          if (itemDay === currentDay) {
            today.push(forecastItem);
          } else if (itemDay === currentDay + 1 || itemDay === currentDay - 6) {
            tomorrow.push(forecastItem);
          }

          if (new Date (item.dt_txt).getHours() === 12){
            fiveday.push(forecastItem);
          }
        }
        
        result.list.forEach(parseSingleItem)

        this.setState({
          today,
          tomorrow,
          fiveday, 
          isSearched: true,
          isCityFound: true
        });
  }

  getAndParseWeatherData = name => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=7b91084f95564bb1644732b86a0c1f86`

    return fetch (URL)
    .then(res => res.json())
    .then(result => {
      if (result.cod === "404") {
        this.setState({
          isSearched: true,
          isCityFound: false
        });
        return
      }

      if(result.cod !== "200") {
        return
      }

        this.parseAPIData(result)
        

    }).catch((error) => {
      this.setState({
        isSearched: true,
        isError: true
      });
    })
   
  }

  render(){
    let main;

    const {today, tomorrow, fiveday, isSearched, isCityFound, isError} = this.state;

    if(!isSearched) {
      main = <div className="app-descr-wrapper">
        <div className="app-header">WEATHER FINDER</div>
        <div className="main-message">Find out temperatue, conditios and more</div>
      </div>
    } else if (isSearched && !isCityFound) {
      main = <div className="main-message">City not found</div>
    } else if (isCityFound) {
      main =  <div className="forecast-body">
        <Header />
        <Route exact path="/" render={props => (
          <Today items = {today}/>
          )}/>
        <Route path="/tomorrow" render={props => (
          <Tomorrow items = {tomorrow}/>
          )}/>
        <Route path="/fiveday" render={props => (
          <Fiveday items = {fiveday}/>
          )}/>
      </div>
    } else if (isError){
      main = <div className="main-message">Something went wrong</div>
    }
    return (
      <div className="app-container">
        <div className="app-main">
          <Router>
            <CityInput getCitisWeatherData={this.getAndParseWeatherData}/>
            {main}
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
