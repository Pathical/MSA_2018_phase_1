
import * as React from 'react';
import WeatherForADay from './components/WeatherForADay';

interface IState {
  error: any,
  result: any,
  days: any
}

export default class App extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props);
    this.state = { error: '', result: '', days: 7 }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  // this function gets called everytime the user presses a key
  // when the key is the enter key, it calls the function which calls the api
  public handleOnChange(event: any) {
    if (event.key === 'Enter') {
      this.getWeatherbyCityName(event.target.value);
    }
  }

  // this function makes the RESTful API call to weatherbit
  // and tries to store the results as states
  public getWeatherbyCityName(cityName: any) {
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?key=e7739c749efd4516afe5091f2010478b&days=' + this.state.days + '&city=' + cityName, {
      method: 'GET'
    }).then((response: any) => {
      if (response.status !== 200) {
        this.setState({
          error: response.status,
          result: ''
        });
      } else {
        response.json().then((responseBody: any) => {
          this.setState({
            error: '',
            result: responseBody
          });
        })
      }
    });
  }

  // creates an array of WeatherForADay objects
  public createCard = () => {
    const cards = []
    for (let i = 0; i < this.state.days; i++) {
      cards.push(this.state.result === '' ? '' : <WeatherForADay dataForThisDay={this.state.result.data[i]} cityName={this.state.result.city_name} countryCode={this.state.result.country_code} />)
    }
    return cards
  }

  // This method gets the image which represents the weather type 
  public getIcon(): string {
    return "https://http.cat/" + this.state.error
  }

  public render() {
    return (
      <div >
        <div className='dank'>
          <text>Please enter a city or country<br /></text>
          <input
            onKeyPress={this.handleOnChange}
          />
        </div>

        <div>
          {this.createCard()}
        </div>

        <div className='dank'>
          {this.state.error === '' ? '' : 'An error occured, please check your spelling, or try again later.'}
        </div>

        <div className='dank'>
          {this.state.error === '' ? '' : <img src={this.getIcon()} width='50%' />}
        </div>

        <footer className="text-center bottom-space">
          <p>
            Developed by
            <a href="https://github.com/Pathical"> @Jack Mao</a>
            .
            Special thanks to
            <a href="https://www.weatherbit.io/"> @weatherbit</a>
            , and
            <a href="https://http.cat/"> @Cat Images</a>
            .
          </p>
        </footer>
      </div>
    );
  }
}