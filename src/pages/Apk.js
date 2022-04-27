import React from "react"
import Footer from "../components/Footer"
import {Card,CardHeader,Avatar,CardMedia,CardContent,Typography} from '@mui/material'
import {ListItem,List} from '@mui/material'
import { red } from '@mui/material/colors';
import weatherAndroid from '../pics/weather1.jpg'
import gym1 from '../pics/gym1.jpg'
import gymLogin from '../pics/gymLogin.jpg'
import background from '../pics/background.jpg'
import './style.css'

const Apk = () => {
    return(
        <React.Fragment>
            <div style={{ backgroundImage: `url(${background})`}}>
                <div class="container">

                    <Card sx={{ maxWidth: 345}} >
                        <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">W</Avatar>}
                        title="Weather"
                        subheader="Get Your Weather Details."
                        />
                        <CardMedia component="img" height="194" image={weatherAndroid} alt="Paella dish"/>
                        <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This is a Weather Forecast Android Application which gets your current co-ordinates for your location info
                            and provides with your Weather Forecast which includes :  <br/>
                            <List>
                                <ListItem disablePadding>Current Weather Details : Max,Min,Feels_Like,Wind Speed</ListItem>
                                <ListItem disablePadding>Pressure,Sunrise,Sunset,Humidity</ListItem>
                                <ListItem disablePadding>7-Day Forecast</ListItem>    
                            </List>
                        </Typography>
                        </CardContent>
                    </Card> 
                    <br />
                    
                    <br />

                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">B</Avatar>}
                        title="BeFit07"
                        subheader="App for Gym Freaks"
                        />
                        <CardMedia component="img" height="194" image={gym1} alt="Paella dish"/>
                        <CardMedia component="img" height="194" image={gymLogin} alt="Paella dish"/>

                        <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        This is a Fitness android app desiged for beginners.It has many exercies specific to different muscle groups.
                                    It has embedded Youtube Video to check your correct form.Yoga and Meditation guides option is also present.
                           
                        </Typography>
                        </CardContent>
                </Card>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Apk

