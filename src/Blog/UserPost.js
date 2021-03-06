import React,{useState,useEffect} from 'react';
import {CircularProgress,Box,Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material'
import background from '../pics/blogbg.jpg'
import { useHistory } from "react-router-dom";

export default function UserPost() {
    let username;
    const [loading,setLoading] = useState(false)
    const [userpost,setUserPost] = useState([])
    let history = useHistory();
    
    username = window.localStorage.getItem('username')
    const fetchUserPost = () => {
        setLoading(true)
        fetch('https://blogbackend7.herokuapp.com/userpost',{
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                "username" : username
            })
        }).then(res => res.json())
        .then(data => {
            setLoading(false)
            setUserPost(data.posts)     
        })
    }

    useEffect(() => {
        fetchUserPost()
    },[])

    const editPostHandler = (id) => {
        window.localStorage.setItem('editposttoken',id)
        history.push('/editpost')
    }

    return (
        <div style={{ backgroundImage: `url(${background})`}}>

            { loading === true ? 
            <Box style={{textAlign:'center',padding:2}}>
                <CircularProgress /> 
                <p>Loading</p>
            </Box> : null 
            }

            {
                userpost.map((post,idx) => 
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',padding:10,}}>
                    <Card sx={{ width:'100%' }}  key={idx}>
                        <CardMedia component="img" height="200" image={post.imageUrl} alt="Post Image"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {post.content}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <NavLink to='/edit' >Edit</NavLink> */}
                            <Button size="small" onClick={() => {editPostHandler(post._id)}}>Edit</Button>
                            <Button size="small">Delete</Button>
                        </CardActions>
                    </Card>
                </div>
                )
            }
        </div>
  );
}

