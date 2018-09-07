
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import CardMedia from '@material-ui/core/CardMedia';
import * as React from 'react';





class WeatherForADayApp extends React.Component<{ dataForThisDay: any, cityName: any, countryCode: any }> {

    public getIcon(): string {
        return "https://www.weatherbit.io/static/img/icons/" + this.props.dataForThisDay.weather.icon + ".png"
    }

    public render() {
        return (
            <div className="weatherCard">
                <Card>
                    <CardContent >
                        <Typography gutterBottom={false} variant="headline" component="h2" style={{ fontSize: 50}}>
                            {this.props.cityName},{this.props.countryCode}
                        </Typography>
                        <Typography component="p" style={{ fontSize: 25}}  >
                            {this.props.dataForThisDay.weather.description}
                        </Typography>
                        <div >
                            <img src={this.getIcon()} />
                        </div>
                        <Typography component="p" style={{ fontSize: 35 }}>
                            {this.props.dataForThisDay.max_temp} °C
                        </Typography>
                        <Typography component="p" style={{ fontSize: 20 }}>
                            Percipitation: {this.props.dataForThisDay.pop} %
                        </Typography>
                        <Typography component="p" style={{ fontSize: 20 }}>
                            Humidity: {this.props.dataForThisDay.rh} %
                        </Typography>
                        <Typography component="p" style={{ fontSize: 20 }}>
                            Wind speed: {this.props.dataForThisDay.wind_gust_spd} km/h
                        </Typography>
                        <Typography component="p" style={{ fontSize: 20 }}>
                            UV index: {this.props.dataForThisDay.uv}
                        </Typography>
                        <Typography component="p" style={{ fontSize: 20 }}>
                            Date: {this.props.dataForThisDay.valid_date}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default (WeatherForADayApp);