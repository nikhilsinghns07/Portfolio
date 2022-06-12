import React,{ useState } from 'react'
import {CircularProgress,TextField,Button,Alert} from '@mui/material'
import {NavLink} from '../components/NavbarElements';
import { useHistory } from "react-router-dom";
import background from '../pics/blogbg.jpg'
import Footer from '../components/Footer'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null)

    let history = useHistory();
    let error,token;

    const loginHandler =  () => {
        if(!email || !password) {
            setErrorMessage('Enter Email & Password')
            return;
        }

        setIsLoading(true)
        fetch("https://blogbackend7.herokuapp.com/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "email" : email,
                "password" : password
            })
        }).then(res => res.json())
        .then(data => {
            error = data.error
            setErrorMessage(data.error)
            setIsLoading(false)

            if(error) {
                return;
            }

            token = data.token
            window.localStorage.setItem("loginToken", token);
            history.push("/blog")
        })
    }

    return (
        <React.Fragment>
            <div style={{ backgroundImage: `url(${background})`}}>

                <div style={{flexDirection:'column',textAlign:'center',padding:10}}>
                    <h2 style={{fontFamily:'cursive'}}>Login</h2>

                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                        <h5 style={{}}>New ?</h5>
                        <NavLink to='/signup'>SignUp</NavLink>
                    </div>

                    {isLoading ? <CircularProgress /> : null}
                    
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <TextField id="filled-basic" label="Email" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
                        <TextField id="filled-basic" label="Password" variant="filled" value={password} onChange = {(e) => {setPassword(e.target.value)}}/>    
                    </div>
                    
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',padding:10}}>
                        {errorMessage ?  <Alert severity="error">{errorMessage}</Alert>: null}
                    </div>
                    
                    <Button onClick={() => {loginHandler()}}>Login</Button> <br />
                    <Button>Forgot Password</Button>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Login