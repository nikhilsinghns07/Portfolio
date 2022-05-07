import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {NavLink} from '../components/NavbarElements'
import { Button } from '@mui/material';

const Signup = () => {
    
    return (
        <React.Fragment>
            <div style={{flexDirection:'column',textAlign:'center',padding:10}}>
                    
                    <h2 style={{fontFamily:'cursive'}}>Create a Free Account</h2>
                    
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                        <h5 style={{}}>Already a member ?</h5>
                        <NavLink to='/login'>Login</NavLink>
                    </div>

                    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '50ch' },}} noValidate autoComplete="off">
                        <TextField id="filled-basic" label="Username" variant="filled" /> <br />
                        <TextField id="filled-basic" label="Email" variant="filled" /> <br />
                        <TextField id="filled-basic" label="Password" variant="filled" /> <br />
                        <TextField id="filled-basic" label="Confirm Password" variant="filled" /> <br />

                    </Box>
                    <Button>Sign Up</Button> <br />
                    
            </div>
        </React.Fragment>
    )
}

export default Signup
