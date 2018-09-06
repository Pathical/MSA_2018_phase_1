
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';



export default class App extends React.Component<{dataForThisDay: any, cityName: any, countryCode: any}> {


    public getIcon(): string{
        return "https://www.weatherbit.io/static/img/icons/" + this.props.dataForThisDay.weather.icon +".png"
    }

    public render() {
        return (
            <Card style={{maxWidth: 400 }}>
                
                <CardContent>
                    <Typography gutterBottom={false} variant="headline" component="h2" style={{fontSize: 50}}>
                        {this.props.cityName},{this.props.countryCode}
                    </Typography>
                    <div >
                        <img src={this.getIcon()}/>
                    </div>
                    <Typography component="p" style={{fontSize: 35}}>
                        {this.props.dataForThisDay.max_temp} °C
                    </Typography>
                    <Typography component="p" style={{fontSize: 20}}>
                        Percipitation: {this.props.dataForThisDay.pop} %
                    </Typography>
                    <Typography component="p" style={{fontSize: 20}}>
                        Humidity: {this.props.dataForThisDay.rh} %
                    </Typography>
                    <Typography component="p" style={{fontSize: 20}}>
                        Wind speed: {this.props.dataForThisDay.wind_gust_spd} km/h
                    </Typography>
                    <Typography component="p" style={{fontSize: 20}}>
                        Date: {this.props.dataForThisDay.valid_date} 
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}