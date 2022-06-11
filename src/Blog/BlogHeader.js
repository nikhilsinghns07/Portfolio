import React , {useState,useEffect} from 'react'
import {Button} from '@mui/material'
import {NavLink} from '../components/NavbarElements'

const BlogHeader = async () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    let token ;

    try {
         token = await window.localStorage.getItem("loginToken")
         console.log(token)
    } catch (e) {
        console.log(e)
    }

    if(token != null) {
        setIsLoggedIn(true)
    }
    
    
    return (
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingTop:5}}>
            <Button>Create a Post</Button>            
        </div>
    )
}

export default BlogHeader