import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {NavLink} from '../components/NavbarElements'
import { Button } from '@mui/material';

const LoginHandler = () => {
    
}


const Login = () => {
    return (
        <React.Fragment>
            <div style={{flexDirection:'column',textAlign:'center',padding:10}}>
                <h2 style={{fontFamily:'cursive'}}>Login</h2>
    
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                    <h5 style={{}}>New ?</h5>
                    <NavLink to='/signup'>SignUp</NavLink>
                </div>

                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '50ch' },}} noValidate autoComplete="off">
                    <TextField id="filled-basic" label="Email" variant="filled" /> <br />
                    <TextField id="filled-basic" label="Password" variant="filled" />
                </Box>
                <Button>Login</Button> <br />
                <Button>Forgot Password</Button>
            </div>
            
        </React.Fragment>
    )
}

export default Login