import React from "react"
import './style.css'
import nsbooksimg  from '../pics/nsbooks.png'
import Estate from '../pics/Estate.png'
import todo from '../pics/todo.png'
import food from '../pics/food.png'
import Expense from '../pics/Expense.png'
import mapty from '../pics/mapty.png'
import newsAndroid  from '../pics/News.png'
import todoAndroid from '../pics/todoAndroid.jpg'
import weatherAndroid from '../pics/weather1.jpg'
import gym from '../pics/gym1.jpg'
import background from '../pics/background.jpg'
import { ExternalLink } from 'react-external-link';
import Footer from "../components/Footer"
const Project = () => {

    return(
        <React.Fragment>
            <div style={{ backgroundImage: `url(${background})`}}>
            <section id="projects">
                <div class="projects container">
                    <p class='desc'> These are Some of my Web  Projects built using JavaScript(Reactjs & Nodejs).</p>
                    <div class="all-projects">

                        <div class="project-item">
                            <div class="project-info">
                                <h1>Project 1</h1> <br/>
                                <h2>nsBooks</h2> <br/>
                                <p>
                                    This is an open Library.In which user can upload and download books for free.Features : email integration , session storage , authentication. <br/> 
                                    Created using Expressjs and Mongoose
                                </p>
                                <ExternalLink href="https://nsbooks.herokuapp.com"> nsBooks </ExternalLink>
                            </div>
                            <div class='project-img'>
                                <img src={nsbooksimg} alt='nsbooks'/>
                            </div>
                        </div>

                        <div class="project-item">
                            <div class="project-info">
                                <h1>Project 2</h1> <br/>
                                <h2>Real Estate</h2> <br/>
                                <p>
                                    This is a SPA demo of Real Estate Website built using React and For email integration Express and SendGrid-mail-transport has 
                                    been used.
                                </p>
                                <ExternalLink href='https://realestatens07.herokuapp.com/'> Real Esatate </ExternalLink>
                            </div>
                            <div class='project-img'>
                                <img src={Estate} alt='Real Estate'/>
                            </div>
                        </div>

                        <div class="project-item">
                            <div class="project-info">
                                <h1>Project 3</h1> <br/>
                                <h2>TODO List</h2> <br/>
                                <p>
                                    This was my first React application where you can store all your pending work.
                                    This does not store any data in any kind of database.So you can loose your data when you refresh the webpage.
                                </p>
                                <ExternalLink href='https://react-course-5686c.web.app/'>TO DO APP</ExternalLink>
                            </div>
                            <div class='project-img'>
                                    <img src={todo} alt='TODO'/>
                            </div>
                        </div>

                        <div class="project-item">
                            <div class="project-info">
                                <h1>Project 4</h1> <br/>
                                <h2>React Expense Tracker</h2> <br/>
                                <p>
                                    This is an Expense Tracker React application which shows Expenses of month or of a specific year.
                                    This app is on Github (not deployed).
                                </p>
                                <ExternalLink href='https://github.com/nikhilsinghns07/react-expense-tracker'>React Expense Tracker GitHub.</ExternalLink>
                            </div>
                            <div class='project-img'>
                                <img src={Expense} alt='Expense Tracker'/>
                            </div>
                        </div>

                        <div class="project-item">
                            <div class="project-info">
                                <h1>Project 5</h1> <br/>
                                <h2>Food Order App</h2> <br/>
                                <p>
                                    This is a food order with all the basics functionalities like Cart and Order Button.
                                    This hasn't been deployed although it's on github.
                                </p>
                                <ExternalLink href='https://github.com/nikhilsinghns07/FoodOrderApp'>Food Order Github</ExternalLink>
                            </div>
                            <div class='project-img'>
                                <img src={food} alt='food order'/>
                            </div>
                        </div>

                        <div class="project-item">

                            <div class="project-info">
                                <h1>Project 6</h1> <br/>
                                <h2>Mapty App</h2> <br/>
                                <p>
                                    This is a Map App built on JavaScript which shows your Current location using Leaflet & Open Street Map API. <br/>
                                    This app also has not been deployed.
                                </p>
                                <ExternalLink href='https://github.com/nikhilsinghns07/MaptyApp'>Mapty APP Github</ExternalLink>
                            </div>

                            <div class='project-img'>
                                <img src={mapty} alt='Mapty'/>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </section>

            <section id="projects">
                <div class="projects container">
                    <p class='desc'> These are Some of  Android Projects built using ReactNative.</p>
                    <div class="all-projects">

                        <div class="project-item">
                            <div class="project-info">
                                <h1>Project 1</h1> <br/>
                                <h2>TODO App</h2> <br/>
                                <p>This is a TODO App built using React-Native. Download Link - </p>
                                <ExternalLink href="https://expo.dev/artifacts/ecdce15a-ba04-4f91-be88-6e4b48a7f87a" >TODO App</ExternalLink>
                            </div>
                            <div class="project-img">
                                <img src={todoAndroid} alt='todo' />
                            </div>
                        </div>

                        <div class="project-item">
                            <div class="project-info">
                                <h1>Project 2</h1> <br/>
                                <h2>News App</h2> <br/>
                                <p>This is a News App built using React-Native.Data gets fetch from <ExternalLink href="https://github.com/SauravKanchan/NewsAPI">News API</ExternalLink> and rendered to
                                the app.Download Link - 
                                </p>
                                <ExternalLink href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40nikhilsinghns07/News-App-8d81009cde8545929cb4ff4cedc9d99e-signed.apk">News App</ExternalLink>
                            </div>
                            <div class="project-img">
                                <img src={newsAndroid} alt='news'/>
                            </div>
                        </div>

                        <div class="project-item">
                            <div class="project-info">
                                <h1>Project 3</h1> <br/>
                                <h2>Weather App</h2> <br/>
                                <p>This is a Weather App built using React-Native.Data gets fetch from <ExternalLink href="https://openweathermap.org/api">Weather API</ExternalLink> and rendered to
                                the app.Download apk-
                                </p>
                                <ExternalLink href="https://nikhilsingh07.herokuapp.com/apk">Weather App</ExternalLink>
                            </div>
                            <div class="project-img">
                                <img src={weatherAndroid} alt='weather'/>
                            </div>
                        </div>

                        <div class="project-item">
                            <div class="project-info">
                                <h1>Project 4</h1> <br/>
                                <h2>BeFit07</h2> <br/>
                                <p>This is a Fitness App built using React-Native.This is a full stack application.backend is built using ExpressJs.
                                    For DBMS i have used MongoDB.
                                    Download apk-
                                </p>
                                <ExternalLink href="https://nikhilsingh07.herokuapp.com/apk">Download</ExternalLink>
                            </div>
                            <div class="project-img">
                                <img src={gym} alt='gym'/>
                            </div>
                        </div>

                    </div>
                </div>
                

            </section>


            <br/> <br/> <br/>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Project