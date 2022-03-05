import React from "react"
import Footer from "../components/Footer"
import './Apk.css'
import weatherAndroid from '../pics/weather1.jpg'
import weather2 from '../pics/weather2.jpg'
import gym1 from '../pics/gym1.jpg'
import gymLogin from '../pics/gymLogin.jpg'


import {Card,Button,ListGroup,ListGroupItem} from 'react-bootstrap'
const Apk = () => {
    return(
        <React.Fragment>
            <div class="weather">
                <Card style={{padding:50}}>
                    <Card.Header as="h5">Weather</Card.Header>
                    <div class='img'>
                        <img class='img1' src={weatherAndroid} alt='weather'></img>
                        <img class='img1' src={weather2} alt='weather'></img>
                    </div>
                    <Card.Body>
                        
                        <Card.Text>
                            This is a Weather Forecast Android Application which gets your current co-ordinates for your location info
                            and provides with your Weather Forecast which includes : 
                            <ListGroup className="flush">
                                <ListGroupItem>Current Weather Details : Max,Min,Feels_Like,Wind Speed</ListGroupItem>
                                <ListGroupItem>Pressure,Sunrise,Sunset,Humidity</ListGroupItem>
                                <ListGroupItem>7-Day Forecast</ListGroupItem>
                            </ListGroup>
                        </Card.Text>
                        <Button variant="primary" href="https://drive.google.com/file/d/1fJacmht9anuSlELSZHNlW6wiTJ7IWvuZ/view?usp=sharing">Download</Button>
                    </Card.Body>
                </Card>
            </div>

            <div class="weather">
                <Card style={{padding:50}}>
                    <Card.Header as="h5">BeFit07</Card.Header>
                    <div class='img1div'>
                        <img class='img1' src={gym1} alt='gym'></img>
                        <img class='img1' src={gymLogin} alt='gym'></img>
                    </div>
                    <Card.Body>
                        <Card.Text>
                            This is a Fitness android app desiged for beginners.It has many exercies specific to different muscle groups.
                            It has embedded Youtube Video to check your correct form.Yoga and Meditation guides option is also present.
                        </Card.Text>
                        <Button variant="primary" href="https://drive.google.com/file/d/1fFj87j2mFOS_AoynAPG8jFyZ_anPoH_f/view?usp=sharing">Download</Button>
                    </Card.Body>
                </Card>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Apk