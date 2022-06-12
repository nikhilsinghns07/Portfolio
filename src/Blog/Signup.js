import React ,{ useState } from 'react'
import {TextField,CircularProgress,Alert,Button} from "@mui/material"
import {NavLink} from '../components/NavbarElements'
import { useHistory } from 'react-router-dom';
import background from '../pics/blogbg.jpg'
import Footer from '../components/Footer';

const Signup = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUserName] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null)

    let history = useHistory()
    let error;

    const signUpHandler = () => {
        if(!email || !password || !username){
            setErrorMessage("All the Fields are requried")
            return;
        }

        setIsLoading(true)
        fetch("https://blogbackend7.herokuapp.com/signup",{
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "username" : username,
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

            history.push("/login")
        })
    }
    
    return (
        <React.Fragment>
            <div style={{ backgroundImage: `url(${background})`}}>
                <div style={{flexDirection:'column',textAlign:'center',padding:10}}>
                    <h2 style={{fontFamily:'cursive'}}>Create a Free Account</h2>    
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                        <h5 style={{}}>Already a member ?</h5>
                        <NavLink to='/login'>Login</NavLink>
                    </div>

                    {isLoading ? <CircularProgress /> : null}

                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <TextField id="filled-basic" label="UserName" variant="filled" value={username} onChange = {(e) => {setUserName(e.target.value)}}/>    
                        <TextField id="filled-basic" label="Email" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                        <TextField id="filled-basic" label="Password" variant="filled" value={password} onChange = {(e) => {setPassword(e.target.value)}}/>    

                    </div>
                    
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',padding:10}}>
                        {errorMessage ?  <Alert severity="error">{errorMessage}</Alert>: null}
                    </div>
                    
                    <Button onClick={() => {signUpHandler()}}>SignUp</Button> <br />   
                    
                        
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Signup
