
import * as React from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent';


interface IState {
  error: any,
  result: any
}


export default class App extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props);
    this.state = {error:'', result: '' }
    this.handleOnChange = this.handleOnChange.bind(this);
  }


  public handleOnChange(event: any) {
    if (event.key === 'Enter') {
      this.getWeatherbyCityName(event.target.value);
    }
  }


  public getWeatherbyCityName(cityName: any) {
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?key=e7739c749efd4516afe5091f2010478b&days=1&city=' + cityName, {
      method: 'GET'
    }).then((response: any) => {
      if (!response.ok){
        this.setState({
          error: 'An error occured, polease try again later',
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



  public render() {
    return (
      <div>
        <div>
          <input
            onKeyPress={this.handleOnChange}
          />
        </div>
        <div>
          {this.state.result.country_code}
        </div>
        <FirstComponent />

      </div>

    );
  }

}